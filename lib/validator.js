var xsdSchemas = require('./xsdSchemas');

var restrictionCheck = {
    string: function (type, value) {
      var len = value ? value.length : 0,
        ret = true;
      Object.getOwnPropertyNames(type).forEach(function (r) {
        switch (r) {
          case "base":
            break;
          case "minLength":
            if (!len || (type.minLength && (len < type.minLength))) ret = false;
            break;
          case "maxLength":
            if (!len || (type.maxLength && (len < 0 || len > type.maxLength))) ret = false;
            break;
          case "pattern":
            var reg = new RegExp("^" + type[r] + "$");
            if (!reg.test(value))
              ret = false;
            break;
          case "enumeration":
            if (!(type[r] instanceof Array))
              throw "Unexpected error";
            if (type[r].indexOf(value) < 0) ret = false;
            break;
          default:
            throw "Not implemented " + r + ", " + value;
        }
      });

      return ret;
    },
    dateTime: function (type, value) {
      var date = new Date(value);
      return !isNaN(date.valueOf());
    },
    decimal: function (type, value) {
      var ret = true,
        reg = new RegExp("^([+]|-)?([0-9]+([.]?[0-9]*)?|[.]?[0-9]+)$");
      if (!reg.test(value))
        return false;
      if (isNaN(value)) return false;
      Object.getOwnPropertyNames(type).forEach(function (r) {
        switch (r) {
          case "base":
            break;
          case "fractionDigits":
            var pattern = "^[0-9]+[.]?[0-9]{0," + type.fractionDigits + "}$",
              reg = new RegExp(pattern);
            if (!reg.test(value))
              ret = false;
            break;
          case "totalDigits":
            if (value.length > parseInt(type.totalDigits))
              ret = false;
            break;
          case "minInclusive":
            if (value < type[r]) ret = false;
            break;
          default:
            throw "Not implemented " + r + ", " + value;
        }
      });
      return ret;
    },
    boolean: function (type, value) {
      return !(value !== "true" && value !== "false");
    },
    date: function (type, value) {
      var date = new Date(value);
      return !isNaN(date.valueOf());
    }
  },
  undef = function (data) {
    return typeof data === "undefined";
  },
  choiceFlag = function (xsdType) {
    return xsdType && xsdType.sequence && xsdType.sequence.choice;
  },
  simpleContentFlag = function (xsdType) {
    return xsdType && xsdType.simpleContent;
  },
  checkChoiceElements = function (choices, data, elementName) {
    var element = undefined;
    choices.forEach(function (choice) {
      if (!undef(data[choice.name])) {
        if (element)
          throw "Only one child element is allowed in " + elementName;
        else
          element = choice;
      }
    });
    return element;
  },
  checkIndicators = function (indicators, data) {
    //TODO: indicators control
    if (undef(data) && (undef(indicators.minOccurs) || indicators.minOccurs > 0)) {
      throw "Missing element " + indicators.name;
    }

    if (data instanceof Array) {
      var minOccurs = indicators.minOccurs || 1,
        maxOccurs = indicators.maxOccurs || data.length;

      if (data.length < minOccurs || data.length > maxOccurs)
        throw "Element " + indicators.name + " exceeded the range of occurence " + minOccurs + ", " + maxOccurs;
    }

    return true;
  },
  continueCheck = function (element, data) {
    return checkIndicators(element, data) && !(undef(data) && element.minOccurs == 0);
  },
  checkOrder = function (xsdType, data, elementName) {
    //unknown elements in input

    if (typeof data !== "object") {
      throw "Expected " + elementName + " to be a complex type";
    }

    var xmlEl = Object.getOwnPropertyNames(data);

    if (xsdType.sequence) {

      xsdType.sequence.element.forEach(function (element) {
        checkIndicators(element, data[element.name]);
      });

      var xsdElements = xsdType.sequence.element.map(function (el) {
        return el.name;
      });

      var maxIdx = 0;
      for (var i = 0, len = xmlEl.length; i < len; i++) {
        var idx = xsdElements.indexOf(xmlEl[i]);
        if (idx < 0)
          throw "Unexpected element " + xmlEl[i] + ": "+elementName;
        if (idx < maxIdx)
          throw "Expected " + xmlEl[i] + " to be on the " + idx + " position :"+elementName;
        maxIdx = idx;
      }
    }
  },
  checkSimpleTypeError = function (type, data, elementName) {
    var msg = "";
    Object.getOwnPropertyNames(type).forEach(function (p) {
      msg += " " + p + "=" + type[p];
    });
    throw "Invalid value " + elementName + "='" + data + "'," + msg;
  };

module.exports = function (schema){
  return {
    schema: xsdSchemas[schema],
    checkElement: function (elementName, typeName, data) {
      var xsdType = this.schema.complexTypes[typeName],
        complex = !!xsdType;
      if (!complex) {
        xsdType = this.schema.simpleTypes[typeName];
      }
      if (!xsdType)
        throw "Unknown type " + typeName;

      if (complex) {
        this.checkComplexType(elementName, xsdType, data);
      } else {
        this.checkSimpleType(xsdType, data, elementName);
      }
    },
    check: function (startElement, startType, data) {
      try {
        this.checkElement(startElement, startType, data);
      } catch (e) {
        throw new Error(startElement+","+e.message || e);
      }
    },
    checkElements: function (xsdType, data, elementName) {
      var self = this,
        elements = xsdType.sequence.element;
      checkOrder(xsdType, data, elementName);
      elements.forEach(function (element) {
        if (continueCheck(element, data[element.name])) {
          self.checkElement(element.name, element.type, data[element.name]);
        }
      });
    },
    checkSimpleType: function (xsdType, data, elementName) {
      //TODO: 
      var check = restrictionCheck[xsdType.base];
      if (undef(check))
        throw "Not implemented base " + xsdType.base;

      if (data instanceof Array) {
        for (var i = 0, len = data.length; i < len; i++) {
          if (!check(xsdType, data[i])) {
            checkSimpleTypeError(xsdType, data[i], elementName);
          }
        }
      }
      if (!check(xsdType, data))
        checkSimpleTypeError(xsdType, data, elementName);
    },
    checkSimpleContentType: function (simpleContentType, data) {
      //TODO:

      if (!simpleContentType.extension)
        throw "Unexpected error (extension)";

      //validate base type
      var xsdTypeBase = this.schema.simpleTypes[simpleContentType.extension.base];
      if (!xsdTypeBase)
        throw "Expected base type";
      this.checkSimpleType(xsdTypeBase, data._);

      //validate extension
      if (simpleContentType.extension.attribute) {
        if (!data.$ || !(data.$ instanceof Array))
          throw "Expected attributes in $ property";
        var name = simpleContentType.extension.attribute.name,
          value = undefined;
        data.$.forEach(function (attr) {
          if (attr.name === name) {
            value = attr.value;
          }
        });
        if (undef(value) && simpleContentType.extension.attribute.use === "required")
          throw "Expected attribute value: "+name;

        var xsdType = this.schema.simpleTypes[simpleContentType.extension.attribute.type];
        if (!xsdType)
          throw "Expected simple type";
        this.checkSimpleType(xsdType, value);
      }

    },
    checkComplexType: function (elementName, xsdType, data) {
      var self = this,
        choiceType = choiceFlag(xsdType),
        simpleContentType = simpleContentFlag(xsdType);

      if (choiceType) {
        if (data instanceof Array) {
          data.forEach(function (d) {
            var element = checkChoiceElements(choiceType.element, d, elementName);
            if (undef(element)) {
              throw "Invalid element in " + elementName;
            }
            self.checkElement(element.name, element.type, d[element.name]);
          })
        } else {
          var element = checkChoiceElements(choiceType.element, data, elementName);
          if (undef(element)) {
            throw "Invalid element in " + elementName;
          }
          this.checkElement(element.name, element.type, data[element.name]);
        }
      } else if (simpleContentType) {
        this.checkSimpleContentType(simpleContentType, data);
      } else {
        if (data instanceof Array) {
          data.forEach(function (d) {
            self.checkElements(xsdType, d, elementName);
          })
        } else {
          this.checkElements(xsdType, data, elementName);
        }
      }
    },
    checkValue: function (type, value) {
      if (!value)
        return true;
      try {
        var xsdTypeBase = this.schema.simpleTypes[type];
        if (!xsdTypeBase)
          return false;
        this.checkSimpleType(xsdTypeBase, value);
        return true;
      } catch (err) {
        return false;
      }
    }
  }
};

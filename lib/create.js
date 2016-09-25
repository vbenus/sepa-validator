var fs = require('fs'),
  sax = require('sax');

var schema = 'pain.001.001.03';
var xsd = fs.readFileSync(schema + '.xsd', 'utf-8');

var skipTags = ['annotation', 'appinfo', 'documentation'];


var parser = sax.parser(true, {normalize: true, trim: true});

var removeNamespaces = function (tag) {
  return tag.slice(tag.indexOf(':') + 1);
};
var simpleType = undefined,
  complexType = undefined;
var processing = {
  simpleType: false,
  complexType: false
};

var simpleTypes = {},
  complexTypes = {};

var parentFns = [];

var tagFn = undefined; //fcia pre spracovanie nasledujuceho elementu

var assignTagFn = function (fn) {
  parentFns.push(tagFn);
  tagFn = fn;
};
var parentTagFn = function () {
  tagFn = parentFns.pop();
};
function complexTypeFn(tag) {
  var tagName = removeNamespaces(tag.name);
  if (tagName === "sequence") {
    complexType.sequence = {};
    assignTagFn(sequence);
  }
  if (tagName === "simpleContent") {
    complexType.simpleContent = {};
    assignTagFn(simpleContent);
  }
}
function extension(tag) {
  var tagName = removeNamespaces(tag.name);
  if (tagName !== "attribute")
    throw tagName + " in choice not implemented";
  complexType.simpleContent.extension.attribute = tag.attributes;
}
function simpleContent(tag) {
  var tagName = removeNamespaces(tag.name);
  if (tagName === "extension") {
    complexType.simpleContent.extension = tag.attributes;
    assignTagFn(extension);
  }
}
function sequence(tag) {
  var tagName = removeNamespaces(tag.name);
  if (tagName === "choice") {
    complexType.sequence.choice = {};
    assignTagFn(choice);
  }
  if (tagName === "element") {
    if (!complexType.sequence.element)
      complexType.sequence.element = [];
    complexType.sequence.element.push(tag.attributes);
  }
}
function choice(tag) {
  var tagName = removeNamespaces(tag.name);
  if (tagName === "annotation" || tagName === "documentation")
    return;
  if (tagName !== "element")
    throw tagName + " in choice not implemented";
  if (!complexType.sequence.choice.element)
    complexType.sequence.choice.element = [];
  complexType.sequence.choice.element.push(tag.attributes);
}
var processSimpleType = function (tag) {
  var tagName = removeNamespaces(tag.name);

  if (tagName === "simpleType") {
    simpleType = {name: tag.attributes.name};
    return
  }

  if (tagName === "restriction") {
    var base = removeNamespaces(tag.attributes.base);
    simpleType.restriction = {base: base};
    return;
  }

  if (simpleType && typeof simpleType.restriction !== "undefined") {
    switch (tagName) {
      case "enumeration":
      {
        if (!simpleType.restriction.enumeration) {
          simpleType.restriction.enumeration = [];
        }
        simpleType.restriction.enumeration.push(tag.attributes.value);
        break;
      }
      default:
      {
        simpleType.restriction[tagName] = tag.attributes.value;
      }
    }
  }
};
parser.onopentag = function (tag) {

  if (skipTags.indexOf(removeNamespaces(tag.name)) > -1)
    return;

  if (processing.simpleType || removeNamespaces(tag.name) === "simpleType") {
    processing.simpleType = true;
    processSimpleType(tag);
  }

  if (removeNamespaces(tag.name) === "complexType") {
    processing.complexType = true;
    complexType = {name: tag.attributes.name};
    parentFns = [];
    tagFn = complexTypeFn;
    return;
  }

  if (tagFn)
    tagFn(tag);
};
parser.onclosetag = function (tag) {
  var tagName = removeNamespaces(tag);

  if (skipTags.indexOf(tagName) > -1)
    return;

  if (simpleType && tagName === "simpleType") {
    simpleTypes[simpleType.name] = simpleType.restriction;
    processing.simpleType = false;
  }

  if (processing.complexType) {
    if (tagFn && tagName === tagFn.name)
      parentTagFn();
    if (tagName === "complexType") {
      var name = complexType.name;
      delete complexType.name;
      complexTypes[name] = complexType;
      conmplexType = {};
      tagFn = undefined;
    }
  }
};
parser.onerror = function (err) {
  console.err(err);
};
parser.onend = function () {
  // console.log(simpleTypes);
  // console.log(complexTypes);
  console.log("END xsd objects");
};
parser.write(xsd);
parser.close();


var types = {};
types[schema] = {
  "complexTypes": complexTypes,
  "simpleTypes": simpleTypes
};

fs.writeFileSync("types.json", JSON.stringify(types), "utf-8");


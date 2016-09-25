module.exports = {
  "pain.001.001.03": {
    "complexTypes": {
      "AccountIdentification4Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "IBAN",
              "type": "IBAN2007Identifier"
            }, {"name": "Othr", "type": "GenericAccountIdentification1"}]
          }
        }
      },
      "AccountSchemeName1Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "Cd",
              "type": "ExternalAccountIdentification1Code"
            }, {"name": "Prtry", "type": "Max35Text"}]
          }
        }
      },
      "ActiveOrHistoricCurrencyAndAmount": {
        "simpleContent": {
          "extension": {
            "base": "ActiveOrHistoricCurrencyAndAmount_SimpleType",
            "attribute": {"name": "Ccy", "type": "ActiveOrHistoricCurrencyCode", "use": "required"}
          }
        }
      },
      "AmountType3Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "InstdAmt",
              "type": "ActiveOrHistoricCurrencyAndAmount"
            }, {"name": "EqvtAmt", "type": "EquivalentAmount2"}]
          }
        }
      },
      "Authorisation1Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "Cd",
              "type": "Authorisation1Code"
            }, {"name": "Prtry", "type": "Max128Text"}]
          }
        }
      },
      "BranchAndFinancialInstitutionIdentification4": {
        "sequence": {
          "element": [{
            "name": "FinInstnId",
            "type": "FinancialInstitutionIdentification7"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "BrnchId", "type": "BranchData2"}]
        }
      },
      "BranchData2": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Id",
            "type": "Max35Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Nm", "type": "Max140Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "PstlAdr",
            "type": "PostalAddress6"
          }]
        }
      },
      "CashAccount16": {
        "sequence": {
          "element": [{
            "name": "Id",
            "type": "AccountIdentification4Choice"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Tp", "type": "CashAccountType2"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Ccy",
            "type": "ActiveOrHistoricCurrencyCode"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Nm", "type": "Max70Text"}]
        }
      },
      "CashAccountType2": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "Cd",
              "type": "CashAccountType4Code"
            }, {"name": "Prtry", "type": "Max35Text"}]
          }
        }
      },
      "CategoryPurpose1Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "Cd",
              "type": "ExternalCategoryPurpose1Code"
            }, {"name": "Prtry", "type": "Max35Text"}]
          }
        }
      },
      "Cheque6": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "ChqTp",
            "type": "ChequeType2Code"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "ChqNb", "type": "Max35Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "ChqFr",
            "type": "NameAndAddress10"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "DlvryMtd",
            "type": "ChequeDeliveryMethod1Choice"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "DlvrTo", "type": "NameAndAddress10"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "InstrPrty",
            "type": "Priority2Code"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "ChqMtrtyDt", "type": "ISODate"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "FrmsCd",
            "type": "Max35Text"
          }, {"maxOccurs": "2", "minOccurs": "0", "name": "MemoFld", "type": "Max35Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "RgnlClrZone",
            "type": "Max35Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "PrtLctn", "type": "Max35Text"}]
        }
      },
      "ChequeDeliveryMethod1Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "Cd",
              "type": "ChequeDelivery1Code"
            }, {"name": "Prtry", "type": "Max35Text"}]
          }
        }
      },
      "ClearingSystemIdentification2Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "Cd",
              "type": "ExternalClearingSystemIdentification1Code"
            }, {"name": "Prtry", "type": "Max35Text"}]
          }
        }
      },
      "ClearingSystemMemberIdentification2": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "ClrSysId",
            "type": "ClearingSystemIdentification2Choice"
          }, {"name": "MmbId", "type": "Max35Text"}]
        }
      },
      "ContactDetails2": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "NmPrfx",
            "type": "NamePrefix1Code"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Nm", "type": "Max140Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "PhneNb",
            "type": "PhoneNumber"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "MobNb", "type": "PhoneNumber"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "FaxNb",
            "type": "PhoneNumber"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "EmailAdr", "type": "Max2048Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Othr",
            "type": "Max35Text"
          }]
        }
      },
      "CreditTransferTransactionInformation10": {
        "sequence": {
          "element": [{
            "name": "PmtId",
            "type": "PaymentIdentification1"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "PmtTpInf", "type": "PaymentTypeInformation19"}, {
            "name": "Amt",
            "type": "AmountType3Choice"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "XchgRateInf",
            "type": "ExchangeRateInformation1"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "ChrgBr", "type": "ChargeBearerType1Code"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "ChqInstr",
            "type": "Cheque6"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "UltmtDbtr",
            "type": "PartyIdentification32"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "IntrmyAgt1",
            "type": "BranchAndFinancialInstitutionIdentification4"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "IntrmyAgt1Acct", "type": "CashAccount16"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "IntrmyAgt2",
            "type": "BranchAndFinancialInstitutionIdentification4"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "IntrmyAgt2Acct", "type": "CashAccount16"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "IntrmyAgt3",
            "type": "BranchAndFinancialInstitutionIdentification4"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "IntrmyAgt3Acct", "type": "CashAccount16"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "CdtrAgt",
            "type": "BranchAndFinancialInstitutionIdentification4"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "CdtrAgtAcct", "type": "CashAccount16"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Cdtr",
            "type": "PartyIdentification32"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "CdtrAcct", "type": "CashAccount16"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "UltmtCdtr",
            "type": "PartyIdentification32"
          }, {
            "maxOccurs": "unbounded",
            "minOccurs": "0",
            "name": "InstrForCdtrAgt",
            "type": "InstructionForCreditorAgent1"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "InstrForDbtrAgt", "type": "Max140Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Purp",
            "type": "Purpose2Choice"
          }, {
            "maxOccurs": "10",
            "minOccurs": "0",
            "name": "RgltryRptg",
            "type": "RegulatoryReporting3"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Tax", "type": "TaxInformation3"}, {
            "maxOccurs": "10",
            "minOccurs": "0",
            "name": "RltdRmtInf",
            "type": "RemittanceLocation2"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "RmtInf", "type": "RemittanceInformation5"}]
        }
      },
      "CreditorReferenceInformation2": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Tp",
            "type": "CreditorReferenceType2"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Ref", "type": "Max35Text"}]
        }
      },
      "CreditorReferenceType1Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "Cd",
              "type": "DocumentType3Code"
            }, {"name": "Prtry", "type": "Max35Text"}]
          }
        }
      },
      "CreditorReferenceType2": {
        "sequence": {
          "element": [{
            "name": "CdOrPrtry",
            "type": "CreditorReferenceType1Choice"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Issr", "type": "Max35Text"}]
        }
      },
      "CustomerCreditTransferInitiationV03": {
        "sequence": {
          "element": [{
            "name": "GrpHdr",
            "type": "GroupHeader32"
          }, {"maxOccurs": "unbounded", "minOccurs": "1", "name": "PmtInf", "type": "PaymentInstructionInformation3"}]
        }
      },
      "DateAndPlaceOfBirth": {
        "sequence": {
          "element": [{"name": "BirthDt", "type": "ISODate"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "PrvcOfBirth",
            "type": "Max35Text"
          }, {"name": "CityOfBirth", "type": "Max35Text"}, {"name": "CtryOfBirth", "type": "CountryCode"}]
        }
      },
      "DatePeriodDetails": {
        "sequence": {
          "element": [{"name": "FrDt", "type": "ISODate"}, {
            "name": "ToDt",
            "type": "ISODate"
          }]
        }
      },
      "Document": {
        "sequence": {
          "element": [{
            "name": "CstmrCdtTrfInitn",
            "type": "CustomerCreditTransferInitiationV03"
          }]
        }
      },
      "DocumentAdjustment1": {
        "sequence": {
          "element": [{
            "name": "Amt",
            "type": "ActiveOrHistoricCurrencyAndAmount"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "CdtDbtInd", "type": "CreditDebitCode"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Rsn",
            "type": "Max4Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "AddtlInf", "type": "Max140Text"}]
        }
      },
      "EquivalentAmount2": {
        "sequence": {
          "element": [{
            "name": "Amt",
            "type": "ActiveOrHistoricCurrencyAndAmount"
          }, {"name": "CcyOfTrf", "type": "ActiveOrHistoricCurrencyCode"}]
        }
      },
      "ExchangeRateInformation1": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "XchgRate",
            "type": "BaseOneRate"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "RateTp", "type": "ExchangeRateType1Code"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "CtrctId",
            "type": "Max35Text"
          }]
        }
      },
      "FinancialIdentificationSchemeName1Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "Cd",
              "type": "ExternalFinancialInstitutionIdentification1Code"
            }, {"name": "Prtry", "type": "Max35Text"}]
          }
        }
      },
      "FinancialInstitutionIdentification7": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "BIC",
            "type": "BICIdentifier"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "ClrSysMmbId",
            "type": "ClearingSystemMemberIdentification2"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Nm", "type": "Max140Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "PstlAdr",
            "type": "PostalAddress6"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Othr", "type": "GenericFinancialIdentification1"}]
        }
      },
      "GenericAccountIdentification1": {
        "sequence": {
          "element": [{"name": "Id", "type": "Max34Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "SchmeNm",
            "type": "AccountSchemeName1Choice"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Issr", "type": "Max35Text"}]
        }
      },
      "GenericFinancialIdentification1": {
        "sequence": {
          "element": [{"name": "Id", "type": "Max35Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "SchmeNm",
            "type": "FinancialIdentificationSchemeName1Choice"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Issr", "type": "Max35Text"}]
        }
      },
      "GenericOrganisationIdentification1": {
        "sequence": {
          "element": [{
            "name": "Id",
            "type": "Max35Text"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "SchmeNm",
            "type": "OrganisationIdentificationSchemeName1Choice"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Issr", "type": "Max35Text"}]
        }
      },
      "GenericPersonIdentification1": {
        "sequence": {
          "element": [{"name": "Id", "type": "Max35Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "SchmeNm",
            "type": "PersonIdentificationSchemeName1Choice"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Issr", "type": "Max35Text"}]
        }
      },
      "GroupHeader32": {
        "sequence": {
          "element": [{"name": "MsgId", "type": "Max35Text"}, {
            "name": "CreDtTm",
            "type": "ISODateTime"
          }, {"maxOccurs": "2", "minOccurs": "0", "name": "Authstn", "type": "Authorisation1Choice"}, {
            "name": "NbOfTxs",
            "type": "Max15NumericText"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "CtrlSum", "type": "DecimalNumber"}, {
            "name": "InitgPty",
            "type": "PartyIdentification32"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "FwdgAgt",
            "type": "BranchAndFinancialInstitutionIdentification4"
          }]
        }
      },
      "InstructionForCreditorAgent1": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Cd",
            "type": "Instruction3Code"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "InstrInf", "type": "Max140Text"}]
        }
      },
      "LocalInstrument2Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "Cd",
              "type": "ExternalLocalInstrument1Code"
            }, {"name": "Prtry", "type": "Max35Text"}]
          }
        }
      },
      "NameAndAddress10": {
        "sequence": {
          "element": [{"name": "Nm", "type": "Max140Text"}, {
            "name": "Adr",
            "type": "PostalAddress6"
          }]
        }
      },
      "OrganisationIdentification4": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "BICOrBEI",
            "type": "AnyBICIdentifier"
          }, {"maxOccurs": "unbounded", "minOccurs": "0", "name": "Othr", "type": "GenericOrganisationIdentification1"}]
        }
      },
      "OrganisationIdentificationSchemeName1Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "Cd",
              "type": "ExternalOrganisationIdentification1Code"
            }, {"name": "Prtry", "type": "Max35Text"}]
          }
        }
      },
      "Party6Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "OrgId",
              "type": "OrganisationIdentification4"
            }, {"name": "PrvtId", "type": "PersonIdentification5"}]
          }
        }
      },
      "PartyIdentification32": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Nm",
            "type": "Max140Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "PstlAdr", "type": "PostalAddress6"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Id",
            "type": "Party6Choice"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "CtryOfRes", "type": "CountryCode"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "CtctDtls",
            "type": "ContactDetails2"
          }]
        }
      },
      "PaymentIdentification1": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "InstrId",
            "type": "Max35Text"
          }, {"name": "EndToEndId", "type": "Max35Text"}]
        }
      },
      "PaymentInstructionInformation3": {
        "sequence": {
          "element": [{
            "name": "PmtInfId",
            "type": "Max35Text"
          }, {"name": "PmtMtd", "type": "PaymentMethod3Code"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "BtchBookg",
            "type": "BatchBookingIndicator"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "NbOfTxs", "type": "Max15NumericText"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "CtrlSum",
            "type": "DecimalNumber"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "PmtTpInf",
            "type": "PaymentTypeInformation19"
          }, {"name": "ReqdExctnDt", "type": "ISODate"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "PoolgAdjstmntDt",
            "type": "ISODate"
          }, {"name": "Dbtr", "type": "PartyIdentification32"}, {
            "name": "DbtrAcct",
            "type": "CashAccount16"
          }, {"name": "DbtrAgt", "type": "BranchAndFinancialInstitutionIdentification4"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "DbtrAgtAcct",
            "type": "CashAccount16"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "UltmtDbtr",
            "type": "PartyIdentification32"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "ChrgBr", "type": "ChargeBearerType1Code"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "ChrgsAcct",
            "type": "CashAccount16"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "ChrgsAcctAgt",
            "type": "BranchAndFinancialInstitutionIdentification4"
          }, {
            "maxOccurs": "unbounded",
            "minOccurs": "1",
            "name": "CdtTrfTxInf",
            "type": "CreditTransferTransactionInformation10"
          }]
        }
      },
      "PaymentTypeInformation19": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "InstrPrty",
            "type": "Priority2Code"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "SvcLvl", "type": "ServiceLevel8Choice"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "LclInstrm",
            "type": "LocalInstrument2Choice"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "CtgyPurp", "type": "CategoryPurpose1Choice"}]
        }
      },
      "PersonIdentification5": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "DtAndPlcOfBirth",
            "type": "DateAndPlaceOfBirth"
          }, {"maxOccurs": "unbounded", "minOccurs": "0", "name": "Othr", "type": "GenericPersonIdentification1"}]
        }
      },
      "PersonIdentificationSchemeName1Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "Cd",
              "type": "ExternalPersonIdentification1Code"
            }, {"name": "Prtry", "type": "Max35Text"}]
          }
        }
      },
      "PostalAddress6": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "AdrTp",
            "type": "AddressType2Code"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Dept", "type": "Max70Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "SubDept",
            "type": "Max70Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "StrtNm", "type": "Max70Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "BldgNb",
            "type": "Max16Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "PstCd", "type": "Max16Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "TwnNm",
            "type": "Max35Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "CtrySubDvsn", "type": "Max35Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Ctry",
            "type": "CountryCode"
          }, {"maxOccurs": "7", "minOccurs": "0", "name": "AdrLine", "type": "Max70Text"}]
        }
      },
      "Purpose2Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "Cd",
              "type": "ExternalPurpose1Code"
            }, {"name": "Prtry", "type": "Max35Text"}]
          }
        }
      },
      "ReferredDocumentInformation3": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Tp",
            "type": "ReferredDocumentType2"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Nb", "type": "Max35Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "RltdDt",
            "type": "ISODate"
          }]
        }
      },
      "ReferredDocumentType1Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "Cd",
              "type": "DocumentType5Code"
            }, {"name": "Prtry", "type": "Max35Text"}]
          }
        }
      },
      "ReferredDocumentType2": {
        "sequence": {
          "element": [{
            "name": "CdOrPrtry",
            "type": "ReferredDocumentType1Choice"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Issr", "type": "Max35Text"}]
        }
      },
      "RegulatoryAuthority2": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Nm",
            "type": "Max140Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Ctry", "type": "CountryCode"}]
        }
      },
      "RegulatoryReporting3": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "DbtCdtRptgInd",
            "type": "RegulatoryReportingType1Code"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Authrty",
            "type": "RegulatoryAuthority2"
          }, {"maxOccurs": "unbounded", "minOccurs": "0", "name": "Dtls", "type": "StructuredRegulatoryReporting3"}]
        }
      },
      "RemittanceAmount1": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "DuePyblAmt",
            "type": "ActiveOrHistoricCurrencyAndAmount"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "DscntApldAmt",
            "type": "ActiveOrHistoricCurrencyAndAmount"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "CdtNoteAmt",
            "type": "ActiveOrHistoricCurrencyAndAmount"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "TaxAmt",
            "type": "ActiveOrHistoricCurrencyAndAmount"
          }, {
            "maxOccurs": "unbounded",
            "minOccurs": "0",
            "name": "AdjstmntAmtAndRsn",
            "type": "DocumentAdjustment1"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "RmtdAmt", "type": "ActiveOrHistoricCurrencyAndAmount"}]
        }
      },
      "RemittanceInformation5": {
        "sequence": {
          "element": [{
            "maxOccurs": "unbounded",
            "minOccurs": "0",
            "name": "Ustrd",
            "type": "Max140Text"
          }, {"maxOccurs": "unbounded", "minOccurs": "0", "name": "Strd", "type": "StructuredRemittanceInformation7"}]
        }
      },
      "RemittanceLocation2": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "RmtId",
            "type": "Max35Text"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "RmtLctnMtd",
            "type": "RemittanceLocationMethod2Code"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "RmtLctnElctrncAdr", "type": "Max2048Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "RmtLctnPstlAdr",
            "type": "NameAndAddress10"
          }]
        }
      },
      "ServiceLevel8Choice": {
        "sequence": {
          "choice": {
            "element": [{
              "name": "Cd",
              "type": "ExternalServiceLevel1Code"
            }, {"name": "Prtry", "type": "Max35Text"}]
          }
        }
      },
      "StructuredRegulatoryReporting3": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Tp",
            "type": "Max35Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Dt", "type": "ISODate"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Ctry",
            "type": "CountryCode"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Cd", "type": "Max10Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Amt",
            "type": "ActiveOrHistoricCurrencyAndAmount"
          }, {"maxOccurs": "unbounded", "minOccurs": "0", "name": "Inf", "type": "Max35Text"}]
        }
      },
      "StructuredRemittanceInformation7": {
        "sequence": {
          "element": [{
            "maxOccurs": "unbounded",
            "minOccurs": "0",
            "name": "RfrdDocInf",
            "type": "ReferredDocumentInformation3"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "RfrdDocAmt", "type": "RemittanceAmount1"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "CdtrRefInf",
            "type": "CreditorReferenceInformation2"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Invcr", "type": "PartyIdentification32"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Invcee",
            "type": "PartyIdentification32"
          }, {"maxOccurs": "3", "minOccurs": "0", "name": "AddtlRmtInf", "type": "Max140Text"}]
        }
      },
      "TaxAmount1": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Rate",
            "type": "PercentageRate"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "TaxblBaseAmt",
            "type": "ActiveOrHistoricCurrencyAndAmount"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "TtlAmt",
            "type": "ActiveOrHistoricCurrencyAndAmount"
          }, {"maxOccurs": "unbounded", "minOccurs": "0", "name": "Dtls", "type": "TaxRecordDetails1"}]
        }
      },
      "TaxAuthorisation1": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Titl",
            "type": "Max35Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Nm", "type": "Max140Text"}]
        }
      },
      "TaxInformation3": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Cdtr",
            "type": "TaxParty1"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Dbtr", "type": "TaxParty2"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "AdmstnZn",
            "type": "Max35Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "RefNb", "type": "Max140Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Mtd",
            "type": "Max35Text"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "TtlTaxblBaseAmt",
            "type": "ActiveOrHistoricCurrencyAndAmount"
          }, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "TtlTaxAmt",
            "type": "ActiveOrHistoricCurrencyAndAmount"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Dt", "type": "ISODate"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "SeqNb",
            "type": "Number"
          }, {"maxOccurs": "unbounded", "minOccurs": "0", "name": "Rcrd", "type": "TaxRecord1"}]
        }
      },
      "TaxParty1": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "TaxId",
            "type": "Max35Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "RegnId", "type": "Max35Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "TaxTp",
            "type": "Max35Text"
          }]
        }
      },
      "TaxParty2": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "TaxId",
            "type": "Max35Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "RegnId", "type": "Max35Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "TaxTp",
            "type": "Max35Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Authstn", "type": "TaxAuthorisation1"}]
        }
      },
      "TaxPeriod1": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Yr",
            "type": "ISODate"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Tp", "type": "TaxRecordPeriod1Code"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "FrToDt",
            "type": "DatePeriodDetails"
          }]
        }
      },
      "TaxRecord1": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Tp",
            "type": "Max35Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "Ctgy", "type": "Max35Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "CtgyDtls",
            "type": "Max35Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "DbtrSts", "type": "Max35Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "CertId",
            "type": "Max35Text"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "FrmsCd", "type": "Max35Text"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Prd",
            "type": "TaxPeriod1"
          }, {"maxOccurs": "1", "minOccurs": "0", "name": "TaxAmt", "type": "TaxAmount1"}, {
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "AddtlInf",
            "type": "Max140Text"
          }]
        }
      },
      "TaxRecordDetails1": {
        "sequence": {
          "element": [{
            "maxOccurs": "1",
            "minOccurs": "0",
            "name": "Prd",
            "type": "TaxPeriod1"
          }, {"name": "Amt", "type": "ActiveOrHistoricCurrencyAndAmount"}]
        }
      }
    },
    "simpleTypes": {
      "ActiveOrHistoricCurrencyAndAmount_SimpleType": {
        "base": "decimal",
        "minInclusive": "0",
        "fractionDigits": "5",
        "totalDigits": "18"
      },
      "ActiveOrHistoricCurrencyCode": {"base": "string", "pattern": "[A-Z]{3,3}"},
      "AddressType2Code": {"base": "string", "enumeration": ["ADDR", "PBOX", "HOME", "BIZZ", "MLTO", "DLVY"]},
      "AnyBICIdentifier": {"base": "string", "pattern": "[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}"},
      "Authorisation1Code": {"base": "string", "enumeration": ["AUTH", "FDET", "FSUM", "ILEV"]},
      "BICIdentifier": {"base": "string", "pattern": "[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}"},
      "BaseOneRate": {"base": "decimal", "fractionDigits": "10", "totalDigits": "11"},
      "BatchBookingIndicator": {"base": "boolean"},
      "CashAccountType4Code": {
        "base": "string",
        "enumeration": ["CASH", "CHAR", "COMM", "TAXE", "CISH", "TRAS", "SACC", "CACC", "SVGS", "ONDP", "MGLD", "NREX", "MOMA", "LOAN", "SLRY", "ODFT"]
      },
      "ChargeBearerType1Code": {"base": "string", "enumeration": ["DEBT", "CRED", "SHAR", "SLEV"]},
      "ChequeDelivery1Code": {
        "base": "string",
        "enumeration": ["MLDB", "MLCD", "MLFA", "CRDB", "CRCD", "CRFA", "PUDB", "PUCD", "PUFA", "RGDB", "RGCD", "RGFA"]
      },
      "ChequeType2Code": {"base": "string", "enumeration": ["CCHQ", "CCCH", "BCHQ", "DRFT", "ELDR"]},
      "CountryCode": {"base": "string", "pattern": "[A-Z]{2,2}"},
      "CreditDebitCode": {"base": "string", "enumeration": ["CRDT", "DBIT"]},
      "DecimalNumber": {"base": "decimal", "fractionDigits": "17", "totalDigits": "18"},
      "DocumentType3Code": {"base": "string", "enumeration": ["RADM", "RPIN", "FXDR", "DISP", "PUOR", "SCOR"]},
      "DocumentType5Code": {
        "base": "string",
        "enumeration": ["MSIN", "CNFA", "DNFA", "CINV", "CREN", "DEBN", "HIRI", "SBIN", "CMCN", "SOAC", "DISP", "BOLD", "VCHR", "AROI", "TSUT"]
      },
      "ExchangeRateType1Code": {"base": "string", "enumeration": ["SPOT", "SALE", "AGRD"]},
      "ExternalAccountIdentification1Code": {"base": "string", "minLength": "1", "maxLength": "4"},
      "ExternalCategoryPurpose1Code": {"base": "string", "minLength": "1", "maxLength": "4"},
      "ExternalClearingSystemIdentification1Code": {"base": "string", "minLength": "1", "maxLength": "5"},
      "ExternalFinancialInstitutionIdentification1Code": {"base": "string", "minLength": "1", "maxLength": "4"},
      "ExternalLocalInstrument1Code": {"base": "string", "minLength": "1", "maxLength": "35"},
      "ExternalOrganisationIdentification1Code": {"base": "string", "minLength": "1", "maxLength": "4"},
      "ExternalPersonIdentification1Code": {"base": "string", "minLength": "1", "maxLength": "4"},
      "ExternalPurpose1Code": {"base": "string", "minLength": "1", "maxLength": "4"},
      "ExternalServiceLevel1Code": {"base": "string", "minLength": "1", "maxLength": "4"},
      "IBAN2007Identifier": {"base": "string", "pattern": "[A-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30}"},
      "ISODate": {"base": "date"},
      "ISODateTime": {"base": "dateTime"},
      "Instruction3Code": {"base": "string", "enumeration": ["CHQB", "HOLD", "PHOB", "TELB"]},
      "Max10Text": {"base": "string", "minLength": "1", "maxLength": "10"},
      "Max128Text": {"base": "string", "minLength": "1", "maxLength": "128"},
      "Max140Text": {"base": "string", "minLength": "1", "maxLength": "140"},
      "Max15NumericText": {"base": "string", "pattern": "[0-9]{1,15}"},
      "Max16Text": {"base": "string", "minLength": "1", "maxLength": "16"},
      "Max2048Text": {"base": "string", "minLength": "1", "maxLength": "2048"},
      "Max34Text": {"base": "string", "minLength": "1", "maxLength": "34"},
      "Max35Text": {"base": "string", "minLength": "1", "maxLength": "35"},
      "Max4Text": {"base": "string", "minLength": "1", "maxLength": "4"},
      "Max70Text": {"base": "string", "minLength": "1", "maxLength": "70"},
      "NamePrefix1Code": {"base": "string", "enumeration": ["DOCT", "MIST", "MISS", "MADM"]},
      "Number": {"base": "decimal", "fractionDigits": "0", "totalDigits": "18"},
      "PaymentMethod3Code": {"base": "string", "enumeration": ["CHK", "TRF", "TRA"]},
      "PercentageRate": {"base": "decimal", "fractionDigits": "10", "totalDigits": "11"},
      "PhoneNumber": {"base": "string", "pattern": "\\+[0-9]{1,3}-[0-9()+\\-]{1,30}"},
      "Priority2Code": {"base": "string", "enumeration": ["HIGH", "NORM"]},
      "RegulatoryReportingType1Code": {"base": "string", "enumeration": ["CRED", "DEBT", "BOTH"]},
      "RemittanceLocationMethod2Code": {
        "base": "string",
        "enumeration": ["FAXI", "EDIC", "URID", "EMAL", "POST", "SMSM"]
      },
      "TaxRecordPeriod1Code": {
        "base": "string",
        "enumeration": ["MM01", "MM02", "MM03", "MM04", "MM05", "MM06", "MM07", "MM08", "MM09", "MM10", "MM11", "MM12", "QTR1", "QTR2", "QTR3", "QTR4", "HLF1", "HLF2"]
      }
    }
  },
  "pain.008.001.02": {
    "complexTypes": {
      "AccountIdentification4Choice": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "IBAN",
                "type": "IBAN2007Identifier"
              }
            ]
          }
        }
      },
      "ActiveOrHistoricCurrencyAndAmount": {
        "simpleContent": {
          "extension": {
            "base": "ActiveOrHistoricCurrencyAndAmount_SimpleType",
            "attribute": {
              "name": "Ccy",
              "type": "ActiveOrHistoricCurrencyCode",
              "use": "required"
            }
          }
        }
      },
      "ActiveOrHistoricCurrencyAndAmount_EPC": {
        "simpleContent": {}
      },
      "AmendmentInformationDetails6": {
        "sequence": {
          "element": [
            {
              "name": "OrgnlMndtId",
              "type": "Max35Text",
              "minOccurs": "0"
            },
            {
              "name": "OrgnlCdtrSchmeId",
              "type": "PartyIdentification32",
              "minOccurs": "0"
            },
            {
              "name": "OrgnlDbtrAcct",
              "type": "CashAccount16",
              "minOccurs": "0"
            },
            {
              "name": "OrgnlDbtrAgt",
              "type": "BranchAndFinancialInstitutionIdentification4",
              "minOccurs": "0"
            }
          ]
        }
      },
      "AmendmentInformationDetails6_EPC": {
        "sequence": {
          "element": [
            {
              "name": "OrgnlMndtId",
              "type": "Max35Text",
              "minOccurs": "0"
            },
            {
              "name": "OrgnlCdtrSchmeId",
              "type": "PartyIdentification32_EPC_5",
              "minOccurs": "0"
            },
            {
              "name": "OrgnlDbtrAcct",
              "type": "CashAccount16_EPC_2",
              "minOccurs": "0"
            },
            {
              "name": "OrgnlDbtrAgt",
              "type": "BranchAndFinancialInstitutionIdentification4_EPC_2",
              "minOccurs": "0"
            }
          ]
        }
      },
      "BranchAndFinancialInstitutionIdentification4": {
        "sequence": {
          "element": [
            {
              "name": "FinInstnId",
              "type": "FinancialInstitutionIdentification7"
            }
          ]
        }
      },
      "BranchAndFinancialInstitutionIdentification4_EPC": {
        "sequence": {
          "element": [
            {
              "name": "FinInstnId",
              "type": "FinancialInstitutionIdentification7_EPC"
            }
          ]
        }
      },
      "BranchAndFinancialInstitutionIdentification4_EPC_2": {
        "sequence": {
          "element": [
            {
              "name": "FinInstnId",
              "type": "FinancialInstitutionIdentification7_EPC_2"
            }
          ]
        }
      },
      "BranchAndFinancialInstitutionIdentification4_EPC_3": {
        "sequence": {
          "element": [
            {
              "name": "FinInstnId",
              "type": "FinancialInstitutionIdentification7_EPC_3"
            }
          ]
        }
      },
      "CashAccount16": {
        "sequence": {
          "element": [
            {
              "name": "Id",
              "type": "AccountIdentification4Choice"
            },
            {
              "name": "Ccy",
              "type": "ActiveOrHistoricCurrencyCode",
              "minOccurs": "0"
            }
          ]
        }
      },
      "CashAccount16_EPC": {
        "sequence": {
          "element": [
            {
              "name": "Id",
              "type": "AccountIdentification4Choice"
            },
            {
              "name": "Ccy",
              "type": "ActiveOrHistoricCurrencyCode",
              "minOccurs": "0"
            }
          ]
        }
      },
      "CashAccount16_EPC_2": {
        "sequence": {
          "element": [
            {
              "name": "Id",
              "type": "AccountIdentification4Choice"
            }
          ]
        }
      },
      "CategoryPurpose1Choice": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "Cd",
                "type": "ExternalCategoryPurpose1Code"
              },
              {
                "name": "Prtry",
                "type": "Max35Text"
              }
            ]
          }
        }
      },
      "CreditorReferenceInformation2": {
        "sequence": {
          "element": [
            {
              "name": "Tp",
              "type": "CreditorReferenceType2",
              "minOccurs": "0"
            },
            {
              "name": "Ref",
              "type": "Max35Text",
              "minOccurs": "0"
            }
          ]
        }
      },
      "CreditorReferenceInformation2_EPC": {
        "sequence": {
          "element": [
            {
              "name": "Tp",
              "type": "CreditorReferenceType2_EPC",
              "minOccurs": "0"
            },
            {
              "name": "Ref",
              "type": "Max35Text",
              "minOccurs": "0"
            }
          ]
        }
      },
      "CreditorReferenceType1Choice": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "Cd",
                "type": "DocumentType3Code"
              }
            ]
          }
        }
      },
      "CreditorReferenceType1Choice_EPC": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "Cd",
                "type": "DocumentType3Code"
              }
            ]
          }
        }
      },
      "CreditorReferenceType2": {
        "sequence": {
          "element": [
            {
              "name": "CdOrPrtry",
              "type": "CreditorReferenceType1Choice"
            },
            {
              "name": "Issr",
              "type": "Max35Text",
              "minOccurs": "0"
            }
          ]
        }
      },
      "CreditorReferenceType2_EPC": {
        "sequence": {
          "element": [
            {
              "name": "CdOrPrtry",
              "type": "CreditorReferenceType1Choice_EPC"
            },
            {
              "name": "Issr",
              "type": "Max35Text",
              "minOccurs": "0"
            }
          ]
        }
      },
      "CustomerDirectDebitInitiationV02": {
        "sequence": {
          "element": [
            {
              "name": "GrpHdr",
              "type": "GroupHeader39"
            },
            {
              "name": "PmtInf",
              "type": "PaymentInstructionInformation4",
              "maxOccurs": "unbounded"
            }
          ]
        }
      },
      "CustomerDirectDebitInitiationV02_EPC": {
        "sequence": {
          "element": [
            {
              "name": "GrpHdr",
              "type": "GroupHeader39_EPC"
            },
            {
              "name": "PmtInf",
              "type": "PaymentInstructionInformation4_EPC",
              "maxOccurs": "unbounded"
            }
          ]
        }
      },
      "DateAndPlaceOfBirth": {
        "sequence": {
          "element": [
            {
              "name": "BirthDt",
              "type": "ISODate"
            },
            {
              "name": "PrvcOfBirth",
              "type": "Max35Text",
              "minOccurs": "0"
            },
            {
              "name": "CityOfBirth",
              "type": "Max35Text"
            },
            {
              "name": "CtryOfBirth",
              "type": "CountryCode"
            }
          ]
        }
      },
      "DirectDebitTransaction6": {
        "sequence": {
          "element": [
            {
              "name": "MndtRltdInf",
              "type": "MandateRelatedInformation6",
              "minOccurs": "0"
            },
            {
              "name": "CdtrSchmeId",
              "type": "PartyIdentification32",
              "minOccurs": "0"
            }
          ]
        }
      },
      "DirectDebitTransaction6_EPC": {
        "sequence": {
          "element": [
            {
              "name": "MndtRltdInf",
              "type": "MandateRelatedInformation6_EPC"
            },
            {
              "name": "CdtrSchmeId",
              "type": "PartyIdentification32_EPC_6",
              "minOccurs": "0"
            }
          ]
        }
      },
      "DirectDebitTransactionInformation9": {
        "sequence": {
          "element": [
            {
              "name": "PmtId",
              "type": "PaymentIdentification1"
            },
            {
              "name": "InstdAmt",
              "type": "ActiveOrHistoricCurrencyAndAmount"
            },
            {
              "name": "ChrgBr",
              "type": "ChargeBearerType1Code",
              "minOccurs": "0"
            },
            {
              "name": "DrctDbtTx",
              "type": "DirectDebitTransaction6",
              "minOccurs": "0"
            },
            {
              "name": "UltmtCdtr",
              "type": "PartyIdentification32",
              "minOccurs": "0"
            },
            {
              "name": "DbtrAgt",
              "type": "BranchAndFinancialInstitutionIdentification4"
            },
            {
              "name": "Dbtr",
              "type": "PartyIdentification32"
            },
            {
              "name": "DbtrAcct",
              "type": "CashAccount16"
            },
            {
              "name": "UltmtDbtr",
              "type": "PartyIdentification32",
              "minOccurs": "0"
            },
            {
              "name": "Purp",
              "type": "Purpose2Choice",
              "minOccurs": "0"
            },
            {
              "name": "RmtInf",
              "type": "RemittanceInformation5",
              "minOccurs": "0"
            }
          ]
        }
      },
      "DirectDebitTransactionInformation9_EPC": {
        "sequence": {
          "element": [
            {
              "name": "PmtId",
              "type": "PaymentIdentification1_EPC"
            },
            {
              "name": "InstdAmt",
              "type": "ActiveOrHistoricCurrencyAndAmount_EPC"
            },
            {
              "name": "ChrgBr",
              "type": "ChargeBearerType1Code",
              "minOccurs": "0"
            },
            {
              "name": "DrctDbtTx",
              "type": "DirectDebitTransaction6_EPC"
            },
            {
              "name": "UltmtCdtr",
              "type": "PartyIdentification32_EPC_3",
              "minOccurs": "0"
            },
            {
              "name": "DbtrAgt",
              "type": "BranchAndFinancialInstitutionIdentification4_EPC_3"
            },
            {
              "name": "Dbtr",
              "type": "PartyIdentification32_EPC_7"
            },
            {
              "name": "DbtrAcct",
              "type": "CashAccount16_EPC_2"
            },
            {
              "name": "UltmtDbtr",
              "type": "PartyIdentification32_EPC_8",
              "minOccurs": "0"
            },
            {
              "name": "Purp",
              "type": "Purpose2Choice_EPC",
              "minOccurs": "0"
            },
            {
              "name": "RmtInf",
              "type": "RemittanceInformation5_EPC",
              "minOccurs": "0"
            }
          ]
        }
      },
      "Document": {
        "sequence": {
          "element": [
            {
              "name": "CstmrDrctDbtInitn",
              "type": "CustomerDirectDebitInitiationV02"
            }
          ]
        }
      },
      "Document_EPC": {
        "sequence": {
          "element": [
            {
              "name": "CstmrDrctDbtInitn",
              "type": "CustomerDirectDebitInitiationV02_EPC"
            }
          ]
        }
      },
      "FinancialInstitutionIdentification7": {
        "sequence": {
          "element": [
            {
              "name": "BIC",
              "type": "BICIdentifier",
              "minOccurs": "0"
            },
            {
              "name": "Othr",
              "type": "GenericFinancialIdentification1",
              "minOccurs": "0"
            }
          ]
        }
      },
      "FinancialInstitutionIdentification7_EPC": {
        "sequence": {
          "element": [
            {
              "name": "BIC",
              "type": "BICIdentifier",
              "minOccurs": "0"
            },
            {
              "name": "Othr",
              "type": "GenericFinancialIdentification1_EPC",
              "minOccurs": "0"
            }
          ]
        }
      },
      "FinancialInstitutionIdentification7_EPC_2": {
        "sequence": {
          "element": [
            {
              "name": "Othr",
              "type": "GenericFinancialIdentification1",
              "minOccurs": "0"
            }
          ]
        }
      },
      "FinancialInstitutionIdentification7_EPC_3": {
        "sequence": {
          "element": [
            {
              "name": "BIC",
              "type": "BICIdentifier",
              "minOccurs": "0"
            },
            {
              "name": "Othr",
              "type": "GenericFinancialIdentification1_EPC",
              "minOccurs": "0"
            }
          ]
        }
      },
      "GenericFinancialIdentification1": {
        "sequence": {
          "element": [
            {
              "name": "Id",
              "type": "Max35Text"
            }
          ]
        }
      },
      "GenericFinancialIdentification1_EPC": {
        "sequence": {
          "element": [
            {
              "name": "Id",
              "type": "Max35Text"
            }
          ]
        }
      },
      "GenericOrganisationIdentification1": {
        "sequence": {
          "element": [
            {
              "name": "Id",
              "type": "Max35Text"
            },
            {
              "name": "SchmeNm",
              "type": "OrganisationIdentificationSchemeName1Choice",
              "minOccurs": "0"
            },
            {
              "name": "Issr",
              "type": "Max35Text",
              "minOccurs": "0"
            }
          ]
        }
      },
      "GenericPersonIdentification1": {
        "sequence": {
          "element": [
            {
              "name": "Id",
              "type": "Max35Text"
            },
            {
              "name": "SchmeNm",
              "type": "PersonIdentificationSchemeName1Choice",
              "minOccurs": "0"
            },
            {
              "name": "Issr",
              "type": "Max35Text",
              "minOccurs": "0"
            }
          ]
        }
      },
      "GenericPersonIdentification1_EPC": {
        "sequence": {
          "element": [
            {
              "name": "Id",
              "type": "Max35Text"
            },
            {
              "name": "SchmeNm",
              "type": "PersonIdentificationSchemeName1Choice_EPC",
              "minOccurs": "0"
            }
          ]
        }
      },
      "GroupHeader39": {
        "sequence": {
          "element": [
            {
              "name": "MsgId",
              "type": "Max35Text"
            },
            {
              "name": "CreDtTm",
              "type": "ISODateTime"
            },
            {
              "name": "NbOfTxs",
              "type": "Max15NumericText"
            },
            {
              "name": "CtrlSum",
              "type": "DecimalNumber",
              "minOccurs": "0"
            },
            {
              "name": "InitgPty",
              "type": "PartyIdentification32"
            }
          ]
        }
      },
      "GroupHeader39_EPC": {
        "sequence": {
          "element": [
            {
              "name": "MsgId",
              "type": "Max35Text"
            },
            {
              "name": "CreDtTm",
              "type": "ISODateTime"
            },
            {
              "name": "NbOfTxs",
              "type": "Max15NumericText"
            },
            {
              "name": "CtrlSum",
              "type": "DecimalNumber_EPC",
              "minOccurs": "0"
            },
            {
              "name": "InitgPty",
              "type": "PartyIdentification32_EPC"
            }
          ]
        }
      },
      "LocalInstrument2Choice": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "Cd",
                "type": "ExternalLocalInstrument1Code"
              }
            ]
          }
        }
      },
      "LocalInstrument2Choice_EPC": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "Cd",
                "type": "ExternalLocalInstrument1Code_EPC"
              }
            ]
          }
        }
      },
      "MandateRelatedInformation6": {
        "sequence": {
          "element": [
            {
              "name": "MndtId",
              "type": "Max35Text",
              "minOccurs": "0"
            },
            {
              "name": "DtOfSgntr",
              "type": "ISODate",
              "minOccurs": "0"
            },
            {
              "name": "AmdmntInd",
              "type": "TrueFalseIndicator",
              "minOccurs": "0"
            },
            {
              "name": "AmdmntInfDtls",
              "type": "AmendmentInformationDetails6",
              "minOccurs": "0"
            },
            {
              "name": "ElctrncSgntr",
              "type": "Max1025Text",
              "minOccurs": "0"
            }
          ]
        }
      },
      "MandateRelatedInformation6_EPC": {
        "sequence": {
          "element": [
            {
              "name": "MndtId",
              "type": "Max35Text"
            },
            {
              "name": "DtOfSgntr",
              "type": "ISODate"
            },
            {
              "name": "AmdmntInd",
              "type": "TrueFalseIndicator",
              "minOccurs": "0"
            },
            {
              "name": "AmdmntInfDtls",
              "type": "AmendmentInformationDetails6_EPC",
              "minOccurs": "0"
            },
            {
              "name": "ElctrncSgntr",
              "type": "Max1025Text",
              "minOccurs": "0"
            }
          ]
        }
      },
      "OrganisationIdentification4": {
        "sequence": {
          "element": [
            {
              "name": "BICOrBEI",
              "type": "AnyBICIdentifier",
              "minOccurs": "0"
            },
            {
              "name": "Othr",
              "type": "GenericOrganisationIdentification1",
              "minOccurs": "0",
              "maxOccurs": "unbounded"
            }
          ]
        }
      },
      "OrganisationIdentification4_EPC": {
        "sequence": {
          "element": [
            {
              "name": "BICOrBEI",
              "type": "AnyBICIdentifier",
              "minOccurs": "0"
            },
            {
              "name": "Othr",
              "type": "GenericOrganisationIdentification1",
              "minOccurs": "0"
            }
          ]
        }
      },
      "OrganisationIdentificationSchemeName1Choice": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "Cd",
                "type": "ExternalOrganisationIdentification1Code"
              },
              {
                "name": "Prtry",
                "type": "Max35Text"
              }
            ]
          }
        }
      },
      "Party6Choice": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "OrgId",
                "type": "OrganisationIdentification4"
              },
              {
                "name": "PrvtId",
                "type": "PersonIdentification5"
              }
            ]
          }
        }
      },
      "Party6Choice_EPC": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "OrgId",
                "type": "OrganisationIdentification4_EPC"
              },
              {
                "name": "PrvtId",
                "type": "PersonIdentification5_EPC"
              }
            ]
          }
        }
      },
      "Party6Choice_EPC_2": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "PrvtId",
                "type": "PersonIdentification5_EPC_2"
              }
            ]
          }
        }
      },
      "Party6Choice_EPC_3": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "PrvtId",
                "type": "PersonIdentification5_EPC_2"
              }
            ]
          }
        }
      },
      "PartyIdentification32": {
        "sequence": {
          "element": [
            {
              "name": "Nm",
              "type": "Max140Text",
              "minOccurs": "0"
            },
            {
              "name": "PstlAdr",
              "type": "PostalAddress6",
              "minOccurs": "0"
            },
            {
              "name": "Id",
              "type": "Party6Choice",
              "minOccurs": "0"
            }
          ]
        }
      },
      "PartyIdentification32_EPC": {
        "sequence": {
          "element": [
            {
              "name": "Nm",
              "type": "Max140Text_EPC",
              "minOccurs": "0"
            },
            {
              "name": "Id",
              "type": "Party6Choice_EPC",
              "minOccurs": "0"
            }
          ]
        }
      },
      "PartyIdentification32_EPC_2": {
        "sequence": {
          "element": [
            {
              "name": "Nm",
              "type": "Max140Text_EPC"
            },
            {
              "name": "PstlAdr",
              "type": "PostalAddress6_EPC",
              "minOccurs": "0"
            }
          ]
        }
      },
      "PartyIdentification32_EPC_3": {
        "sequence": {
          "element": [
            {
              "name": "Nm",
              "type": "Max140Text_EPC",
              "minOccurs": "0"
            },
            {
              "name": "Id",
              "type": "Party6Choice_EPC",
              "minOccurs": "0"
            }
          ]
        }
      },
      "PartyIdentification32_EPC_4": {
        "sequence": {
          "element": [
            {
              "name": "Id",
              "type": "Party6Choice_EPC_2"
            }
          ]
        }
      },
      "PartyIdentification32_EPC_5": {
        "sequence": {
          "element": [
            {
              "name": "Nm",
              "type": "Max140Text_EPC",
              "minOccurs": "0"
            },
            {
              "name": "Id",
              "type": "Party6Choice_EPC_3",
              "minOccurs": "0"
            }
          ]
        }
      },
      "PartyIdentification32_EPC_6": {
        "sequence": {
          "element": [
            {
              "name": "Id",
              "type": "Party6Choice_EPC_3"
            }
          ]
        }
      },
      "PartyIdentification32_EPC_7": {
        "sequence": {
          "element": [
            {
              "name": "Nm",
              "type": "Max140Text_EPC"
            },
            {
              "name": "PstlAdr",
              "type": "PostalAddress6_EPC",
              "minOccurs": "0"
            },
            {
              "name": "Id",
              "type": "Party6Choice_EPC",
              "minOccurs": "0"
            }
          ]
        }
      },
      "PartyIdentification32_EPC_8": {
        "sequence": {
          "element": [
            {
              "name": "Nm",
              "type": "Max140Text_EPC",
              "minOccurs": "0"
            },
            {
              "name": "Id",
              "type": "Party6Choice_EPC",
              "minOccurs": "0"
            }
          ]
        }
      },
      "PaymentIdentification1": {
        "sequence": {
          "element": [
            {
              "name": "InstrId",
              "type": "Max35Text",
              "minOccurs": "0"
            },
            {
              "name": "EndToEndId",
              "type": "Max35Text"
            }
          ]
        }
      },
      "PaymentIdentification1_EPC": {
        "sequence": {
          "element": [
            {
              "name": "InstrId",
              "type": "Max35Text",
              "minOccurs": "0"
            },
            {
              "name": "EndToEndId",
              "type": "Max35Text"
            }
          ]
        }
      },
      "PaymentInstructionInformation4": {
        "sequence": {
          "element": [
            {
              "name": "PmtInfId",
              "type": "Max35Text"
            },
            {
              "name": "PmtMtd",
              "type": "PaymentMethod2Code"
            },
            {
              "name": "BtchBookg",
              "type": "BatchBookingIndicator",
              "minOccurs": "0"
            },
            {
              "name": "NbOfTxs",
              "type": "Max15NumericText",
              "minOccurs": "0"
            },
            {
              "name": "CtrlSum",
              "type": "DecimalNumber",
              "minOccurs": "0"
            },
            {
              "name": "PmtTpInf",
              "type": "PaymentTypeInformation20",
              "minOccurs": "0"
            },
            {
              "name": "ReqdColltnDt",
              "type": "ISODate"
            },
            {
              "name": "Cdtr",
              "type": "PartyIdentification32"
            },
            {
              "name": "CdtrAcct",
              "type": "CashAccount16"
            },
            {
              "name": "CdtrAgt",
              "type": "BranchAndFinancialInstitutionIdentification4"
            },
            {
              "name": "UltmtCdtr",
              "type": "PartyIdentification32",
              "minOccurs": "0"
            },
            {
              "name": "ChrgBr",
              "type": "ChargeBearerType1Code",
              "minOccurs": "0"
            },
            {
              "name": "CdtrSchmeId",
              "type": "PartyIdentification32",
              "minOccurs": "0"
            },
            {
              "name": "DrctDbtTxInf",
              "type": "DirectDebitTransactionInformation9",
              "maxOccurs": "unbounded"
            }
          ]
        }
      },
      "PaymentInstructionInformation4_EPC": {
        "sequence": {
          "element": [
            {
              "name": "PmtInfId",
              "type": "Max35Text"
            },
            {
              "name": "PmtMtd",
              "type": "PaymentMethod2Code"
            },
            {
              "name": "BtchBookg",
              "type": "BatchBookingIndicator",
              "minOccurs": "0"
            },
            {
              "name": "NbOfTxs",
              "type": "Max15NumericText",
              "minOccurs": "0"
            },
            {
              "name": "CtrlSum",
              "type": "DecimalNumber_EPC",
              "minOccurs": "0"
            },
            {
              "name": "PmtTpInf",
              "type": "PaymentTypeInformation20_EPC"
            },
            {
              "name": "ReqdColltnDt",
              "type": "ISODate"
            },
            {
              "name": "Cdtr",
              "type": "PartyIdentification32_EPC_2"
            },
            {
              "name": "CdtrAcct",
              "type": "CashAccount16_EPC"
            },
            {
              "name": "CdtrAgt",
              "type": "BranchAndFinancialInstitutionIdentification4_EPC"
            },
            {
              "name": "UltmtCdtr",
              "type": "PartyIdentification32_EPC_3",
              "minOccurs": "0"
            },
            {
              "name": "ChrgBr",
              "type": "ChargeBearerType1Code",
              "minOccurs": "0"
            },
            {
              "name": "CdtrSchmeId",
              "type": "PartyIdentification32_EPC_4",
              "minOccurs": "0"
            },
            {
              "name": "DrctDbtTxInf",
              "type": "DirectDebitTransactionInformation9_EPC",
              "maxOccurs": "unbounded"
            }
          ]
        }
      },
      "PaymentTypeInformation20": {
        "sequence": {
          "element": [
            {
              "name": "SvcLvl",
              "type": "ServiceLevel8Choice",
              "minOccurs": "0"
            },
            {
              "name": "LclInstrm",
              "type": "LocalInstrument2Choice",
              "minOccurs": "0"
            },
            {
              "name": "SeqTp",
              "type": "SequenceType1Code",
              "minOccurs": "0"
            },
            {
              "name": "CtgyPurp",
              "type": "CategoryPurpose1Choice",
              "minOccurs": "0"
            }
          ]
        }
      },
      "PaymentTypeInformation20_EPC": {
        "sequence": {
          "element": [
            {
              "name": "SvcLvl",
              "type": "ServiceLevel8Choice_EPC"
            },
            {
              "name": "LclInstrm",
              "type": "LocalInstrument2Choice_EPC"
            },
            {
              "name": "SeqTp",
              "type": "SequenceType1Code"
            },
            {
              "name": "CtgyPurp",
              "type": "CategoryPurpose1Choice",
              "minOccurs": "0"
            }
          ]
        }
      },
      "PersonIdentification5": {
        "sequence": {
          "element": [
            {
              "name": "DtAndPlcOfBirth",
              "type": "DateAndPlaceOfBirth",
              "minOccurs": "0"
            },
            {
              "name": "Othr",
              "type": "GenericPersonIdentification1",
              "minOccurs": "0",
              "maxOccurs": "unbounded"
            }
          ]
        }
      },
      "PersonIdentification5_EPC": {
        "sequence": {
          "element": [
            {
              "name": "DtAndPlcOfBirth",
              "type": "DateAndPlaceOfBirth",
              "minOccurs": "0"
            },
            {
              "name": "Othr",
              "type": "GenericPersonIdentification1",
              "minOccurs": "0"
            }
          ]
        }
      },
      "PersonIdentification5_EPC_2": {
        "sequence": {
          "element": [
            {
              "name": "Othr",
              "type": "GenericPersonIdentification1_EPC",
              "minOccurs": "0"
            }
          ]
        }
      },
      "PersonIdentificationSchemeName1Choice": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "Cd",
                "type": "ExternalPersonIdentification1Code"
              },
              {
                "name": "Prtry",
                "type": "Max35Text"
              }
            ]
          }
        }
      },
      "PersonIdentificationSchemeName1Choice_EPC": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "Prtry",
                "type": "Max35Text"
              }
            ]
          }
        }
      },
      "PostalAddress6": {
        "sequence": {
          "element": [
            {
              "name": "Ctry",
              "type": "CountryCode",
              "minOccurs": "0"
            },
            {
              "name": "AdrLine",
              "type": "Max70Text",
              "minOccurs": "0",
              "maxOccurs": "7"
            }
          ]
        }
      },
      "PostalAddress6_EPC": {
        "sequence": {
          "element": [
            {
              "name": "Ctry",
              "type": "CountryCode",
              "minOccurs": "0"
            },
            {
              "name": "AdrLine",
              "type": "Max70Text",
              "minOccurs": "0",
              "maxOccurs": "2"
            }
          ]
        }
      },
      "Purpose2Choice": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "Cd",
                "type": "ExternalPurpose1Code"
              }
            ]
          }
        }
      },
      "Purpose2Choice_EPC": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "Cd",
                "type": "ExternalPurpose1Code"
              }
            ]
          }
        }
      },
      "RemittanceInformation5": {
        "sequence": {
          "element": [
            {
              "name": "Ustrd",
              "type": "Max140Text",
              "minOccurs": "0",
              "maxOccurs": "unbounded"
            },
            {
              "name": "Strd",
              "type": "StructuredRemittanceInformation7",
              "minOccurs": "0",
              "maxOccurs": "unbounded"
            }
          ]
        }
      },
      "RemittanceInformation5_EPC": {
        "sequence": {
          "element": [
            {
              "name": "Ustrd",
              "type": "Max140Text",
              "minOccurs": "0"
            },
            {
              "name": "Strd",
              "type": "StructuredRemittanceInformation7_EPC",
              "minOccurs": "0"
            }
          ]
        }
      },
      "ServiceLevel8Choice": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "Cd",
                "type": "ExternalServiceLevel1Code"
              }
            ]
          }
        }
      },
      "ServiceLevel8Choice_EPC": {
        "sequence": {
          "choice": {
            "element": [
              {
                "name": "Cd",
                "type": "ExternalServiceLevel1Code_EPC"
              }
            ]
          }
        }
      },
      "StructuredRemittanceInformation7": {
        "sequence": {
          "element": [
            {
              "name": "CdtrRefInf",
              "type": "CreditorReferenceInformation2",
              "minOccurs": "0"
            }
          ]
        }
      },
      "StructuredRemittanceInformation7_EPC": {
        "sequence": {
          "element": [
            {
              "name": "CdtrRefInf",
              "type": "CreditorReferenceInformation2_EPC",
              "minOccurs": "0"
            }
          ]
        }
      }
    },
    "simpleTypes": {
      "ActiveOrHistoricCurrencyAndAmount_SimpleType": {
        "base": "decimal",
        "minInclusive": "0",
        "totalDigits": "18",
        "fractionDigits": "5"
      },
      "ActiveOrHistoricCurrencyCode": {
        "base": "string",
        "pattern": "[A-Z]{3,3}"
      },
      "ActiveOrHistoricCurrencyCode_EPC": {
        "base": "ActiveOrHistoricCurrencyCode",
        "enumeration": [
          "EUR"
        ],
        "pattern": "[A-Z]{3,3}"
      },
      "AnyBICIdentifier": {
        "base": "string",
        "pattern": "[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}"
      },
      "BatchBookingIndicator": {
        "base": "boolean"
      },
      "BICIdentifier": {
        "base": "string",
        "pattern": "[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}"
      },
      "ChargeBearerType1Code": {
        "base": "string",
        "enumeration": [
          "SLEV"
        ]
      },
      "CountryCode": {
        "base": "string",
        "pattern": "[A-Z]{2,2}"
      },
      "DecimalNumber": {
        "base": "decimal",
        "totalDigits": "18",
        "fractionDigits": "17"
      },
      "DecimalNumber_EPC": {
        "base": "DecimalNumber",
        "totalDigits": "18",
        "fractionDigits": "2"
      },
      "DocumentType3Code": {
        "base": "string",
        "enumeration": [
          "SCOR"
        ]
      },
      "ExternalCategoryPurpose1Code": {
        "base": "string",
        "minLength": "1",
        "maxLength": "4"
      },
      "ExternalLocalInstrument1Code": {
        "base": "string",
        "minLength": "1",
        "maxLength": "35"
      },
      "ExternalLocalInstrument1Code_EPC": {
        "base": "ExternalLocalInstrument1Code",
        "enumeration": [
          "COR1",
          "CORE"
        ],
        "minLength": "1",
        "maxLength": "35"
      },
      "ExternalOrganisationIdentification1Code": {
        "base": "string",
        "minLength": "1",
        "maxLength": "4"
      },
      "ExternalPersonIdentification1Code": {
        "base": "string",
        "minLength": "1",
        "maxLength": "4"
      },
      "ExternalPurpose1Code": {
        "base": "string",
        "minLength": "1",
        "maxLength": "4"
      },
      "ExternalServiceLevel1Code": {
        "base": "string",
        "minLength": "1",
        "maxLength": "4"
      },
      "ExternalServiceLevel1Code_EPC": {
        "base": "ExternalServiceLevel1Code",
        "enumeration": [
          "SEPA"
        ],
        "minLength": "1",
        "maxLength": "4"
      },
      "IBAN2007Identifier": {
        "base": "string",
        "pattern": "[A-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30}"
      },
      "ISODate": {
        "base": "date"
      },
      "ISODateTime": {
        "base": "dateTime"
      },
      "Max1025Text": {
        "base": "string",
        "minLength": "1",
        "maxLength": "1025"
      },
      "Max140Text": {
        "base": "string",
        "minLength": "1",
        "maxLength": "140"
      },
      "Max140Text_EPC": {
        "base": "Max140Text",
        "minLength": "1",
        "maxLength": "70"
      },
      "Max15NumericText": {
        "base": "string",
        "pattern": "[0-9]{1,15}"
      },
      "Max35Text": {
        "base": "string",
        "minLength": "1",
        "maxLength": "35"
      },
      "Max70Text": {
        "base": "string",
        "minLength": "1",
        "maxLength": "70"
      },
      "PaymentMethod2Code": {
        "base": "string",
        "enumeration": [
          "DD"
        ]
      },
      "SequenceType1Code": {
        "base": "string",
        "enumeration": [
          "FNAL",
          "FRST",
          "OOFF",
          "RCUR"
        ]
      },
      "TrueFalseIndicator": {
        "base": "boolean"
      }
    }
  }
};
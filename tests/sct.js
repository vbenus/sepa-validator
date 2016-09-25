var validator = require('./../lib/validator'),
  sct = {
  "Document": {
    "CstmrCdtTrfInitn": {
      "GrpHdr": {
        "MsgId": "MCCT141014152706",
        "CreDtTm": "2014-10-14T15:27:06",
        "NbOfTxs": "3",
        "CtrlSum": "259.10",
        "InitgPty": {
          "Nm": "ABC, s.r.o.",
          "PstlAdr": {
            "Ctry": "FI",
            "AdrLine": [
              "Street 5",
              "909090 PB"
            ]
          }
        }
      },
      "PmtInf": {
        "PmtInfId": "MCCT141014152706",
        "PmtMtd": "TRQF",
        "BtchBookg": "true",
        "NbOfTxs": "3",
        "CtrlSum": "259.10",
        "PmtTpInf": {
          "SvcLvl": {
            "Cd": "SEPA"
          }
        },
        "ReqdExctnDt": "2014-10-14Z+6:00",
        "Dbtr": {
          "Nm": "ABC, s.r.o.",
          "PstlAdr": {
            "Ctry": "FI",
            "AdrLine": [
              "Street 5",
              "909090 PB"
            ]
          }
        },
        "DbtrAcct": {
          "Id": {
            "IBAN": "FI0210403500314392"
          }
        },
        "DbtrAgt": {
          "FinInstnId": {
            "BIC": "ACUUFIH1"
          }
        },
        "ChrgBr": "SLEV",
        "CdtTrfTxInf": [
          {
            "PmtId": {
              "InstrId": "MCCT1410141527060000004720",
              "EndToEndId": "/VS207141285/KS0308"
            },
            "Amt": {
              "InstdAmt": {
                "$": [
                  {
                    "name": "Ccy",
                    "value": "EUR"
                  }
                ],
                "_": "3.50"
              }
            },
            "CdtrAgt": {
              "FinInstnId": {
                "BIC": "AABSDE31"
              }
            },
            "Cdtr": {
              "Nm": "Creditor name",
              "PstlAdr": {
                "Ctry": "FI",
                "AdrLine": [
                  "AddreLine 1",
                  "909090 City"
                ]
              }
            },
            "CdtrAcct": {
              "Id": {
                "IBAN": "DE89370400440532013000"
              }
            },
            "RmtInf": {
              "Ustrd": "310140461 notes"
            }
          },
          {
            "PmtId": {
              "InstrId": "MCCT1410141527060000004721",
              "EndToEndId": "/VS201141083/KS0308"
            },
            "Amt": {
              "InstdAmt": {
                "$": [
                  {
                    "name": "Ccy",
                    "value": "EUR"
                  }
                ],
                "_": "87.60"
              }
            },
            "CdtrAgt": {
              "FinInstnId": {
                "BIC": "AABSDE31"
              }
            },
            "Cdtr": {
              "Nm": "Creditor name",
              "PstlAdr": {
                "Ctry": "FI",
                "AdrLine": [
                  "AdrLine 1",
                  "909090 City",
                  "a",
                  "b",
                  "c",  
                  "d"
                ]
              }
            },
            "CdtrAcct": {
              "Id": {
                "IBAN": "DE89370400440532013000"
              }
            },
            "RmtInf": {
              "Ustrd": "notes"
            }
          },
          {
            "PmtId": {
              "InstrId": "MCCT1410141527060000004722",
              "EndToEndId": "reference"
            },
            "Amt": {
              "InstdAmt": {
                "$": [
                  {
                    "name": "Ccy",
                    "value": "EUR"
                  }
                ],
                "_": "168.00"
              }
            },
            "CdtrAgt": {
              "FinInstnId": {
                "BIC": "AABSDE31"
              }
            },
            "Cdtr": {
              "Nm": "Creditor name",
              "PstlAdr": {
                "Ctry": "FI",
                "AdrLine": [
                  "AddreLine 1",
                  "909090 City"
                ]
              }
            },
            "CdtrAcct": {
              "Id": {
                "IBAN": "DE89370400440532013000"
              }
            },
            "RmtInf": {
              "Ustrd": "310140601 notes"
            }
          }
        ]
      }
    }
  }
};

validator("pain.001.001.03").checkElement("PmtInf", "PaymentInstructionInformation3", sct.Document.CstmrCdtTrfInitn.PmtInf);
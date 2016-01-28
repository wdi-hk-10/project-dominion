var blankCards = {
  "copper": {
    "supply": 1,
    "cost": 0,
    "type": {
      // I wrote it like this after doing some reading on JS Objects
      "Treasure": true
    },
    "treasureValue": 1
  },
  "silver": {
    "supply": 1,
    "cost": 3,
    "type": {
      "Treasure": true
    },
    "treasureValue": 2
  },
  "gold": {
    "supply": 1,
    "cost": 6,
    "type": {
      "Treasure": true
    },
    "treasureValue": 3
  },
  "estate": {
    "supply": 1,
    "cost": 2,
    "type": {
      "Victory": true
    },
    "victoryValue": 1
  },
  "duchy": {
    "supply": 1,
    "cost": 5,
    "type": {
      "Victory": true
    },
    "victoryValue": 3
  },
  "province": {
    "supply": 1,
    "cost": 8,
    "type": {
      "Victory": true
    },
    "victoryValue": 6
  },
  "cellar": {
    "supply": 1,
    "cost": 2,
    "type": {
      "Action": true
    },
    "effects": [
      {
        "name": "plusAction",
        "amount": 1
      },
      {
        "name": "draw/discard"
        // "": drawDiscard
      }
    ]
  },
  // cards["Cellar"].effects[1].xxx()
  "market": {
    "supply": 1,
    "cost": 5,
    "type": {
      "Action": true
    },
    "effects": [
      {
        "name": "plusCard",
        "amount": 1
      },
      {
        "name": "plusAction",
        "amount": 1
      },
      {
        "name": "plusBuy",
        "amount": 1
      },
      {
        "name": "plusTreasure",
        "amount": 1
      }
    ]
  },
  "throneroom": {
    "supply": 1,
    "cost": 4,
    "type": {
      "Action": true
    },
    "effects": [
      {
        "name": "playTwice",
        "": ""
      }
    ]
  },
  "festival": {
    "supply": 1,
    "cost": 5,
    "type": {
      "Action": true
    },
    "effects": [
      {
        "name": "plusAction",
        "amount": 2
      },
      {
        "name": "plusBuy",
        "amount": 1
      },
      {
        "name": "plusTreasure",
        "amount": 2
      }
    ]
  },
  "smithy": {
    "supply": 1,
    "cost": 4,
    "type": {
      "Action": true
    },
    "effects": [
      {
        "name": "plusCard",
        "amount": 3
      }
    ]
  },
  "village": {
    "supply": 1,
    "cost": 3,
    "type": {
      "Action": true
    },
    "effects": [
      {
        "name": "plusCard",
        "amount": 1
      },
      {
        "name": "plusAction",
        "amount": 2
      }
    ]
  },
  "woodcutter": {
    "supply": 1,
    "cost": 3,
    "type": {
      "Action": true
    },
    "effects": [
      {
        "name": "plusBuy",
        "amount": 1
      },
      {
        "name": "plusTreasure",
        "amount": 2
      }
    ]
  },
  "workshop": {
    "supply": 1,
    "cost": 3,
    "type": {
      "Action": true
    },
    "effects": [
      {
        "name": "upTo4",
        "amount": ""
      }
    ]
  },
  "councilroom": {
    "supply": 1,
    "cost": 5,
    "type": {
      "Action": true
    },
    "effects": [
      {
        "name": "plusCard",
        "amount": 4
      },
      {
        "name": "plusBuy",
        "amount": 1
      },
      {
        "name": "otherPlayersDraw",
        "amount": 1
      }
    ]
  },
  "laboratory": {
    "supply": 1,
    "cost": 5,
    "type": {
      "Action": true
    },
    "effects": [
      {
        "name": "plusCard",
        "amount": 2
      },
      {
        "name": "plusAction",
        "amount": 1
      }
    ]
  }
}
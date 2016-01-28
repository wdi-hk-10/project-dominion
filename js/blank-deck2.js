var blankCards = {
  "copper": {
    "supply": 1,
    "cost": 0,
    "type": "treasure",
    "treasureValue": 1
  },
  "silver": {
    "supply": 1,
    "cost": 3,
    "type": "treasure",
    "treasureValue": 2
  },
  "gold": {
    "supply": 1,
    "cost": 6,
    "type": "treasure",
    "treasureValue": 3
  },
  "estate": {
    "supply": 1,
    "cost": 2,
    "type": "victory",
    "victoryValue": 1
  },
  "duchy": {
    "supply": 1,
    "cost": 5,
    "type": "victory",
    "victoryValue": 3
  },
  "province": {
    "supply": 1,
    "cost": 8,
    "type": "victory",
    "victoryValue": 6
  },
  "cellar": {
    "supply": 1,
    "cost": 2,
    "type": "action",
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
    "type": "action",
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
    "type": "action",
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
    "type": "action",
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
    "type": "action",
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
    "type": "action",
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
    "type": "action",
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
    "type": "action",
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
    "type": "action",
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
    "type": "action",
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
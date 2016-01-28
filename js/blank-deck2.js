var blankCards = {
  "copper": {
    "supply": 0,
    "cost": 0,
    "type": "treasure",
    "amount": 1
  },
  "silver": {
    "supply": 0,
    "cost": 3,
    "type": "treasure",
    "amount": 2
  },
  "gold": {
    "supply": 0,
    "cost": 6,
    "type": "treasure",
    "amount": 3
  },
  "estate": {
    "supply": 0,
    "cost": 2,
    "type": "victory",
    "amount": 1
  },
  "duchy": {
    "supply": 0,
    "cost": 5,
    "type": "victory",
    "amount": 3
  },
  "province": {
    "supply": 0,
    "cost": 8,
    "type": "victory",
    "amount": 6
  },
  "cellar": {
    "supply": 0,
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
    "supply": 0,
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
    "supply": 0,
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
    "supply": 0,
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
    "supply": 0,
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
    "supply": 0,
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
    "supply": 0,
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
    "supply": 0,
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
    "supply": 0,
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
    "supply": 0,
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
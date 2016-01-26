$(document).ready(function(){

  $('#start-game').on('click', function(){
    $('#cover-page').fadeOut({
      duration: "slow",
      complete: function(){
        $('#game-div').fadeIn('slow');
      }
    });
  });

  var playerTurn=true;
  var phase=1;
  $('.experiment').on('click', function(){
    phase--;
    if(phase===0){
      if(playerTurn===true){
        $('#playerHands a:last').tab('show');
        playerTurn=false;
      }else{
        $('#playerHands a:first').tab('show');
        playerTurn=true;
      }
    }
    phase=1
  });

  function card() {

  }

  function drawPile() {
  // Create an empty array of cards.
    this.cards = new Array();

    this.makeDeck  = stackMakeDeck;
    this.shuffle   = stackShuffle;
    this.deal      = stackDeal;
    this.draw      = stackDraw;
    this.addCard   = stackAddCard;
    this.combine   = stackCombine;
    this.cardCount = stackCardCount;
  }

  function stackMakeDeck() {

  }

  function stackShuffle() {

  }

  function stackDeal() {

  }

  function stackDraw() {

  }

  function stackAddCard() {

  }

  function stackCombine() {

  }

  function stackCardCount() {

  }

});

var cards = {
  "Copper": {
    "supply": 60,
    "cost": 0,
    "type": {
      // I wrote it like this after doing some reading on JS Objects
      "Treasure": true
    },
    "treasureValue": 1
  },
  "Silver": {
    "supply": 40,
    "cost": 3,
    "type": {
      "Treasure": true
    },
    "treasureValue": 2
  }// ,
  // "Gold": {
  //   "supply": 30,
  //   "cost": 6,
  //   "type": {
  //     "Treasure": true
  //   },
  //   "treasureValue": 3
  // },
  // "Estate": {
  //   "supply": 8,
  //   "cost": 2,
  //   "type": {
  //     "Victory": true
  //   },
  //   "victoryValue": 1
  // },
  // "Duchy": {
  //   "supply": 8,
  //   "cost": 5,
  //   "type": {
  //     "Victory": true
  //   },
  //   "victoryValue": 3
  // },
  // "Province": {
  //   "supply": 8,
  //   "cost": 8,
  //   "type": {
  //     "Victory": true
  //   },
  //   "victoryValue": 6
  // },
  // "Cellar": {
  //   "supply": 10,
  //   "cost": 2,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": [
  //     {
  //       "name": "plusAction",
  //       "amount": 1
  //     },
  //     {
  //       "name": "draw/discard",
  //       "": drawDiscard
  //     }
  //   ]
  // },
  // cards["Cellar"].effects[1].xxx()
  // "Market": {
  //   "supply": 10,
  //   "cost": 5,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": {

  //   }
  // },
  // "Mine": {
  //   "supply": 10,
  //   "cost": 5,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": {

  //   }
  // },
  // "Remodel": {
  //   "supply": 10,
  //   "cost": 4,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": {

  //   }
  // },
  // "Smithy": {
  //   "supply": 10,
  //   "cost": 4,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": {

  //   }
  // },
  // "Village": {
  //   "supply": 10,
  //   "cost": 3,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": {

  //   }
  // },
  // "Woodcutter": {
  //   "supply": 10,
  //   "cost": 3,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": {

  //   }
  // },
  // "Workshop": {
  //   "supply": 10,
  //   "cost": 3,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": {

  //   }
  // },
  // "Council Room": {
  //   "supply": 10,
  //   "cost": 5,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": [
  //     {
  //       "name": "plusCard",
  //       "amount": 4
  //     },
  //     {
  //       "name": "plusBuy",
  //       "amount": 1
  //     },
  //     {
  //       "name": "otherPlayersDraw",
  //       "amount": 1
  //     }
  //   ]
  // },
  // "Laboratory": {
  //   "supply": 10,
  //   "cost": 5,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": [
  //     {
  //       "name": "plusCard",
  //       "amount": 2
  //     },
  //     {
  //       "name": "plusAction",
  //       "amount": 1
  //     }
  //   ]
  // }
}


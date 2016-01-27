$(document).ready(function(){

  $('#start-game').on('click', function(){
    $('#cover-page').fadeOut({
      duration: "slow",
      complete: function(){
        $('#game-div').fadeIn('slow');
      }
    });
    turnSetup();
  });

  $('button').prop('disabled', true);
  $('#start-game').removeAttr('disabled');
  $('#reset-game').removeAttr('disabled');
  $('.start-turn').removeAttr('disabled');

  // Button activation sequence
  $('.start-turn').on('click', function(){
    console.log("Start action phase");
    $('.start-turn').prop('disabled', true);
    $('.play-action').removeAttr('disabled');
    $('.pass-action').removeAttr('disabled');
  });

  $('.play-action').on('click', function(){
    console.log("Play an action card");
    $('.play-action').prop('disabled', true);
    $('.pass-action').prop('disabled', true);
    $('.play-buy').removeAttr('disabled');
    $('.pass-buy').removeAttr('disabled');
  });

  $('.pass-action').on('click', function(){
    console.log("Skip action card");
    $('.play-action').prop('disabled', true);
    $('.pass-action').prop('disabled', true);
    $('.play-buy').removeAttr('disabled');
    $('.pass-buy').removeAttr('disabled');
  });

  $('.play-buy').on('click', function(){
    console.log("Buy a card");
    $('.play-buy').prop('disabled', true);
    $('.pass-buy').prop('disabled', true);
    // $('.buy-button').removeAttr('disabled');
    $('.play-cleanup').removeAttr('disabled');
  });

  var buyActive = function(){
    $('.buy-button').forEach(function(){
      // if($(this).parent().~~~.cost<=treasureCount){
      //   $(this).removeAttr('disabled');
      // }
    });
  }

  $('.pass-buy').on('click', function(){
    console.log("Don't buy a card");
    $('.play-buy').prop('disabled', true);
    $('.pass-buy').prop('disabled', true);
    $('.play-cleanup').removeAttr('disabled');
  });

  // $('.buy-button').on('click', function(){

  // });

  $('.play-cleanup').on('click', function(){
    console.log("Discard your hand");
    $('.play-cleanup').prop('disabled', true);
    $('.play-draw').removeAttr('disabled');
  });

  $('.play-draw').on('click', function(){
    console.log("Draw five new cards");
    $('.play-draw').prop('disabled', true);
    $('.end-turn').removeAttr('disabled');
  });

  // Prototype player-turn switching function
  var playerTurn = true;
  $('.end-turn').on('click', function() {
    if(playerTurn === true) {
      $('#playerHands a:last').tab('show');
      playerTurn = false;
    } else {
      $('#playerHands a:first').tab('show');
      playerTurn = true;
    }
    $('.end-turn').prop('disabled', true);
    $('.start-turn').removeAttr('disabled');
    turnSetup();
  });

  // Prototype turn-order function
  var actionCount = 1;
  var buyCount = 1;
  var treasureCount = 0;

  var turnSetup = function(){
    $('.actionPoints').text('Action Points: 1');
    $('.buyPoints').text('Buy Points: 1');
    $('.treasurePoints').text('Treasure Points: 0');
  }

  // Prototype action-turn function
  // var actionPhase = function(){
  //   console.log("Test action");
  //   $('.player-hand').children().on('click', function(){
  //     //call function
  //     actionCount--;
  //     console.log(actionCount);
  //   });
  //   if(actionCount<=0){
  //     phase--;
  //     console.log(phase);
  //   }else{
  //   }
  // }

  // Prototype buy-turn function
  $('.buy-button').on('click', function(){
    $(this).parent().find()
  });

  // Prototype cleanup function
  // var cleanupPhase = function(){
  //   // move all cards in hand to discard pile
  //   phase--;
  //   drawPhase();
  // }

  // // Prototype draw function
  // var drawPhase = function(){
  //   // if (draw pile cards >= 5)
  //     // draw 5 cards from draw pile
  //   // else
  //     // stackCombine(draw & discard) & assign to draw
  //     // draw 5 cards from draw pile
  //   phase--;
  // }

  // function card(name, type, effects){
  //   this.name = name;
  //   this.type = type;
  //   this.effects = effects;
  // }

  // // function drawPile() {
  // // // Create an empty array of cards.
  // //   this.cards = new Array();

  // //   this.makeDeck  = stackMakeDeck;
  // //   this.shuffle   = stackShuffle;
  // //   this.deal      = stackDeal;
  // //   this.draw      = stackDraw;
  // //   this.addCard   = stackAddCard;
  // //   this.combine   = stackCombine;
  // //   this.cardCount = stackCardCount;
  // // }

  // function stackMakeDeck() {

  // }

  // function stackShuffle(n){
  //   var temp;
  //   for(var i = 0; i < n; i++){
  //     for(j = 0; j < this.cards.length; j++){
  //       k = Math.floor(Math.random() * this.cards.length);
  //       temp = this.cards[j];
  //       this.cards[j] = this.cards[k];
  //       this.cards[k] = temp;
  //     }
  //   }
  // }

  // function stackDeal(){
  //   if (this.cards.length > 0){
  //     return this.cards.shift();
  //   }else{
  //     return null;
  //   }
  // }

  // function stackDraw(n){
  //   var card;
  //   if((n>=0)&&(n<this.cards.length)){
  //     card=this.cards[n];
  //     this.cards.splice(n, 1);
  //   } else {
  //     card = null;
  //   }
  //   return card;
  // }

  // function stackAddCard(card){
  //   this.cards.push(card);
  // }

  // function stackCombine(stack){
  //   this.cards=this.cards.concat(stack.cards);
  //   stack.cards=new Array();
  // }

  // function stackCardCount() {

  // }

});

var dominionCards = {
  "copper": {
    "supply": 60,
    "cost": 0,
    "type": {
      // I wrote it like this after doing some reading on JS Objects
      "Treasure": true
    },
    "treasureValue": 1
  },
  // "silver": {
  //   "supply": 40,
  //   "cost": 3,
  //   "type": {
  //     "Treasure": true
  //   },
  //   "treasureValue": 2
  // },
  // "gold": {
  //   "supply": 30,
  //   "cost": 6,
  //   "type": {
  //     "Treasure": true
  //   },
  //   "treasureValue": 3
  // },
  "estate": {
    "supply": 8,
    "cost": 2,
    "type": {
      "Victory": true
    },
    "victoryValue": 1
  },
  // "duchy": {
  //   "supply": 8,
  //   "cost": 5,
  //   "type": {
  //     "Victory": true
  //   },
  //   "victoryValue": 3
  // },
  // "province": {
  //   "supply": 8,
  //   "cost": 8,
  //   "type": {
  //     "Victory": true
  //   },
  //   "victoryValue": 6
  // },
  // "cellar": {
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
  // "market": {
  //   "supply": 10,
  //   "cost": 5,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": [
  //     {
  //       "name": "plusCard",
  //       "amount": 1
  //     },
  //     {
  //       "name": "plusAction",
  //       "amount": 1
  //     },
  //     {
  //       "name": "plusBuy",
  //       "amount": 1
  //     },
  //     {
  //       "name": "plusTreasure",
  //       "amount": 1
  //     }
  //   ]
  // },
  // "throne Room": {
  //   "supply": 10,
  //   "cost": 4,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": [
  //     "name": "playTwice",
  //     "":
  //   ]
  // },
  // "festival": {
  //   "supply": 10,
  //   "cost": 5,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": [
  //     {
  //       "name": "plusAction",
  //       "amount": 2
  //     },
  //     {
  //       "name": "plusBuy",
  //       "amount": 1
  //     },
  //     {
  //       "name": "plusTreasure",
  //       "amount": 2
  //     }
  //   ]
  // },
  // "smithy": {
  //   "supply": 10,
  //   "cost": 4,
  //   "type": {
  //     "Action": true
  //   },
    // "effects": [
    //   {
    //     "name": "plusCard",
    //     "amount": 3
    //   }
    // ]
  // },
  // "village": {
  //   "supply": 10,
  //   "cost": 3,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": [
  //     {
  //       "name": "plusCard",
  //       "amount": 1
  //     },
  //     {
  //       "name": "plusAction",
  //       "amount": 2
  //     }
  //   ]
  // },
  "woodcutter": {
    "supply": 10,
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
  // "workshop": {
  //   "supply": 10,
  //   "cost": 3,
  //   "type": {
  //     "Action": true
  //   },
  //   "effects": [
  //     {
  //       "name": "upTo4",
  //       "amount"
  //     }
  //   ]
  // },
  // "council-room": {
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
  // "laboratory": {
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


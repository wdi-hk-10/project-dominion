$(document).ready(function(){

  // Step 0 & 1 binding
  // hide cover-page
  // set up shop
  // create player start deck
  // shuffle
  // deal 5

  // hide cover-page
  $('#start-game').on('click', function(){
    $('#cover-page').fadeOut({
      duration: "slow",
      complete: function(){
        $('#game-div').fadeIn('slow');
      }
    });
    startSetup();
    turnSetup();
  });

  var dominionShop;
  var shopSetup = function(){
    dominionShop = dominionCards;
    for (var key in dominionShop){
      $('.buy-button[data-name="' + key + '"]').data("supply", dominionShop[key].supply).data("cost", dominionShop[key].cost);
    }
  }

  var p1_deck = {};
  var p1_hand = {};
  var p1_discard = {};
  var p2_deck = {};
  var p2_hand = {};
  var p2_discard = {};

  var startSetup = function(){
    // create player start decks
    shopSetup();
    createDeck('p1_deck');
    createDeck('p2_deck');
    // shuffle decks
    shuffleDeck('p1_deck');
    shuffleDeck('p2_deck');
    // push first 5 card on decks to hands
    drawHand('p1_deck', 'p1_hand', 5);
    drawHand('p2_deck', 'p2_hand', 5);

    $('button').prop('disabled', true);
    $('#start-game').removeAttr('disabled');
    $('#reset-game').removeAttr('disabled');
    $('.start-turn').removeAttr('disabled');

  }

  var turnSetup = function(){
    $('.actionPoints').text('Action Points: 1');
    $('.buyPoints').text('Buy Points: 1');
    $('.treasurePoints').text('Treasure Points: 0');
  }

  // Step 2 binding
  // aesthetics
  $('.start-turn').on('click', function(){
    console.log("Start action phase");
    $('.start-turn').prop('disabled', true);
    // if (/* there are no action cards in the player's hand */) {
    //   $('.pass-action').removeAttr('disabled');
    // } else {
      $('.play-action').removeAttr('disabled');
      $('.pass-action').removeAttr('disabled');
    // }
  });

  // Step 3 binding
  // if click on action
    // choose action card
    // action count --
    // if action count == 0
      // go to 4
    // end
  // else if click on pass
    // go to 4
  // end

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

  // Step 4 binding
  // If click on buy button
    // add all treasure card treasurevalue to treasure points counter
    // post treasure points counter in html
    // move all treasure cards in hand to discard
    // disable play-buy && pass-buy
  // $('.buy-button).forEach()
    // if (buy-button[key].data(cost)) <= treasure points
    // && if ($('.buy-button[data-name="estate"]').data('type'))!=="action"
      // activate buy-button

  // Step 4.5 binding
  // $('.buy-button).on('click', function(){
    // push card to discard pile
    // de-increment supply
    // de-increment buy points
    // disable all $('.buy-button')
  // if (buy points <= 0) {
    // $('.play-buy').removeAttr('disabled');
    // $('.pass-buy').removeAttr('disabled');
  // } else {
    // $('.cleanup').removeAttr('disabled');
  // }
  // });

  // Step 5 binding - cleanup
  // $('.cleanup').on('click', function(){
    // $('.cleanup').prop('disabled', true);
    //
  // });

  // Step 6 binding - draw
  // $('.draw').on('click', function(){
  //   if (playerDeck.length < 5) {
  //     merge discard & draw piles
  //     shuffle draw pile
  //   }
  //   drawCards(5);
  // });

  // Step 7 binding - end turn
  // var playerTurn = true;
  // $('.end-turn').on('click', function() {
  //   $('.end-turn').prop('disabled', true);
  //   if (dominionShop["province"].supply == 0) {
  //     endGame();
  //   } else if(playerTurn === true) {
  //     $('#playerHands a:last').tab('show');
  //     playerTurn = false;
  //   } else {
  //     $('#playerHands a:first').tab('show');
  //     playerTurn = true;
  //   }
  //   $('.start-turn').removeAttr('disabled');
  //   turnSetup();
  // });

  // Step 8 binding
  // var p1score = 0;
  // var p2score = 0;
  // var winner = '';
  // function endgame() {
  //   merge p1 draw & discard
  //   merge p2 draw & discard
  //   (p1 deck).forEach {
  //     if $(this[data-name="estate"]).data('type') == "victory" {
  //       p1score += $(this[data-name="estate"]).data('victoryValue')
  //     }
  //   }
  //   (p2 deck).forEach {
  //     if $(this[data-name="estate"]).data('type') == "victory" {
  //       p2score += $(this[data-name="estate"]).data('victoryValue')
  //     }
  //   }
  //   if p1score > p2score {
  //     winner = 'Player 1';
  //   } else {
  //     winner = 'Player 2';
  //   }
  //   trigger endgame window
  // }

  function createDeck(playerDeck) {
    // minus 7 copper from cardPile
    for (var i = 7; i > 0; i--) {
      playerDeck.push(shop.copper);
      shopPile[copper].supply--;
    }
    // minus 3 estate from cardPile
    for (var j = 3; j > 0; j--) {
      playerDeck.push(shop.estate);
      shopPile[estate].supply--;
    }
    // push these cards to player.deck
  }

  function shuffleDeck(playerDeck) {
    // create a variable tmp
    // shift random cards to push to tmp
    // make player.deck equal to tmp
    var tmp;
    for(var j = 0; j < playerDeck.length; j++){
      var k = Math.floor(Math.random() * playerDeck.length);
      tmp = playerDeck[j];
      playerDeck[j] = playerDeck[k];
      playerDeck[k] = tmp;
    }
  }

  function drawHand(playerDeck, playerHand, amount) {
    // shift amount of cards from player.deck to player.hand
    var tmp;
    for (var i = 0; i < amount; i++) {
      playerHand.push(playerDeck.shift());
    }
  }

  function drawCard(playerDeck, playerHand) {

  }

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
  "silver": {
    "supply": 40,
    "cost": 3,
    "type": {
      "Treasure": true
    },
    "treasureValue": 2
  },
  "gold": {
    "supply": 30,
    "cost": 6,
    "type": {
      "Treasure": true
    },
    "treasureValue": 3
  },
  "estate": {
    "supply": 14,
    "cost": 2,
    "type": {
      "Victory": true
    },
    "victoryValue": 1
  },
  "duchy": {
    "supply": 8,
    "cost": 5,
    "type": {
      "Victory": true
    },
    "victoryValue": 3
  },
  "province": {
    "supply": 8,
    "cost": 8,
    "type": {
      "Victory": true
    },
    "victoryValue": 6
  },
  "cellar": {
    "supply": 10,
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
    "supply": 10,
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
    "supply": 10,
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
    "supply": 10,
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
    "supply": 10,
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
    "supply": 10,
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
  "workshop": {
    "supply": 10,
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
    "supply": 10,
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
    "supply": 10,
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

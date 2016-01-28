$(document).ready(function(){

  // Step 0 & 1 binding


  // Game Start Setup


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

  // Set starting active buttons
  $('button').prop('disabled', true);
  $('#start-game').removeAttr('disabled');
  $('#reset-game').removeAttr('disabled');
  $('.start-turn').removeAttr('disabled');

  // Set deck objects
  var p1_deck = {};
  $.extend(true, p1_deck, blankCards);
  var p1_hand = {};
  var p1_discard = {};
  $.extend(true, p1_discard, blankCards);
  var p2_deck = {};
  $.extend(true, p2_deck, blankCards);
  var p2_hand = {};
  var p2_discard = {};
  $.extend(true, p2_discard, blankCards);

  // Declare player card storage variables
  var playerTurn = true;
  var playerDeck;
  var playerHand;
  var playerDiscard;

  // Build shop and assemble decks
  var startSetup = function(){
    // create player start decks
    shopSetup();
    createDeck(p1_deck);
    createDeck(p2_deck);
    drawHand(p1_deck, p1_hand);
    drawHand(p2_deck, p2_hand);
  }

  var actionCount = 1;
  var buyCount = 1;
  var treasureCount = 0;

  // Reset count displays
  // Set card storage fields based on turn order
  var turnSetup = function(){
    $('.actionPoints').text('Action Points: 1');
    $('.buyPoints').text('Buy Points: 1');
    $('.treasurePoints').text('Treasure Points: 0');
    actionCount = 1;
    buyCount = 1;
    treasureCount = 0;
    if (playerTurn === true) {
      playerDeck = p1_deck;
      playerHand = $('#player1 .player-hand');
      playerDiscard = p1_discard;
    } else {
      playerDeck = p2_deck;
      playerHand = $('#player2 .player-hand');
      playerDiscard = p2_discard;
    }
  }

  // Set up shop
  // Assign supply values
  var dominionShop;
  var shopSetup = function(){
    dominionShop = dominionCards;
    for (var key in dominionShop){
      $('.buy-button[data-name="' + key + '"]').data("supply", dominionShop[key].supply).data("cost", dominionShop[key].cost).data("type", dominionShop[key].type);
    }
  }

  // Create player decks
  function createDeck(playerDeck) {
    // move 7 copper from shop to deck
    for (var j = 0; j < 7; j++) {
      playerDeck["copper"].supply++
      var currentValue = $('.buy-button[data-name="copper"]').data("supply");
      $('.buy-button[data-name="copper"]').data("supply", currentValue-1);
    }
    // move 3 estate from shop to deck
    for (var j = 0; j < 3; j++) {
      playerDeck["estate"].supply++
      var currentValue = $('.buy-button[data-name="estate"]').data("supply");
      $('.buy-button[data-name="estate"]').data("supply", currentValue-1);
    }
  }


  // Turn management functions


  // Step 2 binding
  // Start turn
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

  // Step 4 binding - buy
  // $('.buy-button).forEach()
    // if (buy-button[key].data(cost)) <= treasureCount
    // && if ($('.buy-button[data-name=" + key + "]').data('type'))!=="action"
      // activate buy-button

  $('.play-buy').on('click', function(){
    console.log("Buy a card");
    $('.play-buy').prop('disabled', true);
    $('.pass-buy').prop('disabled', true);
    countHandTreasure(playerHand, playerDeck, playerDiscard);

    var $elems = $('.buy-button');
    $elems.each(function(index, elem){
      if ($(elem).data('cost') <= treasureCount && $(elem).type !== "action") {
        $(elem).removeAttr('disabled');
      }
    })
  });

  // Step 4.5 binding
  $('.buy-button').on('click', function(){
    buyCard(this, playerDiscard);
    buyCount--;
    $('.buy-button').prop('disabled', true);
    if (buyCount > 0) {
      $('.play-buy').removeAttr('disabled');
      $('.pass-buy').removeAttr('disabled');
    } else {
      $('.cleanup').removeAttr('disabled');
    }
  });

  $('.pass-buy').on('click', function(){
    console.log("Don't buy a card");
    $('.play-buy').prop('disabled', true);
    $('.pass-buy').prop('disabled', true);
    $('.play-cleanup').removeAttr('disabled');
  });

  // Step 5 binding - cleanup
  $('.play-cleanup').on('click', function(){
    console.log("Discard your hand");
    clearHand(playerHand, playerDiscard);
    $('.play-cleanup').prop('disabled', true);
    $('.play-draw').removeAttr('disabled');
  });

  // Step 6 binding - draw new hand
  $('.play-draw').on('click', function(){
    console.log("Draw five new cards");
    drawHand(playerDeck);
    $('.play-draw').prop('disabled', true);
    $('.end-turn').removeAttr('disabled');
  });

  // Step 7 binding - end turn
  $('.end-turn').on('click', function() {
    $('.end-turn').prop('disabled', true);
    if (dominionShop["province"].supply == 0) {
      endGame();
    } else if(playerTurn === true) {
      $('#playerHands a:last').tab('show');
      playerTurn = false;
    } else {
      $('#playerHands a:first').tab('show');
      playerTurn = true;
    }
    $('.start-turn').removeAttr('disabled');
    turnSetup();
  });

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


  // Card Management Functions


  // Buy a card
  function buyCard(elem, playerDiscard) {
    var cardName = $(elem).data('name');
    var currentValue = $(elem).data("supply");
    $(elem).data("supply", currentValue-1);
    playerDiscard[cardName].supply++;
  }

  // Return the number of cards in the deck
  function findDeckSize(playerDeck) {
    var totalSize = 0;
    for (var key in playerDeck) {
      totalSize += playerDeck[key].supply;
    }
    return totalSize;
  }

  // Draw one card
  function drawCard(playerDeck) {
    if (findDeckSize(playerDeck) < 1) {
      discardMerge(playerDiscard, playerDeck);
    }
    var cardKey = shuffleDeck(playerDeck);
    var html = '<div class="handCards" data-name="' + cardKey + '">' + cardKey + '</div>';

    if (p1_deck === playerDeck) {
      $('#player1 .player-hand').append(html);
    } else {
      $('#player2 .player-hand').append(html);
    }
    playerDeck[cardKey].supply--;
  }

  function drawHand(playerDeck) {
    for (var i = 0; i < 5; i++) {
      drawCard(playerDeck);
    }
  }

  // Pick one key pointing to a card currently in the deck
  function shuffleDeck(playerDeck) {
    var playerDeckKeys = Object.keys(playerDeck);
    var timesToRun = playerDeckKeys.length;
    for(var j = 0; j < timesToRun; j++){
      var k = Math.floor(Math.random() * playerDeckKeys.length);
      if(playerDeck[playerDeckKeys[k]].supply > 0) {
        return playerDeckKeys[k];
      } else {
        playerDeckKeys.splice(k,1);
      }
    }
  }

  // Calculates the value of the treasure cards in the player's hand
  function countHandTreasure(playerHand, playerDeck, playerDiscard) {
    playerHand.find('.handCards').each(function(index, elem){
      var cardName = $(elem).data('name');
      if (playerDeck[cardName].type == "treasure") {
        treasureCount += playerDeck[cardName].amount;
        discardCard(elem, cardName, playerDiscard);
      }
      $('.treasurePoints').text('Treasure Points: ' + treasureCount);
    });
  }

  // Discards every card
  function clearHand(playerHand){
    playerHand.find('.handCards').each(function(index, elem){
      var cardName = $(elem).data('name');
      discardCard(elem, cardName, playerDiscard);
    });
  }

  // Moves one card to the discard pile
  function discardCard(elem, cardName, playerDiscard) {
    elem.remove();
    playerDiscard[cardName].supply++;
  }

  // Merges the discard pile into the draw pile
  function discardMerge(playerDiscard, playerDeck) {
    for (var key in playerDiscard) {
      playerDeck[key].supply += playerDiscard[key].supply;
      playerDiscard[key].supply = 0;
    }
  }

});

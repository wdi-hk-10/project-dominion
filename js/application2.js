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

  $('button').prop('disabled', true);
  $('#start-game').removeAttr('disabled');
  $('#reset-game').removeAttr('disabled');
  $('.start-turn').removeAttr('disabled');

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

  var startSetup = function(){
    // create player start decks
    shopSetup();
    createDeck(p1_deck);
    console.log(p1_deck);
    createDeck(p2_deck);
    console.log(p2_deck);
    // shuffle decks
    // shuffleDeck(p1_deck);
    // shuffleDeck(p2_deck);
    // push first 5 card on decks to hands
    // drawHand(p1_deck, p1_hand, 5);
    // drawHand(p2_deck, p2_hand, 5);
  }

  function createDeck(playerDeck) {
    // minus 7 copper from cardPile
    for (var j = 0; j < 7; j++) {
      playerDeck["copper"].supply++
      var currentValue = $('.buy-button[data-name="copper"]').data("supply");
      $('.buy-button[data-name="copper"]').data("supply", currentValue-1);
    }
    // minus 3 estate from cardPile
    for (var j = 0; j < 3; j++) {
      playerDeck["estate"].supply++
      var currentValue = $('.buy-button[data-name="estate"]').data("supply");
      $('.buy-button[data-name="estate"]').data("supply", currentValue-1);
    }
  }

  var turnSetup = function(){
    $('.actionPoints').text('Action Points: 1');
    $('.buyPoints').text('Buy Points: 1');
    $('.treasurePoints').text('Treasure Points: 0');
  }

  var dominionShop;
  var shopSetup = function(){
    dominionShop = dominionCards;
    for (var key in dominionShop){
      $('.buy-button[data-name="' + key + '"]').data("supply", dominionShop[key].supply).data("cost", dominionShop[key].cost).data("type", dominionShop[key].type);
    }
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
    // && if ($('.buy-button[data-name=" + key + "]').data('type'))!=="action"
      // activate buy-button

  $('.play-buy').on('click', function(){
    console.log("Buy a card");
    $('.play-buy').prop('disabled', true);
    $('.pass-buy').prop('disabled', true);
    // $('.buy-button').removeAttr('disabled');
    $('.play-cleanup').removeAttr('disabled');
  });

  $('.pass-buy').on('click', function(){
    console.log("Don't buy a card");
    $('.play-buy').prop('disabled', true);
    $('.pass-buy').prop('disabled', true);
    $('.play-cleanup').removeAttr('disabled');
  });

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

  $('.play-cleanup').on('click', function(){
    console.log("Discard your hand");
    $('.play-cleanup').prop('disabled', true);
    $('.play-draw').removeAttr('disabled');
  });

  // Step 6 binding - draw
  // $('.draw').on('click', function(){
  //   if (playerDeck.length < 5) {
  //     merge discard & draw piles
  //     shuffle draw pile
  //   }
  //   drawCards(5);
  // });

  $('.play-draw').on('click', function(){
    console.log("Draw five new cards");
    $('.play-draw').prop('disabled', true);
    $('.end-turn').removeAttr('disabled');
  });

  // Step 7 binding - end turn
  var playerTurn = true;
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

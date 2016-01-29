$(document).ready(function(){

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
  $('.buy-button').removeAttr('disabled');

  window.p1_deck = blankCards;
  window.p1_hand = {};
  window.p1_discard = blankCards;
  var p2_deck = blankCards;
  var p2_hand = {};
  var p2_discard = blankCards;

  window.p1_deck = {};
  $.extend(true, p1_deck, blankCards);
  window.p1_hand = {};
  window.p1_discard = {};
  $.extend(true, p1_discard, blankCards);
  var p2_deck = {};
  $.extend(true, p2_deck, blankCards);
  var p2_hand = {};
  var p2_discard = {};
  $.extend(true, p2_discard, blankCards);

  var startSetup = function(){
    // create player start decks
    shopSetup();
  }

  var actionCount = 1;
  var buyCount = 1;
  var treasureCount = 0;

  var playerTurn = true;
  var turnSetup = function(){
    actionCount = 1;
    buyCount = 1;
    treasureCount = 0;
    $('.actionPoints').text('Action Points: 1');
    $('.buyPoints').text('Buy Points: 1');
    $('.treasurePoints').text('Treasure Points: 0');
    if (playerTurn === true) {
      playerDeck = p1_deck;
      playerHand = $('#player1 .player-hand');
      playerDiscard = p1_discard;
    }
  }

  var dominionShop;
  var shopSetup = function(){
    dominionShop = dominionCards;
    for (var key in dominionShop){
      $('.buy-button[data-name="' + key + '"]').data("supply", dominionShop[key].supply).data("cost", dominionShop[key].cost).data("type", dominionShop[key].type);
    }
  }

  window.createDeck = function (playerDeck) {
  // function createDeck(playerDeck) {
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

  function buyCard(elem, playerDiscard) {
    var cardName = $(elem).data('name');
    var currentValue = $(elem).data("supply");
    $(elem).data("supply", currentValue-1);
    playerDiscard[cardName].supply++;
  }

  function findDeckSize(playerDeck) {
    var totalSize = 0;
    for (var key in playerDeck) {
      totalSize += playerDeck[key].supply;
    }
    return totalSize;
  }

  window.drawHand = function(playerDeck) {
  //function drawHand(playerDeck) {
    for (var i = 0; i < 5; i++) {
      drawCard(playerDeck);
    }
  }

  // window.drawCard = function(playerDeck) {
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

  window.countHandTreasure = function(playerHand, playerDeck, playerDiscard) {
  // function countHandTreasure(playerHand, playerDeck, playerDiscard) {
    playerHand.find('.handCards').each(function(index, elem){
      var cardName = $(elem).data('name');
      if (playerDeck[cardName].type == "treasure") {
        treasureCount += playerDeck[cardName].amount;
        discardCard(elem, cardName, playerDiscard);
      }
      $('.treasurePoints').text('Treasure Points: ' + treasureCount);
    });
  }

  window.clearHand = function(playerHand, playerDiscard){
  // function clearHand(playerHand){
    playerHand.find('.handCards').each(function(index, elem){
      var cardName = $(elem).data('name');
      discardCard(elem, cardName, playerDiscard);
    });
  }

  function discardCard(elem, cardName, playerDiscard) {
    elem.remove();
    playerDiscard[cardName].supply++;
  }

  window.discardMerge = function(playerDiscard, playerDeck) {
  // function discardMerge(playerDiscard, playerDeck) {
    for (var key in playerDiscard) {
      playerDeck[key].supply += playerDiscard[key].supply;
      playerDiscard[key].supply = 0;
    }
  }

});


  // Resets the game
  $('#reset-game').on('click', function(){
    clearHand (p1_hand, p1_discard);
    clearHand (p2_hand, p2_discard);
    buttonSetup();
    startSetup();
    turnSetup();
  });
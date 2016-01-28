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
  var p1_hand = {};
  var p1_discard = blankCards;
  var p2_deck = blankCards;
  var p2_hand = {};
  var p2_discard = blankCards;

  var startSetup = function(){
    // create player start decks
    shopSetup();
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

  function buyCard(playerDiscard) {

  }

  window.drawCard = function(playerDeck) {
  // function drawCard(playerDeck) {
    if (playerDeck.length < 1) {
      discardMerge(playerDiscard, playerDeck);
    }
    var card = $("<div>");
    var cardKey = shuffleDeck(playerDeck);
    card.data("name", cardKey);
    card.addClass("handCards");
    card.text(cardKey);
    if (playerDeck == "p1_deck") {
      $('#player1.player-hand').append(card);
    } else {
      $('#player2.player-hand').append(card);
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

  // function clearHand(playerHand, playerDiscard) {
  //   playerHand.child().forEach(){
  //     $(this[data-name])
  //   }
  // }

  function discardCard(playerHand, playerDiscard) {

  }

  function discardMerge(playerDiscard, playerDeck) {
    for (var key in playerDiscard) {
      for (var key in playerDeck) {
        if playerDeck[key] == playerDiscard[key] {
          var currentDeck = $('playerDeck[data-name="' + key + '"]').data("supply");
          var currentDiscard = $('playerDiscard[data-name="' + key + '"]').data("supply");
          $('playerDeck[data-name="' + key + '"]').data("supply", currentDeck + currentDiscard);
          $('playerDeck[data-name="' + key + '"]').data("supply", 0);
        }
      }
    }
  }

});

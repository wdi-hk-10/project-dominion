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
      $('.buy-button[data-name="' + key + '"]').data("supply", dominionShop[key].supply).data("cost", dominionShop[key].cost);
    }
  }

  window.p1_deck = {};
  var p1_hand = {};
  var p1_discard = {};
  var p2_deck = {};
  var p2_hand = {};
  var p2_discard = {};

  window.createDeck = function (playerDeck) {
  // function createDeck(playerDeck) {
    // minus 7 copper from cardPile
    for (var i=0; i < 7; i++) {
      if (playerDeck["copper"]) {
        playerDeck["copper"].supply++
      } else {
        playerDeck["copper"] = blankCards["copper"];
      }
      dominionShop["copper"].supply--;
    }

    // minus 3 estate from cardPile
    for (var j = 0; j < 3; j++) {
      if (playerDeck["estate"]) {
        playerDeck["estate"].supply++
      } else {
        playerDeck["estate"] = blankCards["estate"];
      }
      dominionShop["estate"].supply--;
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

  function drawCard(playerDeck) {
    if (playerDeck.length < 1) {
      discardMerge(playerDiscard, playerDeck);
    }
    if
  }

  function

  function discardMerge(playerDiscard, playerDeck) {

  }
});

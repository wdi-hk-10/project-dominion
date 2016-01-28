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
      $('.buy-button[data-name="' + key + '"]').data("supply", dominionShop[key].supply).data("cost", dominionShop[key].cost).data("type", dominionShop[key].type);
    }
  }

  window.p1_deck = blankCards;
  var p1_hand = {};
  var p1_discard = blankCards;
  var p2_deck = blankCards;
  var p2_hand = {};
  var p2_discard = blankCards;

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
    var card = document.createElement("div");
    card.data("name", $('.buy-button[data-name="' + key + '"]')).text(key);
    card.addClass("handCards");
    if (playerDeck == "p1_deck") {
      $('#player1.player-hand').append(card);
    } else {
      $('#player2.player-hand').append(card);
    }
  }

  function shuffleDeck(playerDeck) {
    var playerDeckKeys = Object.keys(blankCards);
    for(var j = 0; j < playerDeck.length; j++){
      var k = Math.floor(Math.random() * playerDeckKeys.length);
      if(playerDeck[(playerDeckKeys[k])].data('supply') > 0) {
        console.log(playerDeckKeys[k]);
      }
    }
  }

  function shuffleDeck2(playerDeck) {
    var playerDeckKeys = Object.keys(blankCards);
    var k = Math.floor(Math.random() * playerDeckKeys.length);
    if(playerDeck[(playerDeckKeys[k])].data('supply') > 0) {
      console.log(playerDeckKeys[k]);
    }
  }

  function clearHand(playerHand, playerDiscard) {
    playerHand.child().forEach(){
      $(this[data-name])
    }
  }

  function discardCard(playerHand, playerDiscard) {

  }


  // function drawCard(playerDeck) {
  //   if (playerDeck.length < 1) {
  //     discardMerge(playerDiscard, playerDeck);
  //   }
  //   if
  // }

  // function discardMerge(playerDiscard, playerDeck) {

  // }
});

$(document).ready(function() {
  $("form#deckForm").submit(function(event) {
    event.preventDefault();

    var numbers = ["Ace", "King","Queen","Joker","10","9","8","7","6","5","4","3","2"]
    var suits = ["spades", "hearts", "clubs", "diamonds"];

    var output = numbers.forEach(function(number){
      suits.forEach(function(suit) {
        $('ul').append('<li>' + number + " of " + suit + '</li>');
      });
    });

    $("#results").show();


  });
});

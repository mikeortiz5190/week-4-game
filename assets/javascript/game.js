

$(document).ready(function() {

console.log("your Link is good!");

//variables

var ranNum = 0;

var total = 0;

var pic1 = 0;

var pic2 = 0;

var pic3 = 0;

var pic4 = 0;

var total = 0;

var newVal = 0;

var wins = 0;

var loses = 0;

//click start, all random numbers are assignned

$("#start").on("click", function randomnize() {
      ranNum = Math.floor((Math.random() * 50) + 10);

      pic1 = Math.floor((Math.random() * 10) + 1);

      pic2 = Math.floor((Math.random() * 10) + 1);

      pic3 = Math.floor((Math.random() * 10) + 1);

      pic4 = Math.floor((Math.random() * 10) + 1);

      console.log(ranNum);

      console.log(pic1);

      console.log(pic2);

      console.log(pic3);

      console.log(pic4);

      $(".total").html($("<p>").html(0));

      $(".number").html($("<p>").html(0));

//the number to get to is displayed

      $(".number").html($("<p>").html(ranNum));

//clicking each picture will add their number to the current total.

});

$(".pic1").on("click", function() {
      newVal = newVal + pic1;
      $(".total").html($("<p>").html(newVal));
      console.log(newVal);
      checkWinner()
});

$(".pic2").on("click", function() {
      newVal = newVal + pic2;
      $(".total").html($("<p>").html(newVal));
      console.log(newVal);
      checkWinner()
});

$(".pic3").on("click", function() {
      newVal = newVal + pic3;
      $(".total").html($("<p>").html(newVal));
      console.log(newVal);
      checkWinner()
});

$(".pic4").on("click", function() {
      newVal = newVal + pic4;
      $(".total").html($("<p>").html(newVal));
      console.log(newVal);
      checkWinner()
});

$(".pic5").on("click", function() {
      newVal = newVal + pic3;
      $(".total").html($("<p>").html(newVal));
      console.log(newVal);
      checkWinner()
});

$(".pic6").on("click", function() {
      newVal = newVal + pic4;
      $(".total").html($("<p>").html(newVal));
      console.log(newVal);
      checkWinner()
});

//winning and loosing conditions

function checkWinner() {

if (newVal === ranNum){
      alert("YOU WIN!!!");
      wins++
      $(".winScore").html($("<p>").html(wins));
      $(".total").html($("<p>").html(0));
      $(".number").html($("<p>").html(0));
      newVal = 0;
}

else if (newVal > ranNum){
      alert("YOU GOT SUCK!!!");
      loses++
      $(".looseScore").html($("<p>").html(loses));
      $(".total").html($("<p>").html(0));
      $(".number").html($("<p>").html(0));
      newVal = 0;
}
}

});
























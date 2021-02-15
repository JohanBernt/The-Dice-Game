var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number 1-6

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //dice1.png to dice6.png

var image1 = document.querySelectorAll("img")[0]; //selects image at first position

image1.setAttribute("src", randomDiceImage); //changes to random image

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //this is for the second image

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

//defining the winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

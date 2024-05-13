let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDice = "dice" + randomNumber1 + ".png";

let randomImage = "images/" + randomDice;

let image1 = document.querySelectorAll("img")[0];

let image2 = document.querySelectorAll("img.img2");

image1.setAttribute("src", randomImage);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage2 = "images/dice" + randomNumber2 + ".png";

let randomImageSource2 = document.querySelector("img.img2");

randomImageSource2.setAttribute("src", randomImage2);

let title = document.querySelector("h1");

if (randomNumber1 === randomNumber2) {
   title.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
   title.innerHTML = "🚩 Player 1 wins!";
} else {
   title.innerHTML = "Player 2 wins! 🚩";
}
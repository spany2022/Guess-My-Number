'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".check").addEventListener("click", addGuessNumber);
function addGuessNumber() {
    let guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector(".message").textContent = "No number";
        if (score > 1) {
            document.querySelector(".message").textContent = "please enter a number";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "you lost the game"
            document.querySelector(".score").textContent = "0";
        }
     }
    else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Your answer is correct";
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;
        let Highscore = document.querySelector(".highscore").textContent
        if (score > Highscore) {
            document.querySelector(".highscore").textContent = score;
        } else if(score < Highscore) {
            document.querySelector(".highscore").textContent = Highscore;
        }
    }
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "you lost the game"
            document.querySelector(".score").textContent = 0;
        }
    }
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too low"
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "you lost the game"
            document.querySelector(".score").textContent = 0;
        }
    }
};

document.querySelector(".again").addEventListener("click", chooseAgain);
function chooseAgain() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector(".message").textContent ="start guessing";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
}

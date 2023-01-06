'use strict';

const getSecretNumber = function() {
    return Math.trunc(Math.random() * 20) + 1
}
let secretNumber = getSecretNumber();

const displayMsg = function(msg) {
    document.querySelector('.message').textContent = msg;
}

let score = 20;
let hightScore = 0;
let numberElem = document.querySelector(".number");

document.querySelector(".check").addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMsg("No number")
    } else if (guess === secretNumber) {
        displayMsg("Correct Number!");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem"
        if (score > hightScore) {
            hightScore = score;
            document.querySelector(".highscore").textContent = score;
        }
    } else if (guess !== secretNumber) {

        if (score > 1) {
            displayMsg(guess > secretNumber ? "Too high!" : "Too low")
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMsg("You lost the game!");
            document.querySelector(".score").textContent = 0;
        }

    }
})


document.querySelector('.again').addEventListener("click", function() {
    score = 20;
    secretNumber = getSecretNumber();
    document.querySelector(".number").textContent = '?';
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector(".number").style.width = "15rem"
    document.querySelector('body').style.backgroundColor = "#222 ";
})
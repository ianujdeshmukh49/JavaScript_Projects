'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

var scores = [0, 0];
let randomDiceNumber = 0;
let currentScore = 0;

let active_player = 0;

score0El.textContent = 0;
score1El.textContent = 0;

function endGame() {
    diceEl.classList.add('hidden');
    roll_dice_button.classList.add('hidden');
    btnHold.classList.add('hidden');
}

function switchPlayer() {
    document.getElementById(`current--${active_player}`).textContent = 0;
    currentScore = 0;
    active_player = active_player === 0 ? 1 : 0;
}

const roll_dice_button = document.querySelector('.btn--roll');
roll_dice_button.addEventListener('click', function () {

    if (diceEl.classList.contains('hidden')) {
        diceEl.classList.remove('hidden');
        btnHold.classList.remove('hidden');
    }
    randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${randomDiceNumber}.png`;
    if (randomDiceNumber !== 1) {
        currentScore += randomDiceNumber;
        document.getElementById(`current--${active_player}`).textContent = currentScore;

    } else {
        switchPlayer();
    }
});

const btnHold = document.querySelector('.btn--hold');

btnHold.addEventListener('click', function () {
    scores[active_player] += currentScore;
    document.getElementById(`score--${active_player}`).textContent = scores[active_player];
    if (scores[active_player] >= 10) {
        document.querySelector(`.player--${active_player}`).classList.add('player--winner');

        endGame();


        console.log(`Player ${active_player} is winner`);
        // document.querySelector(`.player--${active_player}`).classList.remove('player--winner');
    }
    switchPlayer();
});


const newGame = document.querySelector('.btn--new');

newGame.addEventListener('click', function () {
    console.log("New Game");
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');

    scores = [0, 0];
    currentScore = 0;
    active_player = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    diceEl.classList.remove('hidden');
    roll_dice_button.classList.remove('hidden');
    btnHold.classList.remove('hidden');
});
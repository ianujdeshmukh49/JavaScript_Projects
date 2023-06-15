'use strict';

// console.log(document.querySelector('.message').textContent);
// let gusessnum = document.querySelector('.guess').textContent;
// console.log(gusessnum);
const randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

let highscore = 0;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value);

    // if (document.querySelector('.guess').value == 1) {
    //     document.querySelector('.message').textContent = "Correct Answer";
    // }

    const usernumber = Number(document.querySelector('.guess').value);

    // check if a number is entered or not

    if (!usernumber) {
        document.querySelector('.message').textContent = 'No number entered';
    }


    if (usernumber == randomNumber) {
        document.querySelector('.message').textContent = 'Correct Answer';
        score++;
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.score').textContent = score;

        document.querySelector('body').style.backgroundColor = '#60b347';
    }
    else if (usernumber > randomNumber) {

        document.querySelector('.message').textContent = 'Too High';
        if (score == 0) {
            document.querySelector('.message').textContent = 'Lost the game';
        }
        else {
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
    else {

        document.querySelector('.message').textContent = 'Too Low';

        if (score == 0) {
            document.querySelector('.message').textContent = 'Lost the game';
        }
        else {
            score--;
            document.querySelector('.score').textContent = score;
        }

    }



});


document.querySelector('.again').addEventListener('click', function () {

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = "Start guessing";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';



    if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('.score').textContent = 20;




});

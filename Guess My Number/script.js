'use strict';
/*
const startGuess = document.querySelector('.message').textContent;

console.log(startGuess);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Finding Random Number!!!

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// score value!!!

let score = 20;

// high score value!!

let highscore = 0;
// Selecting guess area!!!

const guess = document.querySelector('.guess');

// Selecting Check Button!!!

const checkButton = document.querySelector('.check');
checkButton.addEventListener('click', function () {
  const guessNumber = Number(guess.value);
  console.log(guessNumber, typeof guessNumber);

  // when there was no input
  if (!guessNumber) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    // when player win!
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    score++;
    document.querySelector('.score').textContent = score;

    // highScore condition....

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong....
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessNumber > secretNumber ? '📈 Too High!' : '📉 Too Low!';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤷 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guessNumber > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤷 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   // when guess is too low
  // } else if (guessNumber < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤷 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

const againButton = document.querySelector('.again');

againButton.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  const guess = document.querySelector('.guess');
  guess.value = '';
  document.querySelector('.score').textContent = score;
  // document.querySelector('.highscore').textContent = 0;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});

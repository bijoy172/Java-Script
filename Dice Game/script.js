'use strict';

// selecting elements...
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const butNew = document.querySelector('.btn--new');
const butRoll = document.querySelector('.btn--roll');
const butHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// starting condition...

const initial = function () {
  scores = [0, 0];
  currentScore = 0; //Current initial value 0.
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
initial();

// Function for switching player's...
const switchPlayer = function () {
  // Switch the player
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active'); //toggle -  if it has class so remove it, if not then add it (class = player--active).
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality...
butRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a ramdom dice roll..
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    // 2. Display dice..
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;

    // 3. Check for rolled 1

    if (dice !== 1) {
      // Add dice value to the current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch the player
      switchPlayer();
    }
  }
});

// Button Hold functionality...

butHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[0/1] = score[0/1] + currentScore

    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 3. Check if player's score >= 100 or not
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //  Switch the player
      switchPlayer();
    }
  }
});

// Button New Functionality...
butNew.addEventListener('click', initial);

'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  // When there is no imput
  if (!guess) {
    // document.querySelector('.message').textContent =
    //('⛔️ Please enter a number! ⛔️');
    document.querySelector('body').style.backgroundColor = 'red';
    displayMessage('⛔️ Please enter a number! ⛔️');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
    }

    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    //When guess is too high
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📈 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
      //When you lose
    } else {
      displayMessage('You Lose! 😢');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#222';
    }
  }
});

// Challenge
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = document.querySelector(
    '.number'
  ).textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

//Reload Button
document.querySelector('.reload').addEventListener('click', function () {
  location.reload();
});

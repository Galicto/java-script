
// Simple Guess the Number Game (Node.js version)
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const secret = Math.floor(Math.random() * 5) + 1; // 1 to 5
let guess = 0;

function askGuess() {
  readline.question('Guess a number between 1 and 5: ', (input) => {
    guess = parseInt(input);
    if (guess === secret) {
      console.log('Correct! The number was ' + secret);
      readline.close();
    } else {
      console.log('Wrong! Try again.');
      askGuess();
    }
  });
}

askGuess();
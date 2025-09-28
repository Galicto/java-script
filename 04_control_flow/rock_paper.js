// Rock-Paper-Scissors Game

const readline = require('readline');
const choices = ["rock", "paper", "scissors"];

function playGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Choose rock, paper, or scissors: ", function(user) {
    user = user.trim().toLowerCase();
    const computer = choices[Math.floor(Math.random() * choices.length)];

    if (!choices.includes(user)) {
      console.log("Invalid choice. Please type rock, paper, or scissors.");
      rl.close();
      return;
    }

    let result = "";
    if (user === computer) {
      result = `It's a Tie! Computer also chose ${computer}`;
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      result = `You Win! Computer chose ${computer}`;
    } else {
      result = `You Lose! Computer chose ${computer}`;
    }

    console.log(result);
    rl.close();
  });
}

playGame();
// to read from the console
const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})
const hangSteps = [
  `






  `,
  `






  _______`,
  `
     |
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |/
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |/      |
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |/      |
     |      (_)
     |      \\|/
     |       |
     |      / \\
     |
  ___|___`
  ]

function wrongGuessCount(word, guesses) {
  return guesses
  .filter(geuss => word.indexOf(geuss) < 0)
  .length;
}

function showGuess(word, guesses) {
  return word.split('').map(letter => {
    if(guesses.indexOf(letter) === -1) {
      return "_"
    }
      return letter
  }).join(" ")
}

function isWinner(word, guesses) {
  if(wrongGuessCount(word, guesses) >6) return false
  return showGuess(word, guesses).indexOf("_") === -1
}

function showHangman(word, guesses) {
  switch(wrongGuessCount(word, guesses)) {
    case 0:
      return (hangSteps[0])
      break;
    case 1:
      return (hangSteps[1])
      break;
    case 2:
      return (hangSteps[2])
      break;
    case 3:
      return (hangSteps[3])
      break;
    case 4:
      return (hangSteps[4])
      break;
    case 5:
      return (hangSteps[5])
      break;
    case 6:
      return (hangSteps[6])
      break;
  }
}

function next(word, guesses) {

  console.log(showHangman(word, guesses));
  console.log(showGuess(word, guesses));
  console.log('You have only ' + (6-wrongGuessCount(word,guesses)) + ' lifes left');

  if(wrongGuessCount(word, guesses) >5) {
    console.log("You lost! Better luck next time!")
    newGame();
  }

  // check if won
  if(isWinner(word, guesses)) {
    console.log("You won!")
    newGame();
  }

  rl.question('Choose wisley: ', answer => {
    console.log('you already wrote', guesses.concat(answer))
    next(word, guesses.concat(answer));
  })


}

function newGame() {
  rl.question('Want to play again (y/n)? ', answer => {
    console.log('You wrote:', answer);

    if (answer == "y") {
      next(words[Math.floor(Math.random() * words.length)], [])
    }
    else {
      rl.close
    }
  })
}

console.log('Welcome, I want to play a game, let"s start');
words = ["amsterdam","bankok","kuala lumpur","sydney","rio de janeiro"]
next(words[Math.floor(Math.random() * words.length)], [])

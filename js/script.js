let gameScore = document.getElementById("result");
let score = 0;
console.log(score);
function playGame(playerInput) {
  clearMessages();
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "Kamień";
    } else if (argMoveId == 2) {
      return "Papier";
    } else if (argMoveId == 3) {
      return "Nożyce";
    }
    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "Nieznany ruch";
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to:" + randomNumber);

  let computerMove = getMoveName(randomNumber);

  function displayResult(computerMove, playerMove) {
    console.log(argPlayerMove);

    if (computerMove == "Kamień" && playerMove == "Papier") {
      printMessage("Ty wygrywasz!");
      score += 1;
      // gameScore.textContent = score;
    } else if (computerMove == "Papier" && playerMove == "Nożyce") {
      printMessage("Ty wygrywsz!");
      score += 1;
      // gameScore.textContent = score;
    } else if (computerMove == "Nożyce" && playerMove == "Kamień") {
      printMessage("Ty wygrywasz!");
      score += 1;
      // gameScore.textContent = score;
    } else if (computerMove == playerMove) {
      printMessage("Remis");
    } else {
      printMessage("Przegrałeś!!!!!!!");
      score--;
    }
    gameScore.textContent = score;
  }

  console.log(computerMove);
  printMessage(computerMove);

  //   let playerInput = prompt(
  //     "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce"
  //   );

  console.log("Gracz wybrał " + playerInput);

  let playerMove = getMoveName(playerInput);

  console.log(playerMove);
  printMessage(playerMove);

  displayResult(computerMove, playerMove);
}

document.getElementById("play-rock").addEventListener("click", function () {
  playGame(1);
});

document.getElementById("play-paper").addEventListener("click", function () {
  playGame(2);
});

document.getElementById("play-scissors").addEventListener("click", function () {
  playGame(3);
});

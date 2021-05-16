let gameScore = document.getElementById("result");
let score = 0;

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

  let computerMove = getMoveName(randomNumber);

  function displayResult(computerMove, playerMove) {
    if (computerMove == "Kamień" && playerMove == "Papier") {
      printMessage("Ty wygrywasz!");
      score += 1;
    } else if (computerMove == "Papier" && playerMove == "Nożyce") {
      printMessage("Ty wygrywsz!");
      score += 1;
    } else if (computerMove == "Nożyce" && playerMove == "Kamień") {
      printMessage("Ty wygrywasz!");
      score += 1;
    } else if (computerMove == playerMove) {
      printMessage("Remis");
    } else {
      printMessage("Przegrałeś!");
      score--;
    }
    gameScore.textContent = score;
  }

  printMessage(computerMove);

  let playerMove = getMoveName(playerInput);

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

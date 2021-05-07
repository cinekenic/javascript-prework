function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) {
    return "papier";
  } else if (argMoveId == 3) {
    return "nożyce";
  }
  printMessage("Nie znam ruchu o id " + argMoveId + ".");
  return "Nieznany ruch";
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to:" + randomNumber);

let computerMove = getMoveName(randomNumber);

function displayResult(argComputerMove, argPlayerMove) {
  console.log(argPlayerMove);
  argComputerMove = computerMove;
  argPlayerMove = playerMove;
  if (computerMove == "kamień" && playerMove == "papier") {
    printMessage("Ty wygrywasz!");
  } else if (computerMove == "papier" && playerMove == "nożyce") {
    printMessage("Ty wygrywsz!");
  } else if (computerMove == "nożyce" && playerMove == "kamień") {
    printMessage("Ty wygrywasz!");
  } else if (computerMove == playerMove) {
    printMessage("Remis");
  } else {
    printMessage("Przegrałeś!");
  }
}

console.log(computerMove);
printMessage(computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce");

console.log("Gracz wybrał " + playerInput);

let playerMove = getMoveName(playerInput);

console.log(playerMove);
printMessage(playerMove);

displayResult(computerMove, playerMove);

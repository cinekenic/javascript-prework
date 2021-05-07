let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("Wylosowana liczba to:" + randomNumber);

let computerMove = "Nieznany ruch";
if (randomNumber == 1) {
  computerMove = "kamień";
} else if (randomNumber == 2) {
  computerMove = "papier";
} else if (randomNumber == 3) {
  computerMove = "nożyce";
}

console.log(computerMove);
printMessage(computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce");

console.log("Gracz wybrał " + playerInput);

let playerMove = "Nieznany ruch";

if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == "2") {
  playerMove = "papier";
} else if (playerInput == "3") {
  playerMove = "nożyce";
}

console.log(playerMove);
printMessage(playerMove);

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

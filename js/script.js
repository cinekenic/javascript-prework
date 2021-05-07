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

if (computerMove == "kamień" && playerMove == "papier") {
  console.log("Ty wygrywasz!");
} else if (computerMove == "papier" && playerMove == "nożyce") {
  console.log("Ty wygrywsz!");
} else if (computerMove == "nożyce" && playerMove == "kamień") {
  console.log("Ty wygrywasz!");
} else if (computerMove == playerMove) {
  console.log("Remis");
} else {
  console.log("Przegrałeś!");
}

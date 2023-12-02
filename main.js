`use strict`;
/*
* ${param} nickname = String
* ${param} lifes = number
* ${param} card = number 
*/
function Users(nickname, lifes, card){
  this.nickname = nickname;
  this.lifes = lifes;
  this.card = card; 
}

function reduceLife(player1, player2) {
  if (player1.card < player2.card) {
    player1.lifes--;
  } else if (player2.card < player1.card) {
    player2.lifes--;
  }
}

let humanPlayer = new Users("Ackerman", 3, 4);
let humanPlayer2 = new Users("tilin", 3, 6);
reduceLife(humanPlayer,humanPlayer2);

let nickHuman = document.getElementById("nick-player-1");
let lifesHumanPlayer = document.getElementById("lifes-player-1");
let cardHumanPlayer = document.getElementById("card-player-1");
nickHuman.innerHTML = `nickname: ${humanPlayer.nickname}`; 
lifesHumanPlayer.innerHTML = `Vidas: ${humanPlayer.lifes};`
cardHumanPlayer.innerHTML = `Carta: ${humanPlayer.card}`;


let nickHuman2 = document.getElementById("nick-player-2");
let lifesHumanPLayer2 = document.getElementById("lifes-player-2");
let cardHumanPlayer2 = document.getElementById("card-player-2");
nickHuman2.innerHTML = `nickname: ${humanPlayer2.nickname}`;
lifesHumanPLayer2.innerHTML = `Vidas: ${humanPlayer2.lifes}`;
cardHumanPlayer2.innerHTML = `Carta: ${humanPlayer2.card}`;

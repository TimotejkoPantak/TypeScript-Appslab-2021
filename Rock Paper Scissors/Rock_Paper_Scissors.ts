var player1;
var player2;


if(player1 == "rock" && player2 == "rock" || player1 == "scissors" && player2 == "scissors" || player1 == "paper" && player2 == "paper"){
    console.log("Remiza");
}
else if(player1 == "rock" && player2 == "scissors" || player1 == "scissors" && player2 == "paper" || player1 == "paper" && player2 == "rock"){
    console.log("PLAYER 1 WIN ");
}
else{
    console.log("PLAYER 2 WIN ");
}
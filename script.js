var square = document.getElementsByClassName('square');
var turns = 0;
var games = 1;
var player= [];
var computer = [];
var winCounter = 0;
var won = false;
var message = 'Make a move!';
var winners = [
	[1,2,3], [4,5,6],
	[7,8,9], [1,4,7],
	[2,5,8], [3,6,9],
	[1,5,9], [3,5,7]
];


function placeChar(sqr){
	// places an X in the square that the user selected
	if(document.getElementById('play-square-'+sqr).innerHTML === ''){
		document.getElementById('play-square-'+sqr).innerHTML = 'X';
	// calls the computer to select where to place an O.
		turns++;

		if(turns<5){
			AI();
		}
		player.push(sqr);
	}else{
		alert("You must select an empty square!")
	}
	if(!won){
	checkWin(player,true)	
	}
}
function AI(){
	// initializes a variable to terminate the loop when the computer makes a move
	// Try & win, try & block, try a square += 2, or random.
	var placed = 0;	

	// executes a while loop to generate random numbers until an empty square is found on the board.
	while(placed!==1){
		var num = Math.floor(Math.random()*8)+1;
		if(document.getElementById('play-square-'+num).innerHTML == ''){
			document.getElementById('play-square-'+num).innerHTML = 'O';
			placed = 1;
			// Adds the square where an "O" was placed to the computer active square array
			computer.push(num);
			if(!won){
			checkWin(computer,false)
			}
		}
	}

}
function checkWin(sqrs, isPlayer){
	var thisWin=[]
	var rowCount = 0;
	var who = '';
	for(i=0;i<winners.length;i++){
		rowCount = 0;
		thisWin = winners[i];
		for(j=thisWin.length-1;j>=0;j--){
			if(sqrs.indexOf(thisWin[j])>-1){
				rowCount++;
			}
		}
		if((rowCount === 3) && (isPlayer)){
			won = true;
			who = 'player';
		}else if((rowCount === 3)&&(!isPlayer)){
			won = true;
			who = 'computer'
		}
	}
		if(won){
			endGame(who);
		}
}
function endGame(who){
	

		if(who === 'player'){
			message = 'You Win! Play again?';
			document.getElementById('message').innerHTML = message;
			winCounter++;
		}else if(who === 'computer'){
			message = 'You Lose! Play again?';
			document.getElementById('message').innerHTML = message;
			winCounter--;
		}else{
			message = "It's a draw! Play again?";
			document.getElementById('message').innerHTML = message;
		}
		document.getElementById('button').disabled = false;
		document.getElementById('win-counter').innerHTML = " "+winCounter;
	
}

function newGame(){
	turns = 0;
	won = false;
	message = "Make a move!";
	document.getElementById('message').innerHTML = "Make your move!";
	for(i=0;i<9;i++){
		square[i].innerHTML= '';
	}
	games++;
	player = [];
	computer = [];
	if(games%2===0){
		AI()
	}
	document.getElementById('button').disabled = true;

}

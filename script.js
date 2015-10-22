var square = $('.square');
var turns = 0;
var games = 1;
var player= [];
var computer = [];
var winCounter = 0;
var won = false;
var message = 'Make a move!';
var winners = [
	[1,2,3], [4,5,6], [7,8,9], [1,4,7],
	[2,5,8], [3,6,9], [1,5,9], [3,5,7]
];

function placeChar(sqr){
	// places an X in the square that the user selected
	if($('#play-square-'+sqr).innerHTML === ''){
		$('#play-square-'+sqr).innerHTML = 'X';
	// calls the computer to select where to place an O.
		turns++;
		if(turns<9){
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
		if($('#play-square-'+num).innerHTML == ''){
			$('#play-square-'+num).innerHTML = 'O';
			placed = 1;
			// Adds the square where an "O" was placed to the computer active square array
			computer.push(num);
			turns++;
			if(!won){
			checkWin(computer,false);
			
			}
		}
	}
	// beatUser()
	// blockUser()
}


// function blockUser(){
// 	var thisWin = [];
// 	var rowCount = 0;
// 	var matches = [];
// 	for(i=0;i<winners.length;i++){
// 		rowCount = 0;
// 		thisWin = winners[i];

// 		for(j=thisWin.length;j>=0;j--){
// 			if(player.indexOf(thisWin[j])>==0){
// 				rowCount++;
// 				console.log(rowCount)
// 			}
// 			if(rowCount === 2){
// 				console.log(i);
				
// 			}
// 		}
// 	}


// }
function checkWin(sqrs, isPlayer){
	var thisWin=[];
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
			$('#message').innerHTML = message;
			winCounter++;
		}else if(who === 'computer'){
			message = 'You Lose! Play again?';
			$('#message').innerHTML = message;
			winCounter--;
		}else if(turns===9){
			message = "It's a draw! Play again?";
			$('#message').innerHTML = message;
		}
		$('#button').disabled = false;
		$('#win-counter').innerHTML = " "+winCounter;	
}

function newGame(){
	turns = 0;
	won = false;
	message = "Make a move!";
	$('#message').innerHTML = "Make your move!";
	for(i=0;i<9;i++){
		square[i].innerHTML= '';
	}
	games++;
	player = [];
	computer = [];
	if(games%2===0){
		AI()
	}
	$('#button').disabled = true;

}















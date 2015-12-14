var square = $('.square');
var turns = 0;
var games = 1;
var player= [];
var computer = [];
var winCounter = 0;
var interval = 0;
var now = new Date().getTime();
var then = new Date().getTime()+1001;
var won = false;
var message = 'Make a move!';
var winners = [
	[1,2,3], [4,5,6], [7,8,9], [1,4,7],
	[2,5,8], [3,6,9], [1,5,9], [3,5,7]
];

function placeChar(sqr){
	// places an X in the square that the user selected
	var currId = '#play-square-'+sqr;
	interval = then-now;
	now = new Date().getTime();
	
	console.log(interval)
	if(($(currId).html() === '')&&(!won)&&(interval >= 1000)){
		$(currId).html("X");
	// calls the computer to select where to place an O.
		turns++;
		player.push(sqr);
		if(!won){
			checkWin(player,true)	
		}
		if((turns == 9)&&(!won)){
			endGame('draw')
		}
		if((turns<9)&&(!won)){
			setTimeout(AI,1000)
		}
		
	}else if(interval < 1000){
		alert("You must let the computer make a move")
	}else if(won){
		alert("You must Start a new game")
	}else{
		alert("You must select an empty square!")
	}
	
	
}
function AI(){
	// initializes a variable to terminate the loop when the computer makes a move
	// Try & win, try & block, try a square += 2, or random.
	var placed = 0;	
	// executes a while loop to generate random numbers until an empty square is found on the board.
	while(placed!==1){
		var num = Math.floor(Math.random()*8)+1;
		var currId = "#play-square-"+num;
		if($(currId).html() === ''){
			$(currId).html("O");
			placed = 1;
			// Adds the square where an "O" was placed to the computer active square array
			computer.push(num);
			turns++;
			if(!won){
				checkWin(computer,false);
			}
		}
	}
	then = new Date().getTime();
}

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
			break;
		}else if((rowCount === 3)&&(!isPlayer)){
			won = true;
			who = 'computer'
			break;
		}
	}
		if(won){
			endGame(who);
		}
}
function endGame(who){
		if(who === 'player'){
			message = 'You Win! Play again?';
			$('#message').html(message);
			winCounter++;
		}else if(who === 'computer'){
			message = 'You Lose! Play again?';
			$('#message').html(message);
			winCounter--;
		}else if(who === 'draw'){
			message = "It's a draw! Play again?";
			$('#message').html(message);
		}
		$('#button').disabled = false;
		$('#win-counter').html(" "+winCounter);	
}

function newGame(){
	turns = 0;
	won = false;
	now = new Date().getTime();
	then = new Date().getTime()+5001;
	message = "Make a move!";
	$('#message').html(message);
	for(i=0;i<9;i++){
		square[i].innerHTML= '';
	}
	games++;
	player = [];
	computer = [];
	if(games%2===0){
		setTimeout(AI,1000)
	}
	$('#button').disabled = true;

}















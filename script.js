var square = document.getElementsByClassName('square');
var turns = 0;
var games = 1;
var player= [];
var computer = [];
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
	}
	
	
	// checkWin()
}
function AI(){
	// initializes a variable to terminate the loop when the computer makes a move
	// Try & win, try & block, try a square += 2, or random.
	var placed = 0;	
	while(placed!==1){
		var num = Math.floor(Math.random()*8)+1;
		if(document.getElementById('play-square-'+num).innerHTML == ''){
			document.getElementById('play-square-'+num).innerHTML = 'O';
			placed = 1;
			computer.push(num)
		}
	}
	
}
function checkWin(){
	var thisWin=[]
	for(i=0;i<winners.length;i++){
		thisWin = winners[i];

		for(j=thiswin.length;j>=0;j--){


		}

	}

}

function newGame(){
	turns = 0;
	for(i=0;i<1;i++){
		// square[i].innerHTML= '';
		console.dir(square[i])
	}
	games++;
}

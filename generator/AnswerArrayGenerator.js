var gridSize = 10;
var winnerHorizTemp = [];
var winnerVertTemp = [];
var winnerDiagTemp = [];
var winner = [];

for(i=1;i<=gridSize*gridSize;i++){
	winnerHorizTemp.push(i)
	if(i%gridSize === 0){
		winner.push(winnerHorizTemp);
		winnerHorizTemp = [];
	}
}

for(i=1;i<= gridSize;i++){

	for(x=0;x<gridSize; x++){
		winnerVertTemp.push(x*gridSize + i)
	}
	winner.push(winnerVertTemp);
	winnerVertTemp = [];
}

for(i=1;i<=gridSize*gridSize;i+=gridSize+1){
	winnerDiagTemp.push(i);
}
	winner.push(winnerDiagTemp);
	winnerDiagTemp=[];

for(i=gridSize;i<gridSize*gridSize;i+=gridSize-1){
	winnerDiagTemp.push(i);

}
	winner.push(winnerDiagTemp);
	winnerDiagTemp = [];
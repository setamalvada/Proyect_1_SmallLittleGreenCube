    const canvas = document.getElementById("my-canvas")
    const ctx = canvas.getContext("2d")
    
    
  

   var gameStarted = false;

document.body.addEventListener("keydown", function(event){

	if(event.keyCode == 13 && !gameStarted){
		startGame();
	}

});

intro_screen();

function intro_screen(){
	ctx.font = "50px Impact";
	ctx.fillStyle = "#0099CC";
	ctx.textAlign = "center";
	ctx.fillText("HTML5 Game", canvas.width/2, canvas.height/2);

	ctx.font = "20px Arial";
	ctx.fillText("Press Enter To Start", canvas.width/2, canvas.height/2 + 50);
}

function startGame(){
	const game = new Game(ctx)
    game.run()
}

function loop(){
	console.log('game running');
}

function clearCanvas(){
	ctx.clearRect(0, 0, 640, 360);
}
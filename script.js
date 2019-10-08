    const canvas = document.getElementById("my-canvas")
    const ctx = canvas.getContext("2d")
    
    
  

   var gameStarted = false;

document.body.addEventListener("keydown", function(event){

	if(event.keyCode == 13 && !gameStarted){
		startGame();
		const divIntro = document.querySelector(".intro-game")
		divIntro.classList.add("fade-out")
	}

});


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
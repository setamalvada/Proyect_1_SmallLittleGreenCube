class Game {
      constructor(ctx) {
        this.ctx = ctx;
        this.bg = new Background(ctx)
        this.player = new Player(ctx) 
        

        //this.bg = new Background(ctx)
        //this.car = new Car(ctx)  
        this.intervalId = null
        //this.intervalIdTime = null;
        this.obstacles = new Obstacle(ctx,700,320,320,30)
         //new Obstacle(ctx,1000,200,200,30),
         //new Obstacle(ctx,1250,150,200,30),
         
        
    
        //this.tick = 0

  }

  run() {
    //this.audio.play()
   
    this.intervalId = setInterval(() => {
      //this._clear()
      this.draw()
      this._move()
      this.player.runningOnObstacle(this.obstacles)
      this.player.crashWithTopObstacle(this.obstacles)

      this.player.checkIsFloor()
    
      console.log(this.player.y0)
    }, 1000 / 60)
  }
  //Aquí van los métodos

  draw() {
    this.bg.draw()
    this.player.draw()
    this.obstacles.draw()
/*
    this.tick++

    if (this.tick > Math.random() * 300 + 200) {
      this.tick = 0
      this._addObstacle()
    }*/
  }
  _move() {
    this.bg.move()
    this.player.move()
    this.obstacles.move()
  }

  
  
  
  _checkCollisions(){
    const col = this.obstacles1.some(o => {
      const result =o.collide(this.player)
      console.log(result)
      return result
    })
  
    if (col) {
      this._gameOver()
    }
  }

  
  

  _gameOver() {
    //this.audio.pause()
    clearInterval(this.intervalId)

    //this.gameOverAudio.play()
    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
  }

}  
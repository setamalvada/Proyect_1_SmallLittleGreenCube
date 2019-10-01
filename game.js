class Game {
      constructor(ctx) {
        this.ctx = ctx;
        this.bg = new Background(ctx)
        this.player = new Player(ctx) 
        

        //this.bg = new Background(ctx)
        //this.car = new Car(ctx)  
        this.intervalId = null
        //this.intervalIdTime = null;
        this.obstacles = new Obstacle(ctx,700,320,300,100)
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
      
      //this._clearObstacles()
      //this._checkCollisions()
      this.player.crashWithTopObstacle(this.obstacles)
      this.player.obstacleDetection(this.obstacles)
      this.player.checkIsFloor()
      this.player.runningOnObstacle(this.obstacles)
      //this.checkJumpInObstacle()
      //this.updateGameArea()
     console.log(this.player.vy)
      //console.log(this.player.y)
      //console.log(this.obstacles[0].y)
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

  
  /*updateGameArea(){
  if(this.player.crashWithUpperParts(this.obstacles)){
    this.player.y = this.obstacles.y-(this.obstacles.h+this.obstacles.h/2)
    
  }

  else{
    this.vy = -this.vy
  }*/
      //for (let i = 0; i < this.obstacles.length; i++) { 
      
      
      //}
    
   /* else if (this.player.checkPos(this.obstacles)){
      this.player.y0 = 350
    }
  }*/
  
  /*checkJumpInObstacle(){
    if(this.player.crashWithUpperParts(this.obstacles)){
      this.player._jump()
    }
  }*/
  
  _checkCollisions(){
    const col = this.obstacles.some(o => {
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
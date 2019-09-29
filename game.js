class Game {
      constructor(ctx) {
        this.ctx = ctx;
        this.bg = new Background(ctx)
        this.player = new Player(ctx) 
        

        //this.bg = new Background(ctx)
        //this.car = new Car(ctx)  
        this.intervalId = null;
        //this.intervalIdTime = null;
        this.obstacles = [
         new Obstacle(ctx,700,300,300,30),
         //new Obstacle(ctx,1000,200,200,30),
         //new Obstacle(ctx,1250,150,200,30),
         
        ]
    
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
      //this.crashWithUpperParts()
      this.updateGameArea()
      console.log(this.player.y)
      //console.log(this.obstacles[0].y)
    }, 1000 / 60)
  }
  //Aquí van los métodos

  draw() {
    this.bg.draw()
    this.player.draw()
    this.obstacles.forEach(o => o.draw())
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
    this.obstacles.forEach(o => o.move())
  }

  
  updateGameArea(){
    if(this.player.crashWithUpperParts(this.obstacles)){
      for (let i = 0; i < this.obstacles.length; i++) { 
      this.player.y=this.obstacles[i].y-this.obstacles[i].h
      }
    }
    else{
      this.player.y = this.player.y0
    }
  }
  
  
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
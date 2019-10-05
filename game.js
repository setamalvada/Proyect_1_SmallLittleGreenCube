class Game {
      constructor(ctx) {
        this.ctx = ctx;
        this.bg = new Background(ctx, new Image(), "images/background_3.png", -2)
        this.bg2 = new Background(ctx, new Image(), "images/background_2.png", -4)
        this.bg3 = new Background(ctx, new Image(), "images/background_1.png", -6)
        this.player = new Player(ctx) 
        this.audio = new Audio("sounds/SLGC_trimmed2.mp3")
    

        //this.bg = new Background(ctx)
        //this.car = new Car(ctx)  
        this.intervalId = null
        this.spikes = [
          // new Spike (ctx,18500,230.03,50,50),
          // new Spike (ctx,19200,230.004,50,50),
          // new Spike (ctx,19400,230.004,50,50),
          
          
        ]

        this.movingObstacles = [
          //new MovingObstacle (ctx,400,200,50,50)
        ]

        //this.intervalIdTime = null;
        this.obstacles = [
          // new Obstacle(ctx,300,350,350,50),
         //  new Obstacle(ctx,1750,330,300,30),
        //  new Obstacle(ctx,2050,240,2000,30),
        //  new Obstacle(ctx,4250,300,600,30),
        //  new Obstacle(ctx,4850,340,500,30),
        //  new Obstacle(ctx,5550,282,300,30),
        //  new Obstacle(ctx,6000,250,300,30),
        //  new Obstacle(ctx,6500,220,300,30),
        //  new Obstacle(ctx,6900,310,500,30),
        //  new Obstacle(ctx,7600,281,300,30),
        //  new Obstacle(ctx,8100,251,300,30),
        //  new Obstacle(ctx,8500,210,300,30),
        //  new Obstacle(ctx,9000,280,300,30),
        //  new Obstacle(ctx,9500,220.03,150,30),
        //  new Obstacle(ctx,9650,220.1,150,30),
        //  new Obstacle(ctx,9900,320.1,500,30),
        //  new Obstacle(ctx,9900,320.2,310,30),
        //  new Obstacle(ctx,10600,280.01,500,30),
        //  new Obstacle(ctx,11100,210.01,300,30),
        //  new Obstacle(ctx,11600,150.01,500,30),
        //  new Obstacle(ctx,12300,90.01,450,30),
        //  new Obstacle(ctx,12900,150.04,400,30),
        //  new Obstacle(ctx,13400,100.02,600,30),
        //  new Obstacle(ctx,14000,150.02,800,30),
        //  new Obstacle(ctx,15000,125.02,400,30),
        //  new Obstacle(ctx,15600,202.02,500,30),
        //  new Obstacle(ctx,16100,280.021,300,30),
        //  new Obstacle(ctx,16500,280.03,600,30),
        //  new Obstacle(ctx,17200,350.001,300,30),
        //  new Obstacle(ctx,17500,260.003,600,30),
        //  new Obstacle(ctx,18200,280.03,400,30),
        //  new Obstacle(ctx,18750,280.004,900,30),

        
         
        ]
        
    
        this.tick = 0
        this.tick1 = 0 
        this.tick2 = 0 

  }

 

  run() {
   
   
    this.intervalId = setInterval(() => {
      this.audio.play()
      this._clear()
      this._addObstacle()
      this.draw()
      this._move()
      console.log(this.tick1++)
      this.player.runningOnObstacle(this.obstacles)
      //this.createRandomObstacle()
      this.player.checkIsFloor()
      this.clearObstacles()
      this._checkCollisions()
      this._checkCollisions1()
      //this._checkCollisions2()

       if (this.tick++ > 10000) {
        this.tick = 0
      }

    }, 1000 / 60)
  }
  //Aquí van los métodos

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }


  draw() {
    this.bg.draw()
    this.bg2.draw()
    this.bg3.draw()
    this.player.draw()
    this.obstacles.forEach(o => o.draw())
    this.spikes.forEach(o => o.draw())
    this.movingObstacles.forEach(o => o.draw())
/*
    this.tick++

    if (this.tick > Math.random() * 300 + 200) {
      this.tick = 0
      this._addObstacle()
    }*/
  }
  _move() {
    this.bg.move()
    this.bg2.move()
    this.bg3.move()
    this.player.move()
    this.obstacles.forEach(o => o.move())
    this.spikes.forEach(o => o.move())
    this.movingObstacles.forEach(o => o.move())

  }

  _addObstacle() {
  let y1 = 50
  let x = Math.floor(Math.random()*(this.ctx.canvas.width-this.ctx.canvas.width/2)+this.ctx.canvas.width/2)
  let y = Math.floor(Math.random()*(this.ctx.canvas.height-(this.ctx.canvas.height/1.5))+(this.ctx.canvas.height/1.5))
  let y2 = 0
 
  if (this.tick % 60) return 

    this.obstacles.push(
      new Obstacle(this.ctx,null,y))

      if (this.tick++ >100){
        this.spikes.push(
          new Spike(this.ctx,this.ctx.canvas.width/2,y)
        )  

      if (this.tick1++ >3000){

    this.movingObstacles.push(
      new MovingObstacle(this.ctx,x,y2)
    )
    
   
  }


  }
    // for(let i = 0; i <this.obstacles.length; i++){
    //   if(this.obstacles[i+1].y-this.obstacles[i+1].y > 50){
    //     this.obstacles[i+1].y = this.obstacles[i+1].y-40
    //   }
    // }
    
  
    
  }

  clearObstacles(){
    this.obstacles = this.obstacles.filter(o => {
      return o.x + o.w >= 0
    })
  
}
  _checkCollisions(){
    const col = this.spikes.some(o => {
      const result =o.collide(this.player)
      //console.log(result)
      return result
    })
  
    if (col) {
      //this._gameOver()
      //console.log("game over")
    }

    

  }

  _checkCollisions1(){
    const col = this.movingObstacles.some(o => {
      const result =o.collide1(this.player)
    //  console.log(result)
      return result
    })
  
    if (col) {
      //this._gameOver()
      //console.log("game over")
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
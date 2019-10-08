class Game {
      constructor(ctx) {
        this.ctx = ctx;
        this.bg = new Background(ctx, new Image(), "images/background_3.png", -2)
        this.bg2 = new Background(ctx, new Image(), "images/background_2.png", -4)
        this.bg3 = new Background(ctx, new Image(), "images/background_1.png", -6)
        this.player = new Player(ctx) 
        this.audio = new Audio("sounds/SLGC_trimmed2.mp3")
        this.audioCoin = new Audio("sounds/coin.wav")
        this.frameNo = 0;

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
    

        
         
        ]

        this.coins = []
        
    
        this.tick = 0
        this.tick1 = 0 
        this.tick2 = 0 
        this.tickCoins = 0
  }

 

  run() {
   
   
    this.intervalId = setInterval(() => {
      //this.audio.play()
      this._clear()
      this._addObstacle()
      this.draw()
      this._move()
      //console.log(this.tick1++)
      this.player.runningOnObstacle(this.obstacles)
      //this.createRandomObstacle()
      this.player.checkIsFloor()
      this.clearObstacles()
      this._checkCollisions()
      // this._checkCollisions1()
      // console.log(
      //   this.coins.forEach(o => o.visible))
      //this._checkCollisions2()

       if (this.tick++ > 11000) {
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
    // if(this.coins.hits > 0){
    this.coins.forEach(o => o.draw() )
    // }
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
    this.coins.forEach(o => o.move())

  }

  _addObstacle() {
    this.frameNo += 1
const gapMax=120
const gapMin = 60
let gap = Math.floor(Math.random()*(gapMax-(gapMin + 1))+(gapMin))
  let y1 = 50
  let x = Math.floor(Math.random()*(this.ctx.canvas.width-this.ctx.canvas.width/2)+this.ctx.canvas.width/2)
  let y = Math.floor(Math.random()*((this.ctx.canvas.height-20)-(this.ctx.canvas.height/1.5))+(this.ctx.canvas.height/1.5))
  let y2 = 0


  if (this.frameNo == 1 || this.everyInterval(70)) {
    this.obstacles.push(
      new Obstacle(this.ctx,null,y))
}

if (this.tickCoins++ === 30){
  this.tickCoins = 0
  this.coins.push(
    new Coin(this.ctx)
  )
  }
  
 
  if (this.tick % 65) return 

   

      if (this.tick++ >1550){
        this.spikes.push(
          new Spike(this.ctx,this.ctx.canvas.width*2.5/3,y)
        )  

      if (this.tick++ >3000){

    this.movingObstacles.push(
      new MovingObstacle(this.ctx)
    )

   
   
  }


  }


    // for(let i = 0; i <this.obstacles.length; i++){
    //   if(this.obstacles[i+1].y-this.obstacles[i+1].y > 50){
    //     this.obstacles[i+1].y = this.obstacles[i+1].y-40
    //   }
    // }
    
  
    
  }

  everyInterval(n) {
    if ((this.frameNo / n) % 1 == 0) {return true;}
    return false;
}

  clearObstacles(){
    this.obstacles = this.obstacles.filter(o => {
      return o.x + o.w >= 0
    })

    this.movingObstacles = this.movingObstacles.filter(o => {
      return o.x + o.w >= 0
    })

    this.coins = this.coins.filter(o => {
      return o.x + o.w >= 0
    })


    
  
}
  _checkCollisions(){




    const colSpikes = this.spikes.some(o => {
      const result =o.collide(this.player)
      //console.log(result)
      return result
    })
  
    if (colSpikes) {
      //this._gameOver()
      //console.log("game over")
      this.player.life--
      if(this.player.life <= 0){
         //this._gameOver()
      }
    }

    const colCoin = this.coins.some(o => {
      const result = o.collide(this.player)
      o.hits--

      //console.log(result)
      if(result){
        this.coins = this.coins.filter(obs => obs != o)
      }
    })
  
   

    if (colCoin) {

      let countCoins = 0
      countCoins++
      this.coins.filter(c => c.hits <= 0)
      // this.coins.forEach(o => {o.visible = true
      //   console.log(o.visible)})
      console.log(this.coins)
      this.audioCoin.play()
     
      
    }

    const col = this.movingObstacles.some(o => {
      const result =o.collide1(this.player)
    //  console.log(result)
      return result
    })
  
    if (col) {
      this.player.life--
      if(this.player.life <= 0){
         //this._gameOver()
      }
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
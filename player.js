const SPACE_KEY = 32;
const M_KEY = 77;

class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 200;
    this.y0 = 350;
    this.y = this.y0;
    this.w = 50;
    this.h = 50;
    this.vy = 0;
    this.g=0.8;
    this.vx = 0
    this.ay = 0.8;
    this.h0 = 0;
    this.y0 = 350;
    this.jumping = true;
    this.tick = 0
    this._setListeners();
    //this.crashWithUpperParts(obs)
    //this.obstacle= [new Obstacle(ctx,700,700,300,30)]
    this.img = new Image()
    this.img.src = "images/cube_ready.png"
    this.img.frames = 2
    this.img.frameIndex = 0
    this.life = 5

  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * this.img.width / 2,
      0,
      this.img.width / 2,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
      
    );

    this._animate()

    
    
  }

  move() {
    if (this.y < this.y0) {
      this.vy += this.ay;
      this.y += this.vy;
    } 
    // else if(this.tick++>50){
    // this.vy += this.ay;
    // }
    
    else {
      this.vy = 0;
      this.y = this.y0;
    }

        
  }

  _animate() {
    this.tick++

    if (this.tick > 8) {
      this.tick = 0

      if (!this._isJumping()) {
        this.img.frameIndex++
      }
    }

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0
    }
  }

  _setListeners() {
    document.onkeydown = e => {
      if (e.keyCode === SPACE_KEY) {
       if(this.tick<4300){
        this._jump();
      }
      else{
        this._jump2()
      }
      }
      
    };
    // document.onkeydown = e => {
    //   if (e.keyCode === 86) {
    //     this.small();
    //   }
    // };
  }

  // small(){
  //   this.h = 25
  //   this.w = 25
  //   this.vy =0
    
  // }

 

  _jump() {
    if (!this._isJumping()) {
      this.jumping = true;
      this.img.frameIndex = 2
      this.y -= 19;
      this.vy -= 15;
    }
  }

  _jump2() {
    
    this.ay = 0.6;
      this.y -= 10;
      this.vy -= 0.8;
    
  }

  _isJumping() {
    return this.y < this.y0;
  }


  runningOnObstacle = obstacles => {
    // console.log(obsta.some(o => {
    //   return this.crashWithTopObstacle(o)
    // }))
    for (let i in obstacles) {
      if (this.crashWithTopObstacle(obstacles[i]) === 4) {
        if (this.y + this.h < obstacles[i].y) {
          this.vy += 0.2 * this.ay;
          this.y0 = obstacles[i].y - this.h
        } 
        break;
      } else if (!this.crashWithTopObstacle(obstacles[i]) && this.y0 === obstacles[i].y - this.h) {
        //console.log('entra')
        this.y0 = 350
        break;
      }
    }
  };

  

  crashWithTopObstacle = obs => {
    let pos = 0;
      //loop para los obstaculos
      
        //detección por arriba
        if (this.x + this.w === obs.x && this.y + this.h < obs.y) {
          pos = 1;
        //detección por abajo  
        } else if (this.x + this.w === obs.x && this.y > obs.y + obs.h) {
          pos = 2;
        //detección cuando choca con la parte izda del obstaculo  
        } else if (
          this.x + this.w === obs.x &&
          obs.y <= this.y &&
          this.y <= obs.y + obs.h
        ) {
          pos = 3;
        //detección cuando se encuentra  a lo largo del obstaculo
        } else if (
          obs.x <= this.x + this.w &&
          this.x + this.w <= obs.x + obs.w + (this.w / 1.5)
        ){
          pos = 4;
      } else {
        return false
      }

    return pos;

    
  };



  checkIsFloor() {
    let floor = false;
    if (this.y >= this.ctx.canvas.height - this.h) {
      floor = true;
    }
      // console.log("floor " + floor);
    return floor;
  }
}

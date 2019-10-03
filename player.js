const SPACE_KEY = 32;

class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 100;
    this.y0 = 350;
    this.y = this.y0;
    this.w = 50;
    this.h = 50;
    this.vy = 3;
    this.ay = 0.8;
    this.h0 = 0;
    this.y0 = 350;
    this.jumping = true;
    
    this._setListeners();
    //this.crashWithUpperParts(obs)
    //this.obstacle= [new Obstacle(ctx,700,700,300,30)]
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.fillStyle = "#FF0000";
  }

  move() {
    if (this.y < this.y0) {
      this.vy += this.ay;
      this.y += this.vy;
    } else {
      this.vy = 0;
      this.y = this.y0;
    }
  }

  _setListeners() {
    document.onkeydown = e => {
      if (e.keyCode === SPACE_KEY) {
        this._jump();
      }
    };
  }

  _jump() {
    if (!this._isJumping()) {
      this.jumping = true;
      this.y -= 20;
      this.vy -= 15;
    }
  }

  _isJumping() {
    return this.y < this.y0;
  }

  runningOnObstacle = obsta => {
    // console.log(obsta.some(o => {
    //   return this.crashWithTopObstacle(o)
    // }))
    obsta.some(o => {

      if (this.crashWithTopObstacle(o) === 4 ){
        if(this.y + this.h < o.y){

        this.vy += 0.2*this.ay;
        this.y0 = o.y - this.h

        console.log(this.y0)
        }
      } else if(!this.crashWithTopObstacle(o) && this.y0 === o.y - this.h)  {
        //console.log('entra')
          this.y0 = 350
        } 
      })

  };

  crashWithTopObstacle = obs => {
    let pos = 0;
      //loop para los obstaculos
      
        //detección por arriba
        if (this.x + this.w === obs.x && this.y + this.h < obs.y) {
          pos = 1;
        //detección por abajo  
        } else if (this.x + this.w === obs.x && this[i].y > obs.y + obs.h) {
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
          this.x + this.w <= obs.x + obs.w 
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

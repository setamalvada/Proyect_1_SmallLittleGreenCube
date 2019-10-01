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
    if (this.crashWithUpperParts(obsta) === 1) {
      this.vy = 0;
      //const bottomPlayer = this.y +this.h
      this.y = obsta.y - this.h;
    }
  };

  crashWithTopObstacle = obs => {
    let crash = 0;

    if(this.x +this.h === obs.y){
      debugger
    }

    const colX = this.x + this.w > obs.x && this.x < obs.x + obs.w
    const colY = this.y + this.h > obs.y && this.y < obs.y + obs.h

    

    if (this.x + this.w === obs.x && this.y + this.h < obs.y) {
      crash = 1;
    } else if (this.x + this.w === obs.x && this.y > obs.y + obs.h) {
      crash = 2;
    } else if (
      this.x + this.w === obs.x &&
      obs.y <= this.y &&
      this.y <= obs.y + obs.h
    ) {
      crash = 3;
    } else if (
      obs.x < this.x + this.w &&
      this.x + this.w < obs.x + obs.w &&
      this.y + this.h === obs.y
    ) {
      crash = 4;
    }

    console.log("crash " + crash);

    return crash;
  };

  obstacleDetection = obst => {
    if (this.x > obst.x + obst.w) {
      this.vy = this.vy * -1;
    }
  };

  checkIsFloor() {
    let floor = false;
    if (this.y >= this.ctx.canvas.height - this.h) {
      floor = true;
    }
    console.log("floor " + floor);
    return floor;
  }
}

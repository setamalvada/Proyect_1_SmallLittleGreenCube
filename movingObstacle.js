class MovingObstacle {
    constructor(ctx,x,y,w,h) {
      this.ctx = ctx
      this.x = this.ctx.canvas.width
      this.y = Math.floor(Math.random()*((this.ctx.canvas.height-100)-(this.ctx.canvas.height/4))+(this.ctx.canvas.height/4))
      this.w = 75
      this.h = 50
      this.vx = -10
      // this.vy = 6
      this.img = new Image()
    this.img.src = "images/bird.png"
    this.img.frames = 3
    this.img.frameIndex = 0
    this.tick = 0
    }
  
    draw() {
      this.ctx.drawImage(
        this.img,
        this.img.frameIndex * (this.img.width / 3),
        0,
        this.img.width/3,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
        
      );
  
      this._animate()

    }
  
    move() {
      this.x += this.vx
      // this.y += this.vy
    }

    
    _animate() {
      this.tick++
  
      if (this.tick > 8) {
        this.tick = 0
  
        
          this.img.frameIndex++
        
      }
  
      if (this.img.frameIndex >= this.img.frames) {
        this.img.frameIndex = 0
      }
    }  
      

    collide1(el) {
        const colX = el.x + el.w > this.x && el.x < this.x + this.w
        const colY = el.y + el.h > this.y && el.y < this.y + this.h
    
        return colX && colY
      }

}    
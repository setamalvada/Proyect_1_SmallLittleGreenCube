class BarrelInFlames {
    constructor(ctx,x,y,w,h) {
      this.ctx = ctx
      this.x = this.ctx.canvas.width
      this.y = 325
      this.w = 75
      this.h = 75
      this.vx = -10
      // this.vy = 6
      this.img = new Image()
    this.img.src = "images/barrel.png"
    this.img.frames = 8
    this.img.frameIndex = 0
    this.tick = 0
    }
  
    draw() {
      this.ctx.drawImage(
        this.img,
        this.img.frameIndex * (this.img.width / 8),
        0,
        this.img.width/8,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h,
        this.hits = 1
      );
  
      this._animate()

    }
  
    move() {
      this.x += this.vx
      // this.y += this.vy
    }

    
    _animate() {
      this.tick++
  
      if (this.tick > 1) {
        this.tick = 0
  
        
          this.img.frameIndex = 0
        
      }
  
      if (this.img.frameIndex >= this.img.frames) {
        this.img.frameIndex = 0
      }
    }  
      

    collide(el) {
        const colX = el.x + el.w > this.x && el.x < this.x + this.w
        const colY = el.y + el.h > this.y && el.y < this.y + this.h
    
        return colX && colY
      }

}    
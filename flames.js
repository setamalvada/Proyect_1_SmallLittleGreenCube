class Flames {
    constructor(ctx,x,y,w,h) {
      this.ctx = ctx
      this.x = this.ctx.canvas.width
      this.y = 325 - 55
      this.w = 75
      this.h = 75
      this.vx = -10
      this.img = new Image()
    this.img.src = "images/fire.png"
    this.img.frames = 10
    this.img.frameIndex = 0
    this.tick = 0
    }
  
    draw() {
      this.ctx.drawImage(
        this.img,
        this.img.frameIndex * (this.img.width / 10),
        0,
        this.img.width/10,
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
    }

    
    _animate() {
      this.tick++
  
      if (this.tick > 1) {
        this.tick = 0
  
        
          this.img.frameIndex++
        
      }
  
      if (this.img.frameIndex >= this.img.frames) {
        this.img.frameIndex = 0
      }
    }  
      

   

}    
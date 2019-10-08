class Coin {
  constructor(ctx,x,y,w,h) {
    this.ctx = ctx
    this.y = Math.floor(Math.random()*((this.ctx.canvas.height-100)-(this.ctx.canvas.height/4))+(this.ctx.canvas.height/4))
    this.w = 50
    this.h = 50
    this.x = this.ctx.canvas.width
    this.vx = -9
    this.img = new Image()
    this.img.src = "images/coins2.png"
    this.img.frames = 11
    this.img.frameIndex = 0
    this.tick = 0
    this.hits = 1
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * (this.img.width / 11),
      0,
      this.img.width/11,
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

    if (this.tick > 1) {
      this.tick = 0

      
        this.img.frameIndex++
      
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
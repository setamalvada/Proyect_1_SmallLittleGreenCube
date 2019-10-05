class Obstacle {
    constructor(ctx,x,y,w,h) {
      this.ctx = ctx
      this.y = y
      this.w = w
      this.h = h
      this.x = x
      this.vx = -9
    }
  
    draw() {
      this.ctx.fillRect(
        this.x,
        this.y,
        this.w,
        this.h
      )
    }
  
    move() {
      this.x += this.vx
    }

    

}    
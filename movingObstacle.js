class MovingObstacle {
    constructor(ctx,x,y,w,h) {
      this.ctx = ctx
      this.y = Math.floor(Math.random()*(this.ctx.canvas.height-(this.ctx.canvas.height/4))+(this.ctx.canvas.height/4))
      this.w = 25
      this.h = 25
      this.x = x
      this.vx = -12
      // this.vy = 6
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
      // this.y += this.vy
    }

    
      
      

    collide1(el) {
        const colX = el.x + el.w > this.x && el.x < this.x + this.w
        const colY = el.y + el.h > this.y && el.y < this.y + this.h
    
        return colX && colY
      }

}    
class MovingObstacle {
    constructor(ctx,x,y,w,h) {
      this.ctx = ctx
      this.y = y
      this.w = w
      this.h = h
      this.x = x
      this.vx = -9
      this.vy = 7
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
      this.y += this.vy
    }

    
      
      

    collide1(el) {
        const colX = el.x + el.w > this.x && el.x < this.x + this.w
        const colY = el.y + el.h > this.y && el.y < this.y + this.h
    
        return colX && colY
      }

}    
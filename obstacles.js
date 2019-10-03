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

    collide(el) {
        const colX1 = el.x + el.w > this.x 
        const colX2 = el.x < this.x + this.w
        const colY1 = el.y + el.h > this.y 
        const colY2 =  el.y < this.y + this.h
    
        return colX1 && colY1 && colX2 && colY2
      }

}    
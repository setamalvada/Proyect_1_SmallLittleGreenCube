class Obstacle {
    constructor(ctx,x,y,w,h,gap) {
      this.ctx = ctx
      this.x = this.ctx.canvas.width
      this.y = y
      this.w = Math.floor(Math.random()*(350-300)+300);
      this.h = Math.floor(Math.random()*(60-10+1)+30);
         
      this.gap = Math.floor(Math.random()*(250-10+1)+10)
      this.vx = -7
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
    const collideX = el.x + el.w > this.x && el.x < this.x + this.w
    const collideY = el.y + el.h > this.y && el.y < this.y + this.h

    return collideX && collideY

    
    
  }

  isVisible() {
    return (
      this.x + this.w > 0
    )
    
  }   

    

}    
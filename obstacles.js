class Obstacle {
    constructor(ctx,x,y,w,h,gap) {
      this.ctx = ctx
      this.x = this.ctx.canvas.width
      this.y = y
      this.w = Math.floor(Math.random()*(500-300)+300);
      this.h = Math.floor(Math.random()*(60-10)+30);
         
      this.gap = Math.floor(Math.random()*(250-10+1)+10)
      this.vx = -7
      // Create gradient
      this.grd = this.ctx.createLinearGradient(0,0,300,0);
      this.grd.addColorStop(0,"#3f9f4b");
      this.grd.addColorStop(1,"#A40000");
      this.radius = 5;

// Fill with gradient
//ctx.fillStyle = grd;
//ctx.fillRect(10,10,150,80);
    }

    

  
    draw() {
      this.ctx.beginPath();
  this.ctx.moveTo(this.x, this.y + this.h - this.radius);
  this.ctx.arcTo(this.x, this.y, this.x + this.w - this.radius, this.y, this.radius);
  this.ctx.arcTo(this.x + this.w, this.y, this.x + this.w, this.y + this.h - this.radius, this.radius);
  this.ctx.arcTo(this.x + this.w, this.y + this.h, this.x + this.radius, this.y + this.h, this.radius);
  this.ctx.arcTo(this.x, this.y + this.h, this.x, this.y + this.h - this.radius, this.radius);
  this.ctx.fill();
  this.ctx.closePath();
      this.ctx.fillStyle = this.grd
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
class Spike {
  constructor(ctx,x,y,w,h) {
    this.ctx = ctx
    this.y = y 
    this.h = h
    this.w = w
    this.x = x
    this.vx = -9
  }        
  
  draw(){
    
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y + this.h);
    this.ctx.lineTo(this.x + this.w, this.y +this.h);
    this.ctx.lineTo(this.x + this.w / 2, this.y);
    this.ctx.fill();
    this.ctx.closePath();
  
    
  
    }

    move() {
      this.x += this.vx
    }
  
    collide(el) {
      const colX = el.x + el.w > this.x && el.x < this.x + this.w
      const colY = el.y + el.h > this.y && el.y < this.y + this.h
  
      return colX && colY
    }
    
  }
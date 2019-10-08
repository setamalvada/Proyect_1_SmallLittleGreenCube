class Spike {
  constructor(ctx,x,y,w,h) {
    this.ctx = ctx
    this.y = Math.floor(Math.random()*(this.ctx.canvas.height-(this.ctx.canvas.height/4))+(this.ctx.canvas.height/4)) 
    this.h = 25
    this.w = 25
    this.x = x
    this.ay = 0.8
    this.vx = -15
    this.vy = -15
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
      this.vy += this.ay;
      this.y += this.vy;
    }
  
    collide(el) {
      const colX = el.x + el.w > this.x && el.x < this.x + this.w
      const colY = el.y + el.h > this.y && el.y < this.y + this.h
  
      return colX && colY
    }
    
  }
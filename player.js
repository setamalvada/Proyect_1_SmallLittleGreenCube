const SPACE_KEY = 32

class Player {
    constructor(ctx){
       
        this.ctx=ctx
        this.x=100
        this.y0=350
        this.y=this.y0
        this.w=50
        this.h=50
        this.vy= 3
        this.ay=0.8        
        this.h0=0
        this.y0=350

        this._setListeners()



    }

    draw() {
      this.ctx.fillRect(
        this.x,
        this.y,
        this.w,
        this.h
      );
    }

    move(){
       
        if (this.y < this.y0) {
          this.vy += this.ay;
          this.y += this.vy;
        } else {
          this.vy = 0;
          this.y = this.y0;
         
          
        }
    
       
      
    }

    _setListeners() {
        document.onkeydown = (e) => {
          if (e.keyCode === SPACE_KEY) {
            this._jump()
          }
        }
    }

    _jump() {
        if (!this._isJumping()) {
         
       
          this.y -= 20;
          this.vy -= 15;
        }
      }

      _isJumping() {
        return this.y < this.y0
      }
  
}
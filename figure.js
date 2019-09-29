class Figure {
  constructor(ctx, x, y, w, h,vx,vy,ax,ay) {
    this.ctx = ctx;
    this.x = x;
    this.y = y
    this.w = w
    this.h = h
    this.vx = vx
    this.vy = vy
    this.ax = ax
    this.ay = ay
  }

  draw() {
    throw new Error("Not implemented!")
  }
}                                                                                                                                                                                                                                                                                                                                                                                                                  
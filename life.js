class Life {
	constructor(ctx, x, y, w, h) {
		this.ctx = ctx
		this.x = this.ctx.canvas.width
		this.y = Math.floor(Math.random() * ((this.ctx.canvas.height - 100) - (this.ctx.canvas.height / 4)) + (this.ctx.canvas.height / 4))
		this.w = 40
		this.h = 40
		this.vx = -10
		this.img = new Image()
		this.img.src = "images/lifefull.png"
		this.img.frames = 1
		this.img.frameIndex = 0
		this.tick = 0
	}

	draw() {
		this.ctx.drawImage(
			this.img,
			this.img.frameIndex * (this.img.width / 1),
			0,
			this.img.width / 1,
			this.img.height,
			this.x,
			this.y,
			this.w,
			this.h,
			this.hits = 1
		);


	}

	move() {
		this.x += this.vx
	}

	collide1(el) {
		const colX = el.x + el.w > this.x && el.x < this.x + this.w
		const colY = el.y + el.h > this.y && el.y < this.y + this.h

		return colX && colY
	}

}
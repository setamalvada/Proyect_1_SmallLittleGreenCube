class Spike {
	constructor(ctx, x, y, w, h) {
		this.ctx = ctx
		this.y = Math.floor(Math.random() * (this.ctx.canvas.height - (this.ctx.canvas.height / 4)) + (this.ctx.canvas.height / 4))
		this.h = 50
		this.w = 50
		this.x = x
		this.ay = 0.8
		this.vx = -13
		this.vy = -13
		this.img = new Image()
		this.img.src = "images/barrel.png"
		this.img.frames = 8
		this.img.frameIndex = 0
		this.tick = 0
	}

	draw() {

		this.ctx.drawImage(
			this.img,
			this.img.frameIndex * (this.img.width / 8),
			0,
			this.img.width / 8,
			this.img.height,
			this.x,
			this.y,
			this.w,
			this.h

		);

		this._animate()


	}

	move() {
		this.x += this.vx
		this.vy += this.ay;
		this.y += this.vy;
	}

	_animate() {
		this.tick++

			if (this.tick > 4) {
				this.tick = 0


				this.img.frameIndex++

			}

		if (this.img.frameIndex >= this.img.frames) {
			this.img.frameIndex = 0
		}
	}

	collide(el) {
		const colX = el.x + el.w > this.x && el.x < this.x + this.w
		const colY = el.y + el.h > this.y && el.y < this.y + this.h

		return colX && colY
	}

}
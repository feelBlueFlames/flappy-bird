class Sky {
  speed = 2
  constructor(info) {
    this.x = info.x
    this.canvas = info.canvas
    this.ctx = info.ctx
    this.image = info.image
    this.speed = info.speed
    this.width = this.image.width
  }
  draw() {
    this.x -= this.speed
    if (this.x <= -this.width) this.x = this.width
    this.ctx.drawImage(this.image, this.x, 0)
  }
}

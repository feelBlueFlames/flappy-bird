class Land {
  constructor(info) {
    this.x = info.x
    this.y = info.y
    this.speed = info.speed
    this.canvas = info.canvas
    this.ctx = info.ctx
    this.image = info.image
    this.width = info.image.width
    this.speed = info.speed
  }
  draw() {
    this.x -= this.speed
    // this.y = this.canvas.height - this.image.height
    if (this.x <= -this.width) this.x = this.image.width * 3
    this.ctx.drawImage(this.image, this.x, this.y)
  }
}

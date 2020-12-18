// 管道
class Pipe {
  // 上下管道空隙高度
  spaceHeight = 120
  constructor(info) {
    this.x = info.x
    this.speed = info.speed
    this.canvas = info.canvas
    this.ctx = info.ctx
    this.topImg = info.topImg
    this.bottomImg = info.bottomImg
    this.offsetY = info.offsetY
    this.gap = info.gap
    this.topHeight = this.spaceHeight + 150 * Math.random()
    this.bottomHeight =
      this.canvas.height - this.offsetY - this.topHeight - this.spaceHeight
  }
  draw() {
    this.x -= this.speed
    if (this.x <= -this.topImg.width) {
      this.topHeight = this.spaceHeight + 150 * Math.random()
      this.bottomHeight =
        this.canvas.height - this.offsetY - this.topHeight - this.spaceHeight
      this.x = this.topImg.width * 5 + this.gap * 6
    }
    this.ctx.rect(this.x, 0, this.topImg.width, this.topHeight)
    this.ctx.rect(
      this.x,
      this.topHeight + this.spaceHeight,
      this.bottomImg.width,
      this.bottomHeight
    )
    this.ctx.drawImage(
      this.topImg,
      this.x,
      0,
      this.topImg.width,
      this.topHeight
    )
    this.ctx.drawImage(
      this.bottomImg,
      this.x,
      this.topHeight + this.spaceHeight,
      this.bottomImg.width,
      this.bottomHeight
    )
  }
}

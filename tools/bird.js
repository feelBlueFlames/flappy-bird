// 小鸟
class Bidrs {
  xIndex = 0
  index = 0
  v0 = 0
  // 下落加速度
  a = 0.0005
  maxSpeed = 0.5
  maxRadian = (45 / 180) * Math.PI
  constructor(info) {
    this.x = info.x
    this.y = info.y
    this.w = info.width
    this.h = info.height
    this.image = info.image
    this.canvas = info.canvas
    this.ctx = info.ctx
  }
  draw() {
    this.ctx.save()
    this.index++
    this.xIndex = this.index % 3
    // 刷新间隔
    const t = 16.7
    // 下降距离
    const s = this.v0 * t + (this.a * Math.pow(t, 2)) / 2
    this.y += s
    // 计算最新速度
    this.v0 += this.a * t
    this.ctx.translate(this.x, this.y)
    this.ctx.rotate((this.v0 / this.maxSpeed) * this.maxRadian)
    this.ctx.drawImage(
      this.image,
      this.xIndex * this.w,
      0,
      this.w,
      this.h,
      -this.w / 2,
      -this.h / 2,
      this.w,
      this.h
    )
    this.ctx.restore()
  }
  rise() {
    this.v0 = -0.2
  }
}

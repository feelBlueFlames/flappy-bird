/**
 * Created by Administrator on 2017/10/25.
 */
function Pipe(info){
    this.x = info.x;
    this.canvas = info.canvas;
    this.context = info.context;
    this.topImg = info.topImg;
    this.bottomImg = info.bottomImg;
    this.offsetY = info.offsetY;
    this.gap = info.gap;
    this.topHeight = 0;
    this.bottomHeight = 0;
    this.speed = 2;
    this.topHeight = 100 + 150 * Math.random();
    this.bottomHeight = this.canvas.height - this.offsetY - this.topHeight - 100;
}
Pipe.prototype.draw = function(){
    this.x -= this.speed;
    if(this.x <= -this.topImg.width) {
        this.topHeight = 100 + 150 * Math.random();
        this.bottomHeight = this.canvas.height - this.offsetY - this.topHeight - 100;
        this.x = this.topImg.width * 5 + this.gap * 6;
    }
    this.context.rect(this.x,0,this.topImg.width,this.topHeight);
    this.context.rect(this.x,this.topHeight + 100,this.bottomImg.width,this.bottomHeight);
    this.context.drawImage(this.topImg,this.x,0,this.topImg.width,this.topHeight);
    this.context.drawImage(this.bottomImg,this.x,this.topHeight + 100,this.bottomImg.width,this.bottomHeight);
}

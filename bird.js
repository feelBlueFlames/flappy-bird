/**
 * Created by Administrator on 2017/10/25.
 */
function Bidrs(info){
    this.x = info.x;
    this.y = info.y;
    this.w = info.width;
    this.h = info.height;
    this.image = info.image;
    this.canvas = info.canvas;
    this.context = info.context;
    this.xIndex = 0;
    this.index = 0;
    this.v0 = 0;
    this.a = 0.0005;
    this.startTime = new Date();
    this.maxSpeed = 0.5;
    this.maxRadian = 45/180 * Math.PI;
}
Bidrs.prototype.draw = function(){
    this.context.save();
    this.index ++;
    this.xIndex = this.index % 3;
    var nowTime = new Date();
    var t = nowTime - this.startTime;
    var s = this.v0 * t + this.a * t * t /2;
    this.y += s;
    this.v0 = this.v0 + this.a * t;
    console.log(this.v0);
    this.startTime = nowTime;
    this.context.translate(this.x,this.y);
    this.context.rotate(this.v0/this.maxSpeed * this.maxRadian);
    //this.context.drawImage(this.image,this.xIndex * this.w,0,this.w,this.h,-this.w/2, -this.h/2,this.w,this.h);
    this.context.drawImage(this.image, this.xIndex * this.w, 0, this.w, this.h, -this.w/2, -this.h/2, this.w, this.h);

    this.context.restore();
}
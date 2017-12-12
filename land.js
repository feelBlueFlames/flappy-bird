/**
 * Created by Administrator on 2017/10/25.
 */
function Land(info){
    this.x = info.x;
    this.y = info.y;
    this.canvas = info.canvas;
    this.context = info.context;
    this.image = info.image;
    this.speed = 2;
}
Land.prototype.draw = function(){
    this.x -= this.speed;
    this.y = this.canvas.height - this.image.height;
    if(this.x <= -this.image.width){
        this.x = this.image.width * 3;
    }
    this.context.drawImage(this.image,this.x,this.y);
}
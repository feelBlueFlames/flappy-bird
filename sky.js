/**
 * Created by Administrator on 2017/10/25.
 */
function Sky(info){
    this.x = info.x;
    this.canvas = info.canvas;
    this.context = info.context;
    this.image = info.image;
    this.speed = 2;
}

Sky.prototype.draw = function(){
    this.x -= this.speed;
    if(this.x <= -this.image.width) {
        this.x = this.image.width;
    }
    this.context.drawImage(this.image,this.x,0);
}
function Block(w, h, color, gw){
    PIXI.Container.call(this);

    this.w = w;
    this.h = h;
    this.color = color;

    this.gw = gw;

    this.createChildren();
}

Block.prototype = Object.create(PIXI.Container.prototype);

Block.prototype.createChildren = function() {
    let w = LayoutManager.gameWidth,
    h = LayoutManager.gameHeight;

    this.block = this.addChild(Utils.drawRect(-this.w/2, -this.h/2, this.w, this.h, this.color));
    this.line = this.addChild(Utils.drawLine({x: -this.gw/2, y: 0}, {x: this.gw/2, y: 0}, 3, 0xff0099));
};

Block.prototype.onResize = function(){
    let w = LayoutManager.gameWidth,
        h = LayoutManager.gameHeight;
    // console.dir(this.line);
    this.line.width = w;
};
function Stage(){
    StartWindow.call(this);

    console.dir(window)

    this.createChildren();

}

Stage.prototype = Object.create(StartWindow.prototype);

Stage.prototype.createChildren = function() {

    this.field = this.addChild(new Block(250, 250, 0xffffff, LayoutManager.gameWidth));

    this.cta =  this.addChild(new Block(100, 70, 0xff0000, LayoutManager.gameWidth));

};

Stage.prototype.onResize = function(){
    let w = LayoutManager.gameWidth,
        h = LayoutManager.gameHeight;

    this.field.onResize();
    this.cta.onResize();

    if(w > h) {
        this.cta.position.set(0, h/4 + this.field.height/4);
    } else {
        this.cta.position.set(0, h/4 + this.field.height/4);
    }
    console.log('w');

};
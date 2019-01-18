function Test(){
    Sprite.call(this);

    this.interactive = true;


    this.hitArea = new PIXI.Rectangle(-100, -100, 200, 200);

    this.on('pointerdown', this.clicked1, this);

    this.createChildren();
}

Test.prototype = Object.create(Sprite.prototype);

Test.prototype.createChildren = function() {
    this.field = this.addChild(Factory.createRect(100, 100));

};

Test.prototype.clicked1 = function(){

    this.emit('test', this);

    // Screen.container.addEventListener("res", LayoutManager.fitLayout);
};
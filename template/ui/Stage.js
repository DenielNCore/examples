function Stage(){
    StartWindow.call(this);



    this.createChildren();

}

Stage.prototype = Object.create(StartWindow.prototype);

Stage.prototype.createChildren = function() {

};

Stage.prototype.onResize = function(){

    let w = LayoutManager.gameWidth,
        h = LayoutManager.gameHeight;


    console.log(w, h);

};

Stage.prototype.tick = function(){


};
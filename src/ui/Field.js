function Field(){
    // console.log(this);
    StartWindow.call(this);



    this.createChildren();

    // this.countCanvasSize = this.countCanvasSize.bind(this);
}

Field.prototype = Object.create(StartWindow.prototype);

Field.prototype.createChildren = function() {

    // this.field = Factory.createRect(this, 100, 100);
    // this.field.position.set(50, 0);

    // debugger;

    this.test = this.addChild(new Test());

    this.test.on('test', this.test1, this);

    // this.changeCanvasSize();
    this.setEvents();
    Screen.container.onresize = LayoutManager.fitLayout;
    console.dir(Screen.container);
    // setInterval(LayoutManager.fitLayout, 100);
};


Field.prototype.setEvents = function(){
    let button = document.body.getElementsByClassName('update')[0];

    button.addEventListener("click", this.changeCanvasSize.bind(this));

};

Field.prototype.countCanvasSize = function(){
    let w, h;

    w = +document.body.getElementsByClassName('width')[0].value;
    h = +document.body.getElementsByClassName('height')[0].value;

   return {w: w, h: h};

};


Field.prototype.changeCanvasSize = function(){



    let size = this.countCanvasSize();

    // console.log(size);
    // console.log(w, h, 'www');
    LayoutManager.fitLayout(size.w, size.h);

    // this.addEventListener("resize", LayoutManager.fitLayout);
    // setInterval(LayoutManager.fitLayout, 100);

    // Screen.container.style.width = w + "px";
    // Screen.container.style.height = h + "px";
    this.onResize();
};

Field.prototype.onResize = function(){


};
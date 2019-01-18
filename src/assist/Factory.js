let Factory = {};

Factory.createRect = function (w, h) {
    let r = new PIXI.Graphics();
    r.beginFill(0x000000);
    r.lineStyle(4, 0xff0000, 1);
    r.drawRect(-w/2, -h/2, w, h);
    r.endFill();

    return r;
};
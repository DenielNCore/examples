function Sprite(name) {
    let tex = name ? PIXI.Texture.fromFrame(name) : PIXI.Texture.EMPTY;
    PIXI.extras.AnimatedSprite.call(this, [tex]);

    this.animationSpeed = 24/60;
    this.anchor.set(0.5);
    this.stop();
}

Sprite.prototype = Object.create(PIXI.extras.AnimatedSprite.prototype);

Sprite.prototype.on = function(event, fn, context) {
    if(Sprite.pointerEvents.indexOf(event) >= 0) this.interactive = true;
    PIXI.extras.AnimatedSprite.prototype.on.call(this, event, fn, context);
};

Sprite.prototype.once = function(event, fn, context) {
    if(Sprite.pointerEvents.indexOf(event) >= 0) this.interactive = true;
    PIXI.extras.AnimatedSprite.prototype.once.call(this, event, fn, context);
};

Sprite.prototype.removeListener = function(event, fn, context, once) {
    PIXI.extras.AnimatedSprite.prototype.removeListener.call(this, event, fn, context, once);

    if(Sprite.pointerEvents.indexOf(event) >= 0) {
        let ok = false;
        for(let i=0; i<Sprite.pointerEvents.length; i++) {
            let t = Sprite.pointerEvents[i];
            if(this.listeners(t).length > 0) {
                ok = true;
                break;
            }
        }
        this.interactive = ok;
    }
};

Sprite.prototype.off = function(event, fn, context, once) {
    this.removeListener(event, fn, context, once);
};

Sprite.prototype.emit = function(event) {
    let a1 = arguments[1];

    if (Sprite.pointerEvents.indexOf(event) >= 0) {
        if (!a1.data) a1.data = {};
        a1.data.local = a1.data.getLocalPosition(this);
    }

    if(arguments.length < 3) PIXI.extras.AnimatedSprite.prototype.emit.call(this, event, a1);
    if(arguments.length == 3) PIXI.extras.AnimatedSprite.prototype.emit.call(this, event, a1, arguments[2]);
    if(arguments.length == 4) PIXI.extras.AnimatedSprite.prototype.emit.call(this, event, a1, arguments[2], arguments[3]);
    if(arguments.length >= 5) PIXI.extras.AnimatedSprite.prototype.emit.call(this, event, a1, arguments[2], arguments[3], arguments[4]);
};

Sprite.pointerEvents = [
    "mousedown",
    "mouseup",
    "mousemove",
    "click",
    "touchstart",
    "touchend",
    "touchmove",
    "tap",
    "mouseover",
    "mouseout",
    "mouseupoutside",
    "rightclick",
    "rightdown",
    "rightup",
    "rightupoutside",
    "touchendoutside",
    "pointerdown",
    "pointerup",
    "pointermove",
    "pointerclick",
    "pointerupoutside"
];
let Screen = {};

Screen.container = null;

Screen.size = {w: 480, h: 480};

Screen.app = null;

Screen.currentWindow = null;

Screen.init = function (container) {
    Screen.container = container || document.body.querySelector('#canvas');

    let app = new PIXI.Application(Screen.size.w, Screen.size.h, {transparent: false, backgroundColor : 0x000000 });
    Screen.container.appendChild(app.view);

    app.ticker.add(Screen.tick);
    Screen.app = app;

    Screen.start();

    LayoutManager.fitLayout(Screen.size.w, Screen.size.h);

};

Screen.showWindow = function(w) {
    if(Screen.currentWindow) {
        if(Screen.currentWindow.onHide) {
            let ow = Screen.currentWindow;
            ow.onHide(function () {
                if (ow.onRemove) ow.onRemove();
                Screen.app.stage.removeChild(ow);
            });
        }
        else {
            if (Screen.currentWindow.onRemove) Screen.currentWindow.onRemove();
            Screen.app.stage.removeChild(Screen.currentWindow);
        }
    }
    Screen.app.stage.addChildAt(w, 0);
    Screen.currentWindow = w;
    if(Screen.currentWindow.onShow) Screen.currentWindow.onShow();
    // if(Screen.currentWindow.onResize) Screen.currentWindow.onResize();
    w.position.set(Screen.app.renderer.width/2, Screen.app.renderer.height/2);
};


Screen.onResize = function() {
    if(Screen.currentWindow) {
        Screen.currentWindow.position.set(Screen.app.renderer.width/2, Screen.app.renderer.height/2);
        if(Screen.currentWindow.onResize) Screen.currentWindow.onResize();
    }
};

Screen.start = function() {
    Screen.showWindow(new Stage());
};

Screen.tick = function() {
    let delta = PIXI.ticker.shared.elapsedMS;

    // Screen.updateFPS(delta);

    // if(window.TWEEN) TWEEN.update();
    // if(window.Tween) Tween.update(delta);
    // if(window.Timer) Timer.update(delta);
    // if(window.SpineSprite) SpineSprite.update(delta);
    // if(window.ParticlesSprite) ParticlesSprite.update(delta);

    if(Screen.currentWindow && Screen.currentWindow.tick) {
        Screen.currentWindow.tick(delta);
    }
};

// Screen.init();
// Screen.start();
// Screen.onResize();

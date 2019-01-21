let LayoutManager = {};

LayoutManager.width = 0;
LayoutManager.height = 0;
LayoutManager.scale = 1;
LayoutManager.gameWidth = 0;
LayoutManager.gameHeight = 0;
LayoutManager.orientation = "";
LayoutManager.paddingSize = 10;

LayoutManager.LANDSCAPE = 1;
LayoutManager.PORTRAIT = 2;

LayoutManager.eventEmitter = new PIXI.utils.EventEmitter();

LayoutManager.hideAddressBar = function() {
    window.scrollTo(0, 1);
};

LayoutManager.fitLayout = function(w, h) {

    if (typeof w != "number" || typeof h != "number") {
        w = Screen.container.clientWidth - LayoutManager.paddingSize * 2;
        h = Screen.container.clientHeight - LayoutManager.paddingSize * 2;
    }

    if(LayoutManager.width === w && LayoutManager.height === h) return;

    LayoutManager.width = w;
    LayoutManager.height = h;
    LayoutManager.orientation = w > h ? LayoutManager.LANDSCAPE : LayoutManager.PORTRAIT;

    let gw, gh;
    if(LayoutManager.orientation === LayoutManager.LANDSCAPE) {
        gh = Screen.size.w;
        gw = Math.floor(gh * (w / h));

        if(gw < Screen.size.h) {
            gw = Screen.size.h;
            gh = Math.floor(Screen.size.h * (h / w));
        }
    }
    else {
        gh = Screen.size.h;
        gw = Math.floor(gh * (w / h));

        if(gw < Screen.size.w) {
            gw = Screen.size.w;
            gh = Math.floor(Screen.size.w * (h / w));
        }
    }

    Screen.app.renderer.resize(gw, gh);

    Screen.app.view.style.width = w + "px";
    Screen.app.view.style.height = h + "px";

    LayoutManager.gameWidth = gw;
    LayoutManager.gameHeight = gh;
    LayoutManager.gameWidth = w;
    LayoutManager.gameHeight = h;

    LayoutManager.scale = Math.min(w/gw, h/gh);

    Screen.onResize();

    LayoutManager.eventEmitter.emit("resized", {width: w, height: h});

    setTimeout(LayoutManager.hideAddressBar, 100);
};
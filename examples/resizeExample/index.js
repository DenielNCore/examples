window.addEventListener("load", domReadyHandler);

function domReadyHandler() {
    window.removeEventListener("load", domReadyHandler);
    runGame();
}

function runGame() {
    Screen.init();
    setInterval(LayoutManager.fitLayout, 100);
}
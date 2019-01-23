(function (window, document) {
"use strict";
    var manager = new Manager();

	var onWindowLoad = function() {
		//Elements which need to be cached
        var elem = ["#view-width", "#range-width", "#view-height", "#range-height"];
        //This is an entry point of my mechanic and logic for front-end scripts
        manager.init(elem);
        domReadyHandler();
    };

    //This is an entry point of Denis PIXI mechanic and logic
    function domReadyHandler() {
        runGame();
    }

    function runGame() {
        Screen.init();
    }

    //TODO I will remove this propery "window.manager", now it is just for testing
    //window.manager = Manager;
    window.addEventListener("load", onWindowLoad);


})(window, document);




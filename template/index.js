(function (window, document) {

	var Manager = {};
	
	Manager.cacheDom = function (elementsToCache) {
		if(!this.cache) this.cache = {};

		for (var i = elementsToCache.length - 1; i >= 0; i--) {
			var name = elementsToCache[i].replace(/\#|./, "");
			this.cache[name] = document.querySelector(elementsToCache[i]);
			
		}
	}

	//This is an entry point of my mechanic and ligic for front-end scripts
	Manager.init = function () {
		var elem = ["#settings-width", "#settings-height"];
		Manager.cacheDom(elem);
	}


	//TODO I will remove this propery "window.manager", now it is just for testing
	window.manager = Manager;
	window.addEventListener("load", loadGame);


	var loadGame = function() {
        Manager.init();
        domReadyHandler();
    };

    //This is an entry point of Denis PIXI mechanic and logic
    function domReadyHandler() {
        runGame();
    }

    function runGame() {
        Screen.init();
        setInterval(LayoutManager.fitLayout, 100);
    }


})(window, document);




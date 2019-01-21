

(function (window, document) {



	var Manager = {};
	
	Manager.cacheDom = function (elementsToCache) {
		if(!this.cache) this.cache = {};

		for (var i = elementsToCache.length - 1; i >= 0; i--) {
			var name = elementsToCache[i].replace(/\#|./, "");
			this.cache[name] = document.querySelector(elementsToCache[i]);
			
		}
	}

	Manager.init = function () {
		var elem = ["#settings-width", "#settings-height"];
		Manager.cacheDom(elem);
	}



	window.manager = Manager;
	window.addEventListener("load", loadGame);


	var loadGame = function() {
        Manager.init();
        domReadyHandler();
    };

    // window.addEventListener("load", domReadyHandler);



    function domReadyHandler() {
        // window.removeEventListener("load", domReadyHandler);
        runGame();
    }

    function runGame() {
        Screen.init();
        setInterval(LayoutManager.fitLayout, 100);
    }


})(window, document);




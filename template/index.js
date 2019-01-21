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
	window.addEventListener("load", Manager.init);
})(window, document)
"use strict";
function Manager() {

    this.cache = null;
}


Manager.prototype.cacheDom = function (elementsToCache) {
    if(!this.cache) this.cache = {};

    for (var i = elementsToCache.length - 1; i >= 0; i--) {
        var name = elementsToCache[i].replace(/\#|./, "");
        this.cache[name] = document.querySelector(elementsToCache[i]);

    }
};

Manager.prototype.init = function (elem) {
    this.cacheDom(elem);
};
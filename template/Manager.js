"use strict";
function Manager() {

    this.cache = null;
    this.size = {w: 480, h: 480};
    this.newSizes = {w:0, h:0};
}


Manager.prototype.cacheDom = function (elementsToCache) {
    if(!this.cache) this.cache = {};

    for (var i = elementsToCache.length - 1; i >= 0; i--) {
        var name = elementsToCache[i].replace(/\#|./, "");
        this.cache[name] = document.querySelector(elementsToCache[i]);
    }
};

Manager.prototype.subscribe = function(){
    //We can add more and more rules
    for(var el in this.cache){
        if(this.cache[el].type === "range"){
            this.cache[el].onchange = this.onRangeChange.bind(this); continue;
        }
    }
};

Manager.prototype.onRangeChange = function(event){
    var id = event.target.id;
    var val = Number(event.target.value);

    this.changeViewInput(id, val);
    this.setNewSizes(id, val);
    this.setCanvasSizes();
};

Manager.prototype.changeViewInput = function(id, newVal){
    var name = id.replace("range", "view");
    this.cache[name].value = newVal;
};

Manager.prototype.setNewSizes = function(id, val){
   if(id.search("width") !== -1){
       this.newSizes.w = val;
   }
   else {
       this.newSizes.h = val;
   }
};

Manager.prototype.setCanvasSizes = function(){
    //TODO I need to make sure that LayoutManager is exists!!!
    LayoutManager.fitLayout(this.newSizes.w, this.newSizes.h);
};

Manager.prototype.setInitialSizes = function(){
    //TODO I need to make sure that Screen is exists!!!
    this.newSizes.w = Screen.size.w;
    this.newSizes.h = Screen.size.h;
};

Manager.prototype.init = function (elem) {
    this.setInitialSizes();
    this.cacheDom(elem);
    this.subscribe();
};

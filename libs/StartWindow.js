function StartWindow() {

    Sprite.call(this);
}

StartWindow.prototype = Object.create(Sprite.prototype);

//метод, вызываемый при добавление окна
StartWindow.prototype.onShow = function() {
};

//метод, вызываемый в начале удаления окна
StartWindow.prototype.onHide = function(endCallback) {
    if(endCallback) endCallback();
};

//метод, вызываемый при удалении окна
StartWindow.prototype.onRemove = function() {
};

//метод, вызываемый при изменении размера браузера
StartWindow.prototype.onResize = function() {
};

//тик окна
StartWindow.prototype.tick = function(delta) {
};
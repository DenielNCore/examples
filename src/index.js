let container = document.body;

let app = new PIXI.Application(960, 960, {transparent: false, backgroundColor : 0x000000});
container.appendChild(app.view);
app.renderer.backgroundColor = 0x000000;

let game = app.stage;

let field = game.addChild(new PIXI.Graphics());
field.beginFill(0x000000);
field.lineStyle(4, 0xff0000,1);
field.drawRect(0, 0, 100, 100);

field.anchor.set(0.5);
field.endFill();
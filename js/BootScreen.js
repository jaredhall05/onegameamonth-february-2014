RougeLike.BootScreen = function() {
};

RougeLike.BootScreen.prototype = Object.create(Phaser.State.prototype);
RougeLike.BootScreen.prototype.constructor = RougeLike.BootScreen;

RougeLike.BootScreen.prototype.preload = function() {
    this.load.image('progBar', 'resources/progBar.jpg');
};

RougeLike.BootScreen.prototype.create = function() {
    this.game.state.start('PreloadScreen');
};
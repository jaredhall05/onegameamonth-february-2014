/* global FebGAM, Phaser */

FebGAM.BootScreen = function() {
};

FebGAM.BootScreen.prototype = Object.create(Phaser.State.prototype);
FebGAM.BootScreen.prototype.constructor = FebGAM.BootScreen;

FebGAM.BootScreen.prototype.preload = function() {
    this.load.image('progBar', 'resources/progBar.jpg');
};

FebGAM.BootScreen.prototype.create = function() {
    this.game.state.start('PreloadScreen');
};
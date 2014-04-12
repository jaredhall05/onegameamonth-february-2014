/* global FebGAM, Phaser */

FebGAM.PreloadScreen = function() {
	this.progressBar = null;
};

FebGAM.PreloadScreen.prototype = Object.create(Phaser.State.prototype);
FebGAM.PreloadScreen.prototype.constructor = FebGAM.BootScreen;

FebGAM.PreloadScreen.prototype.preload = function() {
    this.progressBar = this.add.sprite(this.game.width * 0.5, this.game.height * 0.5, 'progBar');
    this.progressBar.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(this.progressBar);
    
    this.load.image('phaser-logo', 'resources/phaser-logo-small.png');
    this.load.image('jdhdev-logo', 'resources/jdhdev-logo.png');
    this.load.image('button', 'resources/Button01.png');
    this.load.atlasJSONHash('surface', 'resources/surface.png', 'resources/surface.json');
    this.load.atlasJSONHash('alien', 'resources/alien.png', 'resources/alien.json');
};

FebGAM.PreloadScreen.prototype.loadUpdate = function() {
    //console.log(this.load.progress);
};

FebGAM.PreloadScreen.prototype.create = function() {
    this.progressBar.cropEnabled = false;
};

FebGAM.PreloadScreen.prototype.update = function() {
    if (this.game.load.hasLoaded) {
        this.game.state.start('LogosScreen');
    }
};
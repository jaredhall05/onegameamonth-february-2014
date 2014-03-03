RougeLike.PreloadScreen = function() {
	this.progressBar = null;
};

RougeLike.PreloadScreen.prototype = Object.create(Phaser.State.prototype);
RougeLike.PreloadScreen.prototype.constructor = RougeLike.BootScreen;

RougeLike.PreloadScreen.prototype.preload = function() {
    this.progressBar = this.add.sprite(this.game.width * 0.5, this.game.height * 0.5, 'progBar');
    this.progressBar.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(this.progressBar);
    
    this.load.image('phaser-logo', 'resources/phaser-logo-small.png');
    this.load.image('jdhdev-logo', 'resources/jdhdev-logo.png');
    this.load.image('waterbg', 'resources/waves2.gif');
    //this.load.image('waterbg2', 'resources/waves.gif');
    //this.load.image('explosion', 'resources/explosion.png');
    //this.load.image('planes', 'resources/planes.png');
};

RougeLike.PreloadScreen.prototype.loadUpdate = function() {
    console.log(this.load.progress);
};

RougeLike.PreloadScreen.prototype.create = function() {
    this.progressBar.cropEnabled = false;
};

RougeLike.PreloadScreen.prototype.update = function() {
    if (this.game.load.hasLoaded) {
        this.game.state.start('LogosScreen');
    }
};
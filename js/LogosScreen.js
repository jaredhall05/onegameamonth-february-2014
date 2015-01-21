/* global FebGAM, Phaser */

FebGAM.LogosScreen = function() {
    this.phaserLogo = null;
    this.jdhdevLogo = null;
    
    this.logos = [];
    
    this._activeLogo = -1;
    this._tween = null;
};

FebGAM.LogosScreen.prototype = Object.create(Phaser.State.prototype);
FebGAM.LogosScreen.prototype.constructor = FebGAM.LogosScreen;

FebGAM.LogosScreen.prototype.preload = function() {
};

FebGAM.LogosScreen.prototype.create = function() {
    this.phaserLogo = this.add.image(this.game.world.centerX, this.game.world.centerY,'phaser-logo');
    this.phaserLogo.anchor.setTo(0.5, 0.5);
    this.phaserLogo.alpha = 0;
    
    this.jdhdevLogo = this.add.image(this.game.world.centerX, this.game.world.centerY,'jdhdev-logo');
    this.jdhdevLogo.anchor.setTo(0.5, 0.5);
    this.jdhdevLogo.alpha = 0;
    
    this.logos.push(this.phaserLogo);
    this.logos.push(this.jdhdevLogo);
    
    this._activeLogo = 0;
    
    this.input.onDown.add(this.downHandler, this);
    
    this.startTween();
};

FebGAM.LogosScreen.prototype.startTween = function() {
    this._tween = this.game.add.tween(this.logos[this._activeLogo]);
    this._tween.to({ alpha: 1 }, 1000);
    this._tween.onComplete.addOnce(this.fadeInComplete, this);
    this._tween.start();
};

FebGAM.LogosScreen.prototype.fadeInComplete = function() {
    this._tween = this.game.add.tween(this.logos[this._activeLogo]);
    this._tween.to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 1000);
    this._tween.onComplete.addOnce(this.fadeOutComplete, this);
    this._tween.start();
};

FebGAM.LogosScreen.prototype.fadeOutComplete = function() {
    this._activeLogo += 1;
    if (this._activeLogo >= this.logos.length) {
        this.game.state.start('MainMenu');
    } else {
        this.startTween();
    }
};

FebGAM.LogosScreen.prototype.downHandler = function() {
    this.game.state.start('MainMenu');
};
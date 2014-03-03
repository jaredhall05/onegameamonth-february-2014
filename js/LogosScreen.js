RougeLike.LogosScreen = function() {
    this.phaserLogo = null;
    this.jdhdevLogo = null;
    
    this.logos = [];
    
    this._activeLogo = -1;
    this._tween = null;
};

RougeLike.LogosScreen.prototype = Object.create(Phaser.State.prototype);
RougeLike.LogosScreen.prototype.constructor = Phaser.State;

RougeLike.LogosScreen.prototype.preload = function() {
};

RougeLike.LogosScreen.prototype.create = function() {
    this.phaserLogo = this.add.sprite(this.game.world.centerX, this.game.world.centerY,'phaser-logo');
    this.phaserLogo.anchor.setTo(0.5, 0.5);
    this.phaserLogo.alpha = 0;
    
    this.jdhdevLogo = this.add.sprite(this.game.world.centerX, this.game.world.centerY,'jdhdev-logo');
    this.jdhdevLogo.anchor.setTo(0.5, 0.5);
    this.jdhdevLogo.alpha = 0;
    
    this.logos.push(this.phaserLogo);
    this.logos.push(this.jdhdevLogo);
    
    this._activeLogo = 0;
    
    this.startTween();
};

RougeLike.LogosScreen.prototype.startTween = function() {
    this._tween = this.game.add.tween(this.logos[this._activeLogo]);
    this._tween.to({ alpha: 1 }, 1000);
    this._tween.onComplete.addOnce(this.fadeInComplete, this);
    this._tween.start();
};

RougeLike.LogosScreen.prototype.fadeInComplete = function() {
    this._tween = this.game.add.tween(this.logos[this._activeLogo]);
    this._tween.to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 1000);
    this._tween.onComplete.addOnce(this.fadeOutComplete, this);
    this._tween.start();
};

RougeLike.LogosScreen.prototype.fadeOutComplete = function() {
    this._activeLogo += 1;
    if (this._activeLogo >= this.logos.length) {
        this.game.state.start('MainMenu');
    } else {
        this.startTween();
    }
};
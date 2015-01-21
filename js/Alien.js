/* global FebGAM, Phaser */

FebGAM.Alien = function(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.isDown = true;
    this.isHit = false;
    
    this.slideTime = 500;
    this.maxDelay = 2000;
    
    this.image = game.add.image(x, y, 'alien', Math.floor(Math.random() * 6));
    this.image.y = this.y + this.image.height;
    this.image.anchor.setTo(0.5, 1.0);
    
    this.image.inputEnabled = true;
    
    this.isDisposed = false;
    
    /**
    * @property {Phaser.Signal} onComplete - The onComplete event is fired when the Alien returns to the down position.
    * Will be fired whether or not the alien has been clicked
    */
    this.onComplete = new Phaser.Signal();
    
    /**
    * @property {Phaser.Signal} onDown - The onDown event is fired when the alien has been clicked.
    */
    this.onDown = new Phaser.Signal();
};

FebGAM.Alien.prototype = {
    dispose: function() {
        this._tween.stop(false);
        this._tween = this.game.add.tween(this.image);
        this._tween.to({ y: this.y + this.image.height }, this.slideTime / 2, null, true, 0);
        this._tween.onComplete.addOnce(this.slideDownComplete, this);
        this.isDisposed = true;
    },
    popup: function() {
        this.image.frame = Math.floor(Math.random() * 6);
        this._tween = this.game.add.tween(this.image);
        this._tween.to({ y: this.y }, this.slideTime, null, true, Math.random() * this.maxDelay);
        this._tween.onComplete.addOnce(this.slideUpComplete, this);
        this.isDown = false;
        this.isHit = false;
    },
    slideDownComplete: function() {
        this.isDown = true;
        this.onComplete.dispatch(this);
        this.popup();
    },
    slideUpComplete: function() {
        this._tween = this.game.add.tween(this.image);
        this._tween.to({ y: this.y + this.image.height }, this.slideTime, null, true, Math.random() * this.maxDelay);
        this._tween.onComplete.addOnce(this.slideDownComplete, this);
    },
    update: function() {
        if (!this.isDisposed && !this.isHit && this.image.input.justPressed(this.game.input.activePointer.id, 36)) {
            this._tween.stop(false);
            this._tween = this.game.add.tween(this.image);
            this._tween.to({ y: this.y + this.image.height }, this.slideTime / 2, null, true, 0);
            this._tween.onComplete.addOnce(this.slideDownComplete, this);
            this.isHit = true;
            this.onDown.dispatch(this);
        }
    }
};

FebGAM.Alien.prototype.constructor = FebGAM.Alien;
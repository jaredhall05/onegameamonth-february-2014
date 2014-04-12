/* global FebGAM, Phaser */

FebGAM.Alien = function(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    
    this.image = game.add.image(x, y, 'alien', Math.floor(Math.random() * 6));
    this.image.anchor.setTo(0.5, 1.0);
};

FebGAM.Alien.prototype = {
    update: function() {
        
    }
};

FebGAM.Alien.prototype.constructor = FebGAM.Alien;
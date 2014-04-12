/* global FebGAM, Phaser */

FebGAM.GameScreen = function() {
    this.bg = null;
    
    this.surface_1 = null;
    this.surface_2 = null;
    this.surface_3 = null;
    this.surface_4 = null;
    this.surface_5 = null;
    this.surface_6 = null;
    
    this.aliens = [];
    
    this.score = 0;
};

FebGAM.GameScreen.prototype = Object.create(Phaser.State.prototype);
FebGAM.GameScreen.prototype.constructor = FebGAM.GameScreen;

FebGAM.GameScreen.prototype.preload = function() {
};
    
FebGAM.GameScreen.prototype.create = function() {
    this.surface_6 = this.add.image(0, 0, 'surface', 0);
    
    this.aliens.push(new FebGAM.Alien(this.game, 68, 104));
    this.aliens.push(new FebGAM.Alien(this.game, 203, 104));
    
    this.surface_5 = this.add.image(0, 80, 'surface', 1);
    this.surface_4 = this.add.image(0, 160, 'surface', 2);
    
    this.aliens.push(new FebGAM.Alien(this.game, 68, 264));
    this.aliens.push(new FebGAM.Alien(this.game, 203, 264));
    
    this.surface_3 = this.add.image(0, 240, 'surface', 3);
    this.surface_2 = this.add.image(0, 320, 'surface', 4);
    
    this.aliens.push(new FebGAM.Alien(this.game, 68, 424));
    this.aliens.push(new FebGAM.Alien(this.game, 203, 424));
    
    this.surface_1 = this.add.image(0, 400, 'surface', 5);
};
    
FebGAM.GameScreen.prototype.update = function() {
    this.aliens.forEach(function(alien) {
        alien.update();
    });
};
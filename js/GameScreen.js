/* global FebGAM, Phaser */

FebGAM.GameScreen = function() {
    this.bg = null;
    this.scoreText = null;
    
    this.surface_1 = null;
    this.surface_2 = null;
    this.surface_3 = null;
    this.surface_4 = null;
    this.surface_5 = null;
    this.surface_6 = null;
    
    this.aliens = [];
    
    this.missedAliens = 0;
    this.score = 0;
};

FebGAM.GameScreen.prototype = Object.create(Phaser.State.prototype);
FebGAM.GameScreen.prototype.constructor = FebGAM.GameScreen;
    
FebGAM.GameScreen.prototype.create = function() {
    /*
     * The order of the surfaces and the aliens
     * is important for z-ordering so the aliens
     * are behind some surfaces and on top of others.
     */
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
    
    this.scoreText = this.add.text(5, 5, "Score: " + this.score, {
        font: "24px Arial",
        fill: "#fff"
    });
    
    var _this = this;
    
    this.aliens.forEach(function(alien) {
        alien.onDown.add(_this.onAlienDown, _this);
        alien.onComplete.add(_this.onAlienComplete, _this);
        alien.popup();
    });
};
    
FebGAM.GameScreen.prototype.update = function() {
    this.aliens.forEach(function(alien) {
        alien.update();
    });
};

FebGAM.GameScreen.prototype.onAlienComplete = function(alien) {
    this.missedAliens++;
    if (this.missedAliens > 10) {
        this.aliens.forEach(function(alien) {
            alien.dispose();
        });
    }
};

FebGAM.GameScreen.prototype.onAlienDown = function() {
    this.score += 1;
    this.scoreText.setText("Score: " + this.score);
};
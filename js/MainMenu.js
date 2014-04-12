/* global FebGAM, Phaser */

FebGAM.MainMenu = function() {
    this.bg = null;
};

FebGAM.MainMenu.prototype = Object.create(Phaser.State.prototype);
FebGAM.MainMenu.prototype.constructor = FebGAM.MainMenu;

FebGAM.MainMenu.prototype.preload = function() {
};
    
FebGAM.MainMenu.prototype.create = function() {
    this.add.button(this.world.centerX - 150, this.world.centerY - 40, 'button', actionOnClick, this);
};

function actionOnClick() {
    this.game.state.start('GameScreen');
}
    
FebGAM.MainMenu.prototype.update = function() {
};
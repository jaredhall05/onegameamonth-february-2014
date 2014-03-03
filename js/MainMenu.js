RougeLike.MainMenu = function() {
    this.bg = null;
};

RougeLike.MainMenu.prototype = Object.create(Phaser.State.prototype);
RougeLike.MainMenu.prototype.constructor = RougeLike.BootScreen;

RougeLike.MainMenu.prototype.preload = function() {
};
    
RougeLike.MainMenu.prototype.create = function() {
    this.bg = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'waterbg');
};
    
RougeLike.MainMenu.prototype.update = function() {
    this.bg.tilePosition.y += 1;
};
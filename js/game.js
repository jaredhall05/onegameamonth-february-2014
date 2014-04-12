/* global FebGAM, Phaser */

var width = 270,
    height = 480,
    gamevar = new Phaser.Game(width, height, Phaser.AUTO, '');

gamevar.state.add('BootScreen', FebGAM.BootScreen, true);
gamevar.state.add('PreloadScreen', FebGAM.PreloadScreen);
gamevar.state.add('LogosScreen', FebGAM.LogosScreen);
gamevar.state.add('MainMenu', FebGAM.MainMenu);
gamevar.state.add('GameScreen', FebGAM.GameScreen);
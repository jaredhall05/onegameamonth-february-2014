var width = 800,
    height = 600,
    gamevar = new Phaser.Game(width, height, Phaser.AUTO, '');
    
gamevar.state.add('BootScreen', RougeLike.BootScreen, true);
gamevar.state.add('PreloadScreen', RougeLike.PreloadScreen);
gamevar.state.add('LogosScreen', RougeLike.LogosScreen);
gamevar.state.add('MainMenu', RougeLike.MainMenu);
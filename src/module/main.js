import Phaser from 'phaser';
import config from '../config/config';
import gameScene from '../scenes/gameScene';
import bootScene from '../scenes/bootScene';
import preloaderScene from '../scenes/preloaderScene';
import titleScene from '../scenes/titleScene';
import optionsScene from '../scenes/optionsScene';
import creditsScene from '../scenes/creditsScene';
import Model from '../model';

class Game extends Phaser.Game {
    constructor () {
      super(config);
      const model = new Model();
      this.globals = { model, bgMusic: null };
      this.scene.add('Boot', bootScene);
      this.scene.add('Preloader', preloaderScene);
      this.scene.add('Title', titleScene);
      this.scene.add('Options', optionsScene);
      this.scene.add('Credits', creditsScene);
      this.scene.add('Game', gameScene);
      this.scene.start('Boot');
    }
  }

  window.game = new Game();
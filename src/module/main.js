import Phaser from 'phaser';

import config from '../config/config';
import gameScene from '../scenes/gameScene';
import guideScene from '../scenes/guideScene';
import bootScene from '../scenes/bootScene';
import preloaderScene from '../scenes/preloaderScene';
import titleScene from '../scenes/titleScene';
import optionsScene from '../scenes/optionsScene';
import creditsScene from '../scenes/creditsScene';
import displayScoreScene from '../scenes/displayScoreScene';
import gameOverScene from '../scenes/gameOverScene';
import Model from '../model';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();

    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', bootScene);
    this.scene.add('Preloader', preloaderScene);
    this.scene.add('Title', titleScene);
    this.scene.add('Options', optionsScene);
    this.scene.add('Credits', creditsScene);
    this.scene.add('Game', gameScene);
    this.scene.add('Guide', guideScene);
    this.scene.add('DisplayScore', displayScoreScene);
    this.scene.add('GameOver', gameOverScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
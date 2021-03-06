import Phaser from 'phaser';

import config from '../config/config';
import Button from '../elements/Button';
import { postScore } from '../entities/apiData';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  init() {
    this.model = this.sys.game.globals.model;
  }

  create() {
    const image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg-2');
    const scaleX = this.cameras.main.width / image.width;
    const scaleY = this.cameras.main.height / image.height;
    const scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(1);

    const user = this.sys.game.globals.model.userName;

    this.add.image(this.game.config.width * 0.5, 240, 'bg-2').setScale(0.35);

    this.score = this.add.text(this.game.config.width * 0.3, 360, `Hello ${user},
     your Score is: ${this.sys.game.globals.model.score}`, {
      fontFamily: 'monospace',
      fontSize: 20,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    postScore(this.model.userName, this.model.score);

    this.gameButton = new Button(this, config.width / 1.57, (config.height / 2) + 100,
      'blueButton1', 'blueButton2', 'Restart', 'Game');
    this.gameButton = new Button(this, config.width / 4.5, (config.height / 2) + 100,
      'blueButton1', 'blueButton2', 'Submit', 'DisplayScore');
  }
}

export default GameOverScene;
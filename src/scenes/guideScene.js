import Phaser from 'phaser';

import config from '../config/config';

/* eslint no-undef: "error" */

const GuideScene = class extends Phaser.Scene {
  constructor() {
    super('Guide');
  }

  create() {
    const image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg-4');
    const scaleX = this.cameras.main.width / image.width;
    const scaleY = this.cameras.main.height / image.height;
    const scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(1);

    this.intro = this.add.text((config.width / 3) - 10, (config.height / 5) - 100, 'Please enter your name ', {
      fontSize: this.game.config.width / 25,
      align: 'center',
      color: '#fff',
      fontFamily: 'open-sans',
    });

    const input = this.add.dom(650, 100, 'input', {
      type: 'text',
      name: 'nameField',
      color: '#ffffff',
      fontSize: '32px',
      backgroundColor: '#000000',
    });

    this.gameTitle = this.add.text((config.width / 3) - 10, (config.height / 2) - 100, 'Plane Game', {
      fontSize: this.game.config.width / 15,
      align: 'center',
      color: '#fff',
      fontFamily: 'open-sans',
    });

    this.gameTitle = this.add.text((config.width / 2) - 600, config.height / 2, 'When '
      + 'the game starts, the enemy starts attacking .'
      + '\n For the player to survive, they needs to kill as many'
      + '\n enemies as possible. The score keeps increasing for every kill'
      + '\n . If the player fails to kill the enemies and the enemy kills'
      + '\n the player, they loose a life for every laser hit. Until all given lifes get used up'
      + '\n Use arrow keys on the keyboard to'
      + '\n move up, down, left, right, and the space bar/ enter to shoot'
      + '\n ', {
      fontSize: '3em',
      fontFamily: 'sans-serif',
      color: '#fff',
      align: 'center',
    });

    const style = 'width: 100px; height: 277px; border: none; font: 32px Georgia; color: #fff;';
    const gameButton = this.add.dom(950, 180, 'blueButton1', style, 'Play');

    gameButton.addListener('click');

    gameButton.on('click', () => {
      if (input.node.value) {
        this.model = this.sys.game.globals.model;
        this.model.userName = input.node.value;
        this.scene.start('Game');
      }
    });
  }
};

export default GuideScene;
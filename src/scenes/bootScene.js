import Phaser from 'phaser';

/* eslint no-undef: 'error' */
/* eslint import/no-unresolved: 'error' */

const BootScene = class extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('bg-1', './assets/background/Background-1.png');
    this.load.image('bg-2', './assets/background/Background-2.png');
    this.load.image('bg-3', './assets/background/Background-3.png');
    this.load.image('bg-4', './assets/background/Background-4.png');

    this.load.image('sprLaserPlayer', './assets/player/laserGreen.png');
    this.load.image('sprPlayer', './assets/player/player.png');

    this.load.image('checkedBox', './assets/ui/blue_bocCheckmark.png');

    this.load.image('sprLifes', './assets/player/life.png');

    this.load.image('sprEnemy1', './assets/enemy/enemyShip.png');
    this.load.image('sprLaserEnemy0', './assets/enemy/laserRed.png');

    this.load.spritesheet('sprEnemy2', './assets/enemy/enemyUFO.png', {
      frameWidth: 125,
      frameHeight: 100,
    });
  }

  create() {
    this.scene.start('Preloader');
  }
};

export default BootScene;
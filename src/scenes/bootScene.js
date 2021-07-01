import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('bg-1', 'assets/background/Background-1.png');
    this.load.image('life', 'assets/game/life.png');

     this.load.image('laserPlayer', './assets/player/laserGreen.png');
     this.load.image('Player', './assets/player/player.png');
  
     this.load.image('Enemy1', './assets/enemy/enemyShip.png');
     this.load.image('laserEnemy0', './assets/enemy/laserRed.png');
    
    
    }

  create () {
    this.scene.start('Preloader');
  }
}
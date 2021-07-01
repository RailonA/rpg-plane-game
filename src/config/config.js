import Phaser from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH } from './const-variable';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: GAME_HEIGHT * 2 },
      debug: false,
      x: 0,
      y: 0,
      width: GAME_WIDTH * 100,
      height: GAME_HEIGHT,
      thickness: 32,
    },
  },
  
};
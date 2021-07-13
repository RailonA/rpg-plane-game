import Phaser from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH } from './const-variable';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  physics: {
    default: 'arcade',
  },
  dom: {
    createContainer: true,
  },
};

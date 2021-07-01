import Phaser from 'phaser';
// import Player from '../entities/player'
// import ScrollingBackground from '../entities/scrollingBackground';
import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

let platforms;
let score;
var cursors;
let player;
let scoreText;

const GameScene = class extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    // load images
    this.load.image('bg-1', './assets/background/Background-1.png');
    this.load.image('Lifes', './assets/game/life.png');

    this.load.image('PlayerPlane', './assets/player/player.png');


  }

  create () {

    this.add.image(400, 300, 'bg-1');

    platforms = this.physics.add.staticGroup();

    score = 0;

    this.cameras.main.setBounds(0, 0, GAME_WIDTH * 100, GAME_HEIGHT).setName('main');
    platforms = this.physics.add.staticGroup();

    const mainWidth = this.cameras.main._bounds.width;
    for (let width = 0; width < mainWidth; width += 2048) {
      platforms.create(width, GAME_HEIGHT, 'ground').refreshBody();
    }

    cursors = this.input.keyboard.createCursorKeys();

    player = this.physics.add.sprite(100, 450, 'PlayerPlane');
    player.setCollideWorldBounds(true);

    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });

    this.physics.add.collider(player, platforms);

  }

  update() {
    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
  }

  
}

export default GameScene;
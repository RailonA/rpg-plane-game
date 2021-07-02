import Phaser from 'phaser';
import config from '../config/config';
import Button from '../objects/button';

export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }

  create () {
    
    const image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg-2');
    const scaleX = this.cameras.main.width / image.width;
    const scaleY = this.cameras.main.height / image.height;
    const scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(1);

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }

    this.gameButton = new Button(this, config.width/2, config.height/2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Guide');

    this.optionsButton = new Button(this, config.width/2, config.height/2, 'blueButton1', 'blueButton2', 'Options', 'Options');

    this.creditsButton = new Button(this, config.width/2, config.height/2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });

      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton (gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width/2, config.height/2 - offset * 100, config.width, config.height)
    );
  }

  centerButtonText (gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton
    );
  }
}

import Phaser from 'phaser';
import config from '../config/config';
import Button from '../elements/Button';

const CreditsScene = class extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    const image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg-3');
    const scaleX = this.cameras.main.width / image.width;
    const scaleY = this.cameras.main.height / image.height;
    const scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(1);

    this.creditsMicroverseText = this.add.text(0, 0, 'Special credits to Microverse', { fontSize: '32px', fill: '#c41425' });
    this.createdByText = this.add.text(0, 0, 'Created By: Railon Acosta', { fontSize: '26px', fill: '#edc811' });
    this.emailText = this.add.text(0, 0, 'railonacosta@gmail.com', { fontSize: '18px', fill: '#32a852' });
    this.openGameArt = this.add.text((config.width / 2) - 600, config.height / 2, 'Special thanks to the Developers at the OpenGameArt, for the sound, music and characters', { fontSize: '20px', fill: '#fff' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    this.createdByText.setY(1000);
    this.emailText.setY(900);

    this.creditsTween = this.tweens.add({
      targets: this.creditsMicroverseText,
      y: 0,
      ease: 'Power3',
      duration: 3000,
    });

    this.createdByTween = this.tweens.add({
      targets: this.createdByText,
      y: 30,
      ease: 'Power3',
      duration: 3000,
      onComplete: function x() {
      },
    });

    this.emailTween = this.tweens.add({
      targets: this.emailText,
      y: 60,
      ease: 'Power3',
      duration: 3000,
      onComplete: function x() {

      },
    });

    this.creditsOpenTween = this.tweens.add({
      targets: this.openGameArt,
      y: 80,
      ease: 'Power3',
      duration: 3000,
      onComplete: function x() {
        setTimeout(() => {
          this.scene.start('Title');
        }, 5000);
      }.bind(this),
    });

    this.gameButton = new Button(this, (config.width / 2), (config.height / 2) + 100, 'blueButton1', 'blueButton2', 'Back', 'Title');
  }
};

export default CreditsScene;
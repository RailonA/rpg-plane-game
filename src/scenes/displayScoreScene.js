import Phaser from 'phaser';

import { getScores } from '../entities/apiData';

const DisplayScoreScene = class extends Phaser.Scene {
  constructor() {
    super('DisplayScore');
  }

  create() {
    this.add.text(650, 200, 'Air Plane Game', {
      color: 'white',
      fontSize: '32px ',
      fontFamily: 'san-serif',
    }).setOrigin(0.5, 0.5);

    getScores().then((scores) => {
      const scoreStyle = {
        color: 'red',
        fontSize: '38px ',
      };

      scores.sort((x, y) => y.score - x.score);
      const space = 30;
      for (let i = 0; i < 5; i += 1) {
        if (scores[i] !== undefined) {
          this.add
            .text(
              650,
              240 + (space * i),
              `${i + 1}. Name: ${scores[i].user} Score: ${scores[i].score}`,
              scoreStyle,
            )
            .setOrigin(0.5, 0.5);
        }
      }
    });

    const style = 'width: 150px; height: 40px; border-radius: 30px; border: 0; font: 30px sans-serif; color: black;';
    const btn1 = this.add.dom(450, 490, 'button', style, 'Guide');
    const btn2 = this.add.dom(750, 490, 'button', style, 'Back');

    btn1.addListener('click');
    btn2.addListener('click');

    btn1.on('click', () => {
      this.model = this.sys.game.globals.model;
      this.model.score = 0;
      this.scene.start('Guide');
    });

    btn2.on('click', () => {
      this.model = this.sys.game.globals.model;
      this.model.score = 0;
      this.scene.start('Title');
    });
  }
};

export default DisplayScoreScene;
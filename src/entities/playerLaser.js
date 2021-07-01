import Entity from './entity';

const PlayerLaser = class extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'laserPlayer');
    this.body.velocity.y = -200;
  }
};

export default PlayerLaser;
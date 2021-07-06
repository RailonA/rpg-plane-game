/* eslint-disable class-methods-use-this */
import Entity from './Entity';

const PlayerLaser = class extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.setTexture('sprLaserPlayer');
    this.setPosition(x, y);
    this.speed = 10;
    this.setScale(1.0);
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.physics.add.collider(this, scene.enemies, this.handleHit, null, this);
  }

  handleHit(laserSprite, enemySprite) {
    enemySprite.destroy(true);
    laserSprite.destroy(true);
  }

  preUpdate(time, delta) {
    if (this.active === false) { return; }
    super.preUpdate(time, delta);
    this.y -= this.speed;
  }
};

export default PlayerLaser;

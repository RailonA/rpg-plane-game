const Align = class {
  static scaleToGameW(obj, per) {
    obj.displayWidth = (this.config.width * per);
    obj.scaleY = obj.scaleX;
  }

  static centerH(obj) {
    obj.x = (this.config.width / 2);
  }

  static centerV(obj) {
    obj.y = (this.config.height / 2);
  }

  static center(obj) {
    obj.x = (this.config.width / 2);
    obj.y = (this.config.height / 2);
  }
};

export default Align;
import 'jest-canvas-mock';
import BootScene from '../src/scenes/bootScene';
// import GameScene from '../src/scenes/gameScene';
// import Option from '../src/scenes/optionsScene';

describe('Scenes are functions test', () => {
  it('The Boot scene is a function', () => {
    expect(typeof BootScene).toBe('function');
  });
  // it('Game Scene is a function', () => {
  //   expect(typeof GameScene).toBe('function');
  // });
  // it('Options Scene is a function', () => {
  //   expect(typeof Option).toBe('function');
  // });
});

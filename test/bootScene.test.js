import 'jest-canvas-mock';
import BootScene from '../src/scenes/bootScene';

describe('Scenes are functions test', () => {
  it('The Boot scene is a function', () => {
    expect(typeof BootScene).toBe('function');
  });
});

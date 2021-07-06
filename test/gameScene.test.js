import 'jest-canvas-mock';
import GameScene from '../src/scenes/gameScene';

describe('Scenes are functions test', () => {
  it('Game Scene is a function', () => {
    expect(typeof GameScene).toBe('function');
  });
});

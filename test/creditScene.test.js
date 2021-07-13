import 'jest-canvas-mock';
import CreditsScene from '../src/scenes/creditsScene';

describe('Scenes are functions test', () => {
  it('The Boot scene is a function', () => {
    expect(typeof CreditsScene).toBe('function');
  });
});

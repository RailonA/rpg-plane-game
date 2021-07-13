import 'jest-canvas-mock';
import Preloader from '../src/scenes/preloaderScene';

describe('Scenes are functions test', () => {
  it('Options Scene is a function', () => {
    expect(typeof Preloader).toBe('function');
  });
});

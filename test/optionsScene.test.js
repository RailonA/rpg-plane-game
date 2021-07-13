import 'jest-canvas-mock';
import Option from '../src/scenes/optionsScene';

describe('Scenes are functions test', () => {
  it('Options Scene is a function', () => {
    expect(typeof Option).toBe('function');
  });
});

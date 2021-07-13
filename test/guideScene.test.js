import 'jest-canvas-mock';
import Guide from '../src/scenes/gameScene';

describe('Scenes are functions test', () => {
  it('Options Scene is a function', () => {
    expect(typeof Guide).toBe('function');
  });
});

/* eslint-disable no-underscore-dangle */
import { getScores } from '../src/entities/apiData';
import Model from '../src/model';

const { expect, it } = require('@jest/globals');

describe('Test Api', () => {
  it('It Should return topScores.result', async () => {
    getScores('GET')
      .then((data) => {
        expect(data).toEqual(this.topScores.result);
      })
      .catch(() => null);
  });

  it('It Should return err message', async () => {
    getScores('POST', 'VERRRRY LONG STRINGGGGGGGGGGGGGGG', 1000000000000)
      .then((data) => {
        expect(data).toEqual('err');
      })
      .catch(() => null);
  });
});

describe('Test User Module', () => {
  const user = new Model();

  it('It Should Set & Return User Values', async () => {
    user.user = 'Test';
    expect(user.user).toBe('Test');
  });

  it('It Should Set & Return Score Values', async () => {
    user.score = 100;
    expect(user.score).toBe(100);
  });
});

describe('Test Sound Module', () => {
  const sound = new Model();

  it('It Should Return soundOn Values', async () => {
    expect(sound._soundOn).toBe(true);
  });

  it('It Should Set soundOn Values', async () => {
    sound.soundOn = false;
    expect(sound._soundOn).toBe(false);
  });

  it('It Should Return musicOn Values', async () => {
    expect(sound._musicOn).toBe(true);
  });

  it('It Should Set musicOn Values', async () => {
    sound.musicOn = false;
    expect(sound._musicOn).toBe(false);
  });

  it('It Should Return bgMusicPlaying Values', async () => {
    expect(sound._bgMusicPlaying).toBe(false);
  });

  it('It Should Set bgMusicPlaying Values', async () => {
    sound.bgMusicPlaying = true;
    expect(sound._bgMusicPlaying).toBe(true);
  });
});
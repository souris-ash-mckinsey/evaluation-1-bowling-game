const { getScoreOfGame, findBestGameScore } = require('../src/gameScoreUtils');

describe('Finding the score of a game given the rolls', () => {
  it('throws TypeError if a non-array is provided as argument', () => {
    expect(() => getScoreOfGame(3)).toThrow(TypeError);
  });

  describe('returns correct score when rolls are given', () => {
    it('should pass valid test case 1', () => {
      expect(getScoreOfGame([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90);
    });

    it('should pass valid test case 2', () => {
      expect(getScoreOfGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toEqual(30);
    });

    it('should pass valid test case 3', () => {
      expect(getScoreOfGame([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(13);
    });
  });
});

describe('Finding the best score given rolls of a game', () => {
  it('throws TypeError if a non-array is provided as argument', () => {
    expect(() => findBestGameScore(3)).toThrow(TypeError);
  });

  it('should give max score of given games', () => {
    expect(findBestGameScore([
      [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
      [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ])).toEqual(90);
  });
});
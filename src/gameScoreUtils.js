/**
 * Calculates the score of one game. Expects an array of positive integers.
 * @param {Array<Number>} rolls An array of positive integers that specify the rolls.
 * @returns The score of the game.
 */
const getScoreOfGame = (rolls) => {
  if (!Array.isArray(rolls)) {
    throw new TypeError('Expected argument to be an array of positive integers but found something else.');
  }

  let runningScore = 0;
  let currentRoll = 0;

  while (currentRoll < rolls.length) {
    let nFell = rolls[currentRoll];

    // first two cases:
    if (nFell < 10 && currentRoll < rolls.length - 2) {
      let nextNFell = rolls[currentRoll + 1];
      runningScore += nFell + nextNFell;
      runningScore += nextNFell + nFell == 10 ? rolls[currentRoll + 2] : 0;
      
      currentRoll += nFell + nextNFell == 10 ? 3 : 2;
    }
    // case 3:
    else {
      while (currentRoll < rolls.length && rolls[currentRoll] == 10) {
        runningScore += 10;
        currentRoll += 1;
      }

      if (currentRoll < rolls.length - 1) {
        runningScore += rolls[currentRoll] + rolls[currentRoll + 1];
        currentRoll += 2;
      }
      
      currentRoll += 1;
    }
  }

  return runningScore;
};

/**
 * Returns the best score of a set of games.
 * @param {Array<Array<Number>>} games A 2D array. Each array element is an array of rolls (a game).
 * @returns the best score of all the given games.
 */
const findBestGameScore = (games) => {
  if (!Array.isArray(games)) {
    throw new TypeError('Expected argument to be an array of positive integers but found something else.');
  }

  let scores = games.map((roll) => getScoreOfGame(roll));
  return Math.max(...scores);
};

module.exports = { getScoreOfGame, findBestGameScore };
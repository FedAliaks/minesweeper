import { GameBox } from './GameBox';

const matrixField = [];

export function createMatrixFiled(parameters) {
  const { size, minesCount } = parameters;
  const matrix = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => 0),
  );
  addRandomBomb(matrix, minesCount);
  let count = 0;

  matrix.forEach((itemY, indexY) => {
    itemY.forEach((itemX, indexX) => {
      if (matrix[indexY][indexX] !== 'bomb') {
        matrix[indexY][indexX] = countBombAround([indexY, indexX, matrix]);
      }

      const box = new GameBox([indexY, indexX], matrix[indexY][indexX]);
      box.createGameBoxArea(size);
      count++;
    });
  });
  return matrix;
}

function addRandomBomb(matrix, minesCount) {
  let mines = minesCount;

  while (mines) {
    const x = randomNumber(matrix.length - 1);
    const y = randomNumber(matrix.length - 1);

    if (!matrix[y][x]) {
      matrix[y][x] = 'bomb';
      mines--;
    }
  }
}

function randomNumber(count) {
  return Math.round(Math.random() * count);
}

function countBombAround(coordinates) {
  const [y, x, matrix] = coordinates;
  let countBomb = 0;
  const pos1 = matrix[y - 1]?.[x - 1];
  const pos2 = matrix[y - 1]?.[x];
  const pos3 = matrix[y - 1]?.[x + 1];
  const pos4 = matrix[y][x - 1];
  const pos5 = matrix[y][x + 1];
  const pos6 = matrix[y + 1]?.[x - 1];
  const pos7 = matrix[y + 1]?.[x];
  const pos8 = matrix[y + 1]?.[x + 1];

  countBomb = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8].filter(
    (item) => item === 'bomb',
  ).length;

  return countBomb;
}

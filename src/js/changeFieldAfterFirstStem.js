import { arrayGameBox } from './GameBox';
import { createMatrixFiled } from './matrix';
import { minesFieldParam } from '..';
import { openEmptyBoxes } from './emptyField';
import { addCountSteps } from './addSteps';
import { winGame } from './winGame';
import { addElement } from './createPage';

export function changeFieldAfterFirstStem(coordinates) {
  const size = minesFieldParam.size ** 2;

  if (size - 1 == minesFieldParam.minesCount) {
    const coord = (coordinates[0] + coordinates[1] / 10) * minesFieldParam.size;
    const GAME_FIELD = document.querySelector('.game-field');
    GAME_FIELD.innerHTML = '';

    for (let i = 0; i < size; i++) {
      if (i !== coord) {
        GAME_FIELD.appendChild(
          addElement('div', ['box', `box-${minesFieldParam.size}`], '💣'),
        );
      } else {
        GAME_FIELD.appendChild(
          addElement(
            'div',
            ['box', `box-${minesFieldParam.size}`, `bomb-count-5`],
            '5',
          ),
        );
      }
    }
    winGame();
    return;
  } else {
    const [y, x] = coordinates;
    arrayGameBox = [];
    let flagMatrix = true;

    do {
      const FIELD = document.querySelector('.game-field');
      FIELD.innerHTML = '';

      createMatrixFiled(minesFieldParam);

      arrayGameBox.forEach((item) => {
        const arr = item.coordinates;
        if (arr[0] === y && arr[1] === x) {
          flagMatrix = item.value === 'bomb' ? true : false;

          if (!flagMatrix) {
            arrayGameBox.forEach((item) => {
              if (item.coordinates[0] === y && item.coordinates[1] === x) {
                if (item.value === 0) {
                  openEmptyBoxes(item);
                  addCountSteps(false);
                } else if (item.value !== 'bomb') {
                  item.box.classList.add(`bomb-count-${item.value}`);
                  item.box.innerText = item.value;
                  addCountSteps(false);
                }
              }
            });
          }
        }
      });
    } while (flagMatrix);
  }
}

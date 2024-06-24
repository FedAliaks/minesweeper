import { minesFieldParam } from '..';
import { arrayGameBox, countFlag } from './GameBox';
import { createMatrixFiled } from './matrix';
import { addCountSteps } from './addSteps';
import { startFinishTimer } from './timer';
import { countFlag } from './GameBox';

export function startNewGame() {
  if (document.querySelector('.overlay')) {
    const overlay = document.querySelector('.overlay');
    overlay.parentNode.removeChild(overlay);
  }

  countFlag = 0;

  arrayGameBox.length = 0;
  const gameField = document.querySelector('.game-field');
  gameField.innerHTML = '';

  const COUNT_FLAG = document.querySelector('.count-flag');
  COUNT_FLAG.innerText = `You found out 0 bombs of ${minesFieldParam.minesCount}`;

  createMatrixFiled(minesFieldParam);
  addCountSteps(true);
  startFinishTimer('finish', 0);
}

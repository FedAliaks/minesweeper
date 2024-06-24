import { countFlag } from './GameBox';
import { startFinishTimer } from './timer';
import { minesFieldParam } from '..';

export function addCountSteps(startGame) {
  const countContainer = document.querySelector('.count');
  if (!startGame) {
    countContainer.innerText = +countContainer.innerText + 1;
    if (countContainer.innerText === '1') {
      startFinishTimer('start');
    }
  } else {
    const TIMER = document.querySelector('.timer');
    countContainer.innerText = '0';
    TIMER.innerText = '0:00';
    startFinishTimer('finish');
  }

  let tempFlags = 0;

  const BOXES = document.querySelectorAll('.box');
  BOXES.forEach((item) => {
    if (item.innerHTML === '🚩') {
      tempFlags++;
    }
  });

  countFlag = tempFlags;
  const COUNT_FLAG = document.querySelector('.count-flag');
  COUNT_FLAG.innerText = `You found out ${countFlag} bombs of ${minesFieldParam.minesCount}`;
}

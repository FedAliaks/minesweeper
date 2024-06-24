import { GameBox, arrayGameBox } from './GameBox';
import { addElement } from './createPage';
import { time } from './timer';
import { startFinishTimer } from './timer';
import { minesFieldParam } from '..';
import { countFlag } from './GameBox';

export function saveGame() {
  localStorage.setItem('saveGame', JSON.stringify(arrayGameBox));
  const countSteps = document.querySelector('.count').innerHTML + '';

  localStorage.setItem('countSteps', countSteps);

  localStorage.setItem('time', '' + time);
}

export function loadGame() {
  startFinishTimer('finish');
  arrayGameBox = [];

  const array = JSON.parse(localStorage.getItem('saveGame'));

  const GAME_FIELD = document.querySelector('.game-field');
  GAME_FIELD.innerHTML = '';
  array.forEach((item, index) => {
    const boxElement = new GameBox(
      item.coordinates,
      item.value,
      item.isFlag,
      item.classesArray,
      item.isOpen,
    );
    boxElement.addBoxAfterSaveGame();
  });

  const steps = localStorage.getItem('countSteps');
  document.querySelector('.count').innerHTML = +steps;

  const newTime = localStorage.getItem('time');
  time = +newTime;
  startFinishTimer('start', +newTime);

  let countFlagWithMines = 0;
  document.querySelectorAll('.box').forEach((item) => {
    if (item.innerHTML === '🚩') {
      countFlagWithMines++;
    }
  });

  countFlag = countFlagWithMines;

  const COUNT_FLAG = document.querySelector('.count-flag');
  COUNT_FLAG.innerText = `You found out ${countFlag} bombs of ${minesFieldParam.minesCount}`;
}

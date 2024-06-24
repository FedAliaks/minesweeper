import { arrayGameBox } from './GameBox';
import { loseGame } from './loseGame';
import { winGame } from './winGame';
import { addInfoInLocalStorage } from './localStorage';
import { minesFieldParam } from '..';

export function checkWinGame() {
  for (let i = 0; i < arrayGameBox.length; i++) {
    if (arrayGameBox[i].value === 'bomb') {
      if (arrayGameBox[i].isFlag !== true) {
        loseGame();
        return;
      }
    }
  }

  winGame();
}

export function autoCheckWinGame() {
  const sizeField = minesFieldParam.size * minesFieldParam.size; // число клеток на игровом поле
  const mines = minesFieldParam.minesCount; // число мин наполе
  let countOpenBoxes = 0;

  const BOXES = document.querySelectorAll('.box');
  BOXES.forEach((item) => {
    if (item.classList.length > 2) {
      countOpenBoxes++;
    }
  });

  const sum = countOpenBoxes + mines;

  if (sum === sizeField) {
    winGame();
  } else {
  }
}

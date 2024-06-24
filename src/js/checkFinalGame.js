import { minesFieldParam } from '..';
import { checkWinGame } from './checkWin';

export function checkFinalGame() {
  const countBoxes = minesFieldParam.size ** 2;

  const boxes = document.querySelectorAll('.box');
  let countOpenBox = 0;

  boxes.forEach((item) => {
    if (item.classList.length > 2 || item.innerHTML === '&#128681;') {
      countOpenBox++;
    }
  });

  if (countOpenBox === countBoxes) {
    checkWinGame();
  }
}

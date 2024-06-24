import { minesFieldParam } from '..';

export function changeCountFlag(count) {
  const COUNT_FLAG = document.querySelector('.count-flag');
  COUNT_FLAG.innerText = `You found out  ${count} bombs of ${minesFieldParam.minesCount}`;
}

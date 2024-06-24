import { arrayGameBox } from './GameBox';

export function openAllBombs() {
  arrayGameBox.forEach((item) => {
    if (item.value === 'bomb') {
      item.box.innerText = '💣';
    }
  });
}

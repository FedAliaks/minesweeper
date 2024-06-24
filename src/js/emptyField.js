import { arrayGameBox } from './GameBox';
import { minesFieldParam } from '..';
import { countFlag } from './GameBox';

export function openEmptyBoxes(obj) {
  const [y, x] = obj.coordinates;

  if (obj.value !== 0 || obj.box.classList.contains('empty-box')) {
    obj.box.classList.add(`bomb-count-${obj.value}`);
    obj.classesArray = [
      'box',
      `box-${minesFieldParam.size}`,
      `bomb-count-${obj.value}`,
    ];
    obj.isOpen = true;
    obj.box.innerText = obj.value;

    if (obj.box.classList.contains('empty-box')) {
      obj.classesArray = [
        'box',
        `box-${minesFieldParam.size}`,
        'empty-box',
        `bomb-count-0`,
      ];
    }
    return;
  }

  if (obj.box.innerHTML === '🚩') {
    countFlag--;
  }

  obj.box.innerHTML = '';
  obj.box.classList.add('empty-box');

  arrayGameBox.forEach((item) => {
    const [yBox, xBox] = item.coordinates;
    if (y === yBox && x + 1 === xBox) {
      openEmptyBoxes(item);
    }

    if (y === yBox && x - 1 === xBox) {
      openEmptyBoxes(item);
    }

    if (y - 1 === yBox && x === xBox) {
      openEmptyBoxes(item);
    }

    if (y + 1 === yBox && x === xBox) {
      openEmptyBoxes(item);
    }

    if (y + 1 === yBox && x + 1 === xBox) {
      openEmptyBoxes(item);
    }

    if (y - 1 === yBox && x - 1 === xBox) {
      openEmptyBoxes(item);
    }

    if (y - 1 === yBox && x + 1 === xBox) {
      openEmptyBoxes(item);
    }

    if (y + 1 === yBox && x - 1 === xBox) {
      openEmptyBoxes(item);
    }
  });
}

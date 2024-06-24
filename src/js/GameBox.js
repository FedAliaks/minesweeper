import { openEmptyBoxes } from './emptyField';
import { loseGame } from './loseGame';
import { openAroundBoxes } from './openAroundBoxes';
import { addCountSteps } from './addSteps';
import { changeFieldAfterFirstStem } from './changeFieldAfterFirstStem';
import { changeCountFlag } from './changeCountFlag';
import { minesFieldParam } from '..';
import { musicON } from './musicToggle';
import { addElement } from './createPage';
import { checkFinalGame } from './checkFinalGame';
import { autoCheckWinGame } from './checkWin';

export const arrayGameBox = [];
export let countFlag = 0;

export class GameBox {
  constructor(
    coordinates,
    value,
    isFlag = false,
    classesArray = [],
    isOpen = false,
  ) {
    this.coordinates = coordinates;
    this.value = value;
    arrayGameBox.push(this);
    this.isFlag = isFlag;
    this.classesArray = classesArray;
    this.isOpen = isOpen;
  }

  createGameBoxArea(size) {
    const gameField = document.querySelector('.game-field');
    const box = document.createElement('div');
    box.classList.add('box');

    box.classList.add(`box-${size}`);
    this.classesArray = ['box', `box-${size}`];

    box.addEventListener('click', this.clickMouseLeftButton.bind(this), {
      capture: true,
    });
    box.addEventListener('contextmenu', this.clickMouseRightButton.bind(this), {
      capture: true,
    });

    this.box = box;
    gameField.appendChild(box);
  }

  getCoordinates() {
    return this.coordinates;
  }

  openEmptyBox() {
    this.box.classList.add('empty-box');
    this.isOpen = true;
  }

  clickMouseLeftButton(e) {
    const audio = new Audio('../../public/open-box.mp3');
    this.isOpen = true;
    if (e.buttons === 0) {
      if (!this.isFlag) {
        if (this.value === 0) {
          this.classesArray = [
            'box',
            `box-${minesFieldParam.size}`,
            'empty-box',
            `bomb-count-0`,
          ];
          openEmptyBoxes(this);
          addCountSteps(false);
          if (musicON) {
            audio.play();
          }
        } else if (this.value !== 'bomb') {
          this.box.classList.add(`bomb-count-${this.value}`);
          this.classesArray = [
            'box',
            `box-${minesFieldParam.size}`,
            `bomb-count-${this.value}`,
          ];
          this.box.innerText = this.value;
          addCountSteps(false);
          if (musicON) {
            audio.play();
          }
        } else {
          const count = document.querySelector('.count');

          if (count.innerText == 0) {
            changeFieldAfterFirstStem(this.coordinates);
          } else {
            this.box.innerText = '💣';
            loseGame();
          }
        }
      }
    }

    checkFinalGame();
    autoCheckWinGame();
  }

  clickMouseRightButton(e) {
    const COUNT_FLAG = document.querySelector('.count-flag');
    e.preventDefault();
    if (e.buttons !== 2) {
      if (this.box.innerHTML === '🚩') {
        this.box.innerText = '';
        this.isFlag = false;
        this.question = true;
        countFlag--;
        changeCountFlag(countFlag);
        this.isOpen = true;
      } else if (this.box.innerText === '?') {
        this.box.innerText = '';
        this.isFlag = false;
        this.isOpen = false;
        this.question = false;
      } else if (
        this.box.innerText === '' &&
        countFlag < minesFieldParam.minesCount
      ) {
        this.box.innerHTML = '&#128681;';
        this.isFlag = true;
        countFlag++;
        changeCountFlag(countFlag);
        this.isOpen = true;
        this.question = false;
      }
    }

    autoCheckWinGame();
  }

  addBoxAfterSaveGame() {
    const gameField = document.querySelector('.game-field');
    let valueInField;
    if (this.isOpen) {
      valueInField = this.value;
    } else {
      valueInField = '';
    }

    if (this.isFlag) {
      valueInField = '&#128681;';
    }

    const box = addElement('div', this.classesArray, valueInField);

    box.addEventListener('click', this.clickMouseLeftButton.bind(this), {
      capture: true,
    });
    box.addEventListener('contextmenu', this.clickMouseRightButton.bind(this), {
      capture: true,
    });

    this.box = box;
    gameField.appendChild(box);
  }
}

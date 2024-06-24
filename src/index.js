import { createMatrixFiled } from './js/matrix';
import './style.scss';
import { createPage } from './js/createPage';
import { checkWinGame } from './js/checkWin';
import { startNewGame } from './js/startNewGame';
import { startFinishTimer } from './js/timer';
const img = require('./assets/imageSea.jpg');
import { addCountSteps } from './js/addSteps';
import { arrayGameBox, countFlag } from './js/GameBox';
import { toggleMusic } from './js/musicToggle';
import { openStatistic } from './js/openStatiscticWindow';
import { loadGame, saveGame } from './js/saveAndLoadGame';
import { changeDarkLight } from './js/darkLight';
import { countFlag } from './js/GameBox';

export const minesFieldParam = {
  size: 10,
  minesCount: 10,
};

const BODY = document.querySelector('body');

createPage(minesFieldParam);

const field = document.createElement('div');
field.classList.add('game-field');

BODY.appendChild(field);

createMatrixFiled(minesFieldParam);

const CHECK_WIN = document.querySelector('.check-win');

CHECK_WIN.addEventListener('click', () => {
  checkWinGame();
});

const START_NEW_GAME = document.querySelector('.new-game');
START_NEW_GAME.addEventListener('click', () => {
  startNewGame();
  startFinishTimer('finish');
});

const LEVEL = document.querySelector('.level-container');
LEVEL.addEventListener('click', (e) => {
  if (e.target.classList.contains('level-button')) {
    const LEVEL_BUTTONS = document.querySelectorAll('.level-button');
    LEVEL_BUTTONS.forEach((item) => {
      item.classList.remove('level-button_active');
      if (item.innerHTML === e.target.innerHTML) {
        item.classList.add('level-button_active');
      }
    });

    if (e.target.innerHTML.slice(0, 2) !== minesFieldParam.size) {
      minesFieldParam.size = e.target.innerHTML.slice(0, 2);
      const FIELD = document.querySelector('.game-field');
      FIELD.innerHTML = '';
      arrayGameBox = [];

      if (+minesFieldParam.size === 10) {
        minesFieldParam.minesCount = 10;
        const INPUT = document.querySelector('.input-form');
        INPUT.value = 10;
      }

      if (+minesFieldParam.size === 15) {
        minesFieldParam.minesCount = 50;
        const INPUT = document.querySelector('.input-form');
        INPUT.value = 50;
      }

      if (+minesFieldParam.size === 25) {
        minesFieldParam.minesCount = 99;
        const INPUT = document.querySelector('.input-form');
        INPUT.value = 99;
      }

      createMatrixFiled(minesFieldParam);
      addCountSteps(true);
    }
  }
});

const INPUT = document.querySelector('.input-form');
INPUT.addEventListener('change', () => {
  if (minesFieldParam.minesCount !== INPUT.value) {
    if (INPUT.value < 10) {
      minesFieldParam.minesCount = 10;
    } else if (INPUT.value > 99) {
      minesFieldParam.minesCount = 99;
    } else {
      minesFieldParam.minesCount = INPUT.value;
    }

    INPUT.value = minesFieldParam.minesCount;

    const FIELD = document.querySelector('.game-field');
    FIELD.innerHTML = '';
    arrayGameBox = [];
    countFlag = 0;
    createMatrixFiled(minesFieldParam);
    addCountSteps(true);

    const describe = document.querySelector('.count-flag');
    describe.innerText = `You found out  0 bombs of ${minesFieldParam.minesCount}`;
    startFinishTimer('finish');
  }
});

const MUSIC_BUTTON = document.querySelector('.music-toggle');
MUSIC_BUTTON.addEventListener('click', () => {
  toggleMusic();
});

const STATISTIC = document.querySelector('.last-result');

STATISTIC.addEventListener('click', openStatistic);

const SAVE_GAME = document.querySelector('.save-game');
SAVE_GAME.addEventListener('click', saveGame);

const LOAD_GAME = document.querySelector('.load-game');
LOAD_GAME.addEventListener('click', loadGame);

const DARK_LIGHT = document.querySelector('.dark-button');
DARK_LIGHT.addEventListener('click', changeDarkLight);

window.addEventListener('beforeunload', () => {
  saveGame();
  startFinishTimer('finish');
});

window.addEventListener('load', () => {
  if (localStorage.getItem('saveGame')) {
    loadGame();
  }
});

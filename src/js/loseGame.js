import { startNewGame } from './startNewGame';
import { musicON } from './musicToggle';
import { addInfoInLocalStorage } from './localStorage';
import { openAllBombs } from './openAllBombs';
import { startFinishTimer } from './timer';

export function loseGame() {
  const BODY = document.querySelector('body');
  const overlay = document.createElement('div');
  overlay.className = 'overlay overlay_open';

  const modalWindow = document.createElement('div');
  modalWindow.className = 'modal-window';

  const modalWindowContent = document.createElement('p');
  modalWindowContent.innerText = 'Game over. Try again';

  const modalWindowButton = document.createElement('div');
  modalWindowButton.className = 'button loseWindowButton';
  modalWindowButton.innerText = 'New game';

  modalWindow.appendChild(modalWindowContent);
  modalWindow.appendChild(modalWindowButton);

  overlay.appendChild(modalWindow);
  BODY.appendChild(overlay);

  const audio = new Audio('../../public/game-over.mp3');
  if (musicON) {
    audio.play();
  }

  addInfoInLocalStorage(false);
  openAllBombs();
  startFinishTimer('finish', 0);

  document.querySelector('.loseWindowButton').addEventListener('click', () => {
    startNewGame();
  });
}

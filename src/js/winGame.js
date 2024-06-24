import { time } from './timer';
import { startFinishTimer } from './timer';
import { startNewGame } from './startNewGame';
import { musicON } from './musicToggle';
import { addInfoInLocalStorage } from './localStorage';

export function winGame() {
  const BODY = document.querySelector('body');
  const overlay = document.createElement('div');
  overlay.className = 'overlay overlay_open';

  const modalWindow = document.createElement('div');
  modalWindow.className = 'modal-window';

  const modalWindowContent = document.createElement('p');

  const countSteps = document.querySelector('.count').innerText;

  modalWindowContent.innerText = `Hooray! You found all mines in ${time} seconds and ${countSteps} moves!`;

  const modalWindowButton = document.createElement('div');
  modalWindowButton.className = 'button loseWindowButton';
  modalWindowButton.innerText = 'New game';

  modalWindow.appendChild(modalWindowContent);
  modalWindow.appendChild(modalWindowButton);

  overlay.appendChild(modalWindow);
  BODY.appendChild(overlay);

  addInfoInLocalStorage([time, countSteps]);

  startFinishTimer('finish');
  time = 0;

  const audio = new Audio('../../public/win-game.mp3');
  if (musicON) {
    audio.play();
  }

  document.querySelector('.loseWindowButton').addEventListener('click', () => {
    startNewGame();
  });
}

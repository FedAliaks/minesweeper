import { addElement } from './createPage';

export function openStatistic() {
  const arr = JSON.parse(localStorage.getItem('resultGame'));

  const BODY = document.querySelector('body');
  const overlay = document.createElement('div');
  overlay.className = 'overlay overlay_open';

  const modalWindow = document.createElement('div');
  modalWindow.className = 'modal-window result-window';

  arr.reverse().forEach((item, index) => {
    const obj = JSON.parse(item);
    const result = addElement('div', ['result-item'], '');
    result.appendChild(
      addElement('div', ['result-content'], `${index + 1}. Date: ${obj.data}`),
    );
    result.appendChild(
      addElement('div', ['result-content'], `Time: ${obj.time}`),
    );
    result.appendChild(
      addElement('div', ['result-content'], `Result: ${obj.result}`),
    );
    modalWindow.appendChild(result);
  });
  modalWindow.appendChild(
    addElement('div', ['button', 'button-statistic'], 'Back'),
  );
  overlay.appendChild(modalWindow);

  BODY.appendChild(overlay);

  const BACK_BUTTON = document.querySelector('.button-statistic');
  BACK_BUTTON.addEventListener('click', () => {
    BODY.removeChild(overlay);
  });
}

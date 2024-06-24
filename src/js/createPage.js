export function createPage(obj) {
  const { size, minesCount } = obj;
  const BODY = document.querySelector('body');
  BODY.appendChild(addElement('h1', ['title', 'title1'], 'Minesweeper'));

  const buttonsBlock = addElement('div', ['buttons-block'], '');
  buttonsBlock.appendChild(
    addElement('div', ['button', 'check-win'], 'Check Win'),
  );
  buttonsBlock.appendChild(
    addElement('div', ['button', 'new-game'], 'New Game'),
  );

  const time = addElement('div', ['timer_container'], '');
  time.appendChild(addElement('p', ['content'], 'Time:'));
  time.appendChild(addElement('p', ['timer'], '0:00'));
  buttonsBlock.appendChild(time);

  const steps = addElement('div', ['countSteps'], '');
  steps.appendChild(addElement('p', ['content'], 'Moves made:'));
  steps.appendChild(addElement('p', ['count'], '0'));
  buttonsBlock.appendChild(steps);

  BODY.appendChild(buttonsBlock);

  const levelBlock = addElement('div', ['level-block'], '');

  const level = addElement('div', ['level-container'], '');
  level.appendChild(
    addElement(
      'div',
      ['button', 'level-button', 'level-button_active'],
      '10 x 10',
    ),
  );
  level.appendChild(addElement('div', ['button', 'level-button'], '15 x 15'));
  level.appendChild(addElement('div', ['button', 'level-button'], '25 x 25'));

  levelBlock.appendChild(level);
  BODY.appendChild(levelBlock);

  const minesCountBlock = addElement('div', ['mines-count-block'], '');

  const formBlock = addElement('div', ['form-block'], '');

  formBlock.appendChild(
    addElement('p', ['content'], 'Count mines on the field:'),
  );

  const form = addElement('input', ['input-form'], '');
  form.setAttribute('type', 'number');
  form.setAttribute('min', '10');
  form.setAttribute('max', '99');
  form.setAttribute('placeholder', '10');

  formBlock.appendChild(form);

  minesCountBlock.appendChild(formBlock);
  minesCountBlock.appendChild(
    addElement(
      'p',
      ['count-flag', 'content'],
      `You found out 0 bombs of ${minesCount}`,
    ),
  );
  minesCountBlock.appendChild(
    addElement('div', ['button', 'music-toggle', 'music-on'], 'Music on'),
  );

  BODY.appendChild(minesCountBlock);

  const statistic = addElement('div', ['statistic-container'], '');
  statistic.appendChild(
    addElement('div', ['button', 'last-result'], 'Last results'),
  );
  statistic.appendChild(
    addElement('div', ['button', 'save-game'], 'Save game'),
  );
  statistic.appendChild(
    addElement('div', ['button', 'load-game'], 'Load game'),
  );
  statistic.appendChild(addElement('div', ['button', 'dark-button'], 'Dark'));

  BODY.appendChild(statistic);
}

export function addElement(tag, classArrays, content) {
  const elem = document.createElement(tag);
  classArrays.forEach((item) => {
    elem.classList.add(item);
  });
  elem.innerHTML = content;
  return elem;
}

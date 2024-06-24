export function changeDarkLight() {
  const DARK_BUTTON = document.querySelector('.dark-button');
  DARK_BUTTON.innerHTML === 'Dark'
    ? (DARK_BUTTON.innerHTML = 'Light')
    : (DARK_BUTTON.innerHTML = 'Dark');
  document.querySelector('body').classList.toggle('body-dark');
  document.querySelector('.title').classList.toggle('title-dark');
  document.querySelector('.count').classList.toggle('count-dark');
  document.querySelector('.timer').classList.toggle('timer-dark');
  document.querySelectorAll('.button').forEach((item) => {
    item.classList.toggle('button-dark');
  });
  document.querySelectorAll('.box').forEach((item) => {
    item.classList.toggle('box-dark');
  });
  document.querySelectorAll('.content').forEach((item) => {
    item.classList.toggle('content-dark');
  });
}

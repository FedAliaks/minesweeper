export let musicON = true;

export function toggleMusic() {
  const MUSIC_BUTTON = document.querySelector('.music-toggle');
  if (MUSIC_BUTTON.innerText === 'Music on') {
    MUSIC_BUTTON.innerText = 'Music off';
    musicON = false;
  } else {
    MUSIC_BUTTON.innerText = 'Music on';
    musicON = true;
  }

  MUSIC_BUTTON.classList.toggle('music-on');
  MUSIC_BUTTON.classList.toggle('music-off');
}

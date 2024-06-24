let timerId;
let time;

export function startFinishTimer(status, startTime) {
  const TIMER = document.querySelector('.timer');
  if (status === 'start') {
    timerId = null;
    time = startTime || 0;
    timerId = setInterval(() => {
      time++;
      TIMER.innerText = `${Math.floor(time / 60)}:${('0' + (time % 60)).slice(-2)}`;
    }, 1000);
  } else if (status === 'finish') {
    clearInterval(timerId);
  } else {
    clearInterval(timerId);
  }
}

export { time };

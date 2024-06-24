export function addInfoInLocalStorage(resultGame) {
  const newObj = {};

  const data = new Date();
  const day = ('0' + data.getDate()).slice(-2);
  const month = ('0' + data.getMonth()).slice(-2);
  const hours = ('0' + data.getHours()).slice(-2);
  const minutes = ('0' + data.getMinutes()).slice(-2);

  newObj.data = day + '-' + month;
  newObj.time = hours + ':' + minutes;
  if (resultGame === false) {
    newObj.result = 'You lose';
  } else {
    newObj.result = `You won (${resultGame[0]} seconds, ${resultGame[1]} steps)`;
  }

  let tempJSON = JSON.stringify(newObj);

  if (!localStorage.getItem('resultGame')) {
    const arr = [];
    arr.push(tempJSON);
    localStorage.setItem('resultGame', JSON.stringify(arr));
  } else {
    let arr = JSON.parse(localStorage.getItem('resultGame'));
    arr.push(tempJSON);
    if (arr.length > 10) {
      arr = arr.slice(-10);
    }
    localStorage.setItem('resultGame', JSON.stringify(arr));
  }
}

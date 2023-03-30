const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let timer;
    let hour;
    let min;
    let sec;
    timer = setInterval (function () {
      hour = Math.floor(seconds / 60 / 60);
      min = Math.floor(seconds/60) - (hour * 60);
      sec = seconds%60;
      if (seconds < 0) {
        clearInterval(timer);
        timerEl.textContent = 'Время вышло!';
        buttonEl.disabled = false;
      } else {
        buttonEl.disabled = true;
        timerEl.textContent = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
      }
      console.log(hour, min, sec);
      seconds--;
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  if (isNaN(inputEl.value)) {
    inputEl.value = inputEl.value.slice(0, -1)
  }
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
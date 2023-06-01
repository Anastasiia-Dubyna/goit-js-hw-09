let btnStart = document.querySelector('button[data-start]');
let btnStop = document.querySelector('button[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick(event) {
  btnStart.disabled = true;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStop.disabled = false;
}

btnStop.addEventListener('click', onBtnStopClick);

function onBtnStopClick(event) {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
};

btnStop.disabled = true;
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

const newYear = "1 jan 2023";

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const base = Math.floor((newYearDate - currentDate) / 1000);

  const day = Math.floor(base / 3600 / 24);
  const hour = Math.floor(base / 3600) % 24;
  const minute = Math.floor(base / 60) % 60;
  const second = Math.floor(base % 60);

  daysEl.innerText = zeroaEsquerda(day);
  hoursEl.innerText = zeroaEsquerda(hour);
  minutesEl.innerText = zeroaEsquerda(minute);
  secondsEl.innerText = zeroaEsquerda(second);
}

function zeroaEsquerda(time) {
    return time < 10 ? `0${time}`: time
}


countdown();

setInterval(countdown, 1000)

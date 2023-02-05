import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysNumber = document.querySelector('[data-days]');
const hoursNumber = document.querySelector('[data-hours]');
const minutesNumber = document.querySelector('[data-minutes]');
const secondsNumber = document.querySelector('[data-seconds]');

startBtn.disabled = true;

let ms = null;
let timerID = null;

let timerEl = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      alert('Please choose a date in the future');
      startBtn.disabled = true;
      return;
    }
    startBtn.disabled = false;
    ms = selectedDates[0].getTime() - options.defaultDate;
  },
};

flatpickr(input, options);

startBtn.addEventListener('click', onClickStartBtn);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  timerEl.days = Math.floor(ms / day);
  timerEl.hours = Math.floor((ms % day) / hour);
  timerEl.minutes = Math.floor(((ms % day) % hour) / minute);
  timerEl.seconds = Math.floor((((ms % day) % hour) % minute) / second);
}

function onClickStartBtn() {
  timerID = setInterval(() => {
    convertMs(ms);
    const { days, hours, minutes, seconds } = timerEl;
    daysNumber.textContent = days;
    hoursNumber.textContent = hours;
    minutesNumber.textContent = minutes;
    secondsNumber.textContent = seconds;
  }, 1000);
  // stopTimer();
}

// function startTimer() {}
// function stopTimer() {
//   if (ms <= 0) {
//     clearInterval(timerID);
//   }
// }

// function addLeadingZero(value)

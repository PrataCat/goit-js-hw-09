import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysNumber = document.querySelector('[data-days]');
const hoursNumber = document.querySelector('[data-hours]');
const minutesNumber = document.querySelector('[data-minutes]');
const secondsNumber = document.querySelector('[data-seconds]');

startBtn.disabled = true;

let ms = null;
let counterID = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.init({
        position: 'center-top',
        fontSize: '16px',
      });
      Notiflix.Notify.warning('Please choose a date in the future');

      startBtn.disabled = true;
      return;
    } else {
      startBtn.disabled = false;
      const selectedTime = selectedDates[0].getTime();

      startBtn.addEventListener('click', () => {
        counterID = setInterval(() => {
          ms = selectedTime - Date.now();
          if (ms <= 0) {
            clearInterval(counterID);
            return;
          }
          convertMs(ms);
          startBtn.disabled = true;
        }, 1000);
      });
    }
  },
};

flatpickr(input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  daysNumber.textContent = addZero(Math.floor(ms / day));
  hoursNumber.textContent = addZero(Math.floor((ms % day) / hour));
  minutesNumber.textContent = addZero(Math.floor(((ms % day) % hour) / minute));
  secondsNumber.textContent = addZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
}

function addZero(value) {
  return String(value).padStart(2, 0);
}

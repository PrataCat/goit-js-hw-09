import Notiflix from 'notiflix';
Notiflix.Notify.init({
  timeout: 4000,
  clickToClose: true,
});

const formField = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

let promiseСounter = 1;
let delayTime = 0;
let stepTime = 0;
let amountNumber = 0;

formField.addEventListener('change', () => {
  delayTime = +delay.value;
  stepTime = +step.value;
  amountNumber = +amount.value;
});

formField.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  actingPromise();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

function actingPromise() {
  const PromiseTimerId = setInterval(() => {
    if (promiseСounter <= amountNumber) {
      createPromise(promiseСounter, delayTime)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        })
        .finally(() => {
          promiseСounter += 1;
          delayTime += stepTime;
        });
    } else {
      clearInterval(PromiseTimerId);
      promiseСounter = 1;
      // delayTime = 0;
      // stepTime = 0;
      // amountNumber = 0;
      formField.reset();
    }
  }, delayTime);
}

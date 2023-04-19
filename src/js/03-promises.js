import Notiflix from 'notiflix';

const form = document.querySelector('.form');


form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  
  let delay = Number(form.delay.value);

  for (let i = 0; i <= form.amount.value; i += 1) {
    form.setAttribute('disabled', 'disabled');
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
    delay += Number(form.step.value);
  }
}

function createPromise(position, delay) {
  const data = { position, delay };
  const shouldResolve = Math.random() > 0.3;

  return new Promise((res, rej) => {
    setTimeout(() => {
   if (shouldResolve) {
    // Fulfill
     res(data);
   } else {
    // Reject
     rej(data);
  }
    }, delay)
  })
  
}

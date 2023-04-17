import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';


const button = document.querySelector('[data-start]')
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      chosenDate(selectedDates[0]);
      
  },
};
flatpickr('#datetime-picker', options);

let timeDifference = 0;
let setTimer = null;
let formatDate = null;



function chosenDate(selectedDates) {
    const currentDate = Date.now();
    if (selectedDates < currentDate) {
        button.setAttribute('disabled', true);
        Notiflix.Notify.failure('Please choose a date in the future');
    } else {
        button.removeAttribute(('disabled'));
    }

    timeDifference = selectedDates.getTime() - currentDate;
    formatDate = convertMs(timeDifference);
    addLeadingZero(formatDate);

}

function addLeadingZero(formatDate) {
  days.textContent = formatDate.days;
  hours.textContent = formatDate.hours;
  minutes.textContent = formatDate.minutes;
  seconds.textContent = formatDate.seconds;
}


button.addEventListener('click', onClick);

function onClick() {
    setTimer = setInterval(startTimer, 1000);
}


function startTimer() {
     
     timeDifference -= 1000;

         if (seconds.textContent <= 0 && minutes.textContent <= 0) {
           clearInterval(setTimer);
         } else {
           formatDate = convertMs(timeDifference);
           addLeadingZero(formatDate);
         }
    }



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}





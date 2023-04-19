const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const documentColor = document.body;

let timerId = null;
startBtn.addEventListener('click', () => {  
    timerId = setInterval(() => {
       documentColor.style.backgroundColor = getRandomHexColor(); 
    }, 1000)
   startBtn.setAttribute('disabled', 'disabled');
    // startBtn.removeAttribute('disable');
});
stopBtn.addEventListener('click', onStop);


function onStop() {
    stopBtn.setAttribute('disabled', 'disabled');
    startBtn.removeAttribute('disabled');
    clearInterval(timerId); 
}

stopBtn.removeAttribute('disabled');




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

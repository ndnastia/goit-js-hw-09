const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const documentColor = document.body;

startBtn.addEventListener('click', () => {
   timerId = setInterval(() => {
        documentColor.style.backgroundColor = getRandomHexColor();
    }, 1000)  
});
stopBtn.addEventListener('click', onStop);


function onStop() {
    clearInterval(timerId);
    documentColor.style.backgroundColor = 'white';
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

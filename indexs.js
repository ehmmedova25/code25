const numDisplay = document.getElementById('num');
const decreaseBtn = document.getElementById('DECREASE');
const resetBtn = document.getElementById('RESET');
const increaseBtn = document.getElementById('INCREASE');

let count = 0;

decreaseBtn.addEventListener('click', () => {
    count--; 
    numDisplay.textContent = count; 
});

resetBtn.addEventListener('click', () => {
    count = 0; 
    numDisplay.textContent = count; 
});

increaseBtn.addEventListener('click', () => {
    count++;
    numDisplay.textContent = count; 
});
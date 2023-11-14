// Homework 1
// Task 1

const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailSpan = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)) {
        gmailSpan.innerHTML = 'OK';
        gmailSpan.style.color = 'green';
    } else {
        gmailSpan.innerHTML = 'NOT OK';
        gmailSpan.style.color = 'red';
    }
})

// Task 2

const square = document.querySelector('.child_block');
let positionX = 0;
let positionY = 0;

const moveSquare = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++;
        square.style.left = `${positionX}px`;
        setTimeout(moveSquare, 10);
    } else if (positionX >= 448 && positionY < 448) {
        positionY++;
        square.style.top = `${positionY}px`;
        setTimeout(moveSquare, 10);
    } else if (positionX > 0 && positionY >= 448) {
        positionX--;
        square.style.left = `${positionX}px`;
        setTimeout(moveSquare, 10);
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
        square.style.top = `${positionY}px`;
        setTimeout(moveSquare, 10);
    }
}

moveSquare();


// Homework 2


const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const seconds = document.querySelector('#secondsS');
let num = 0;
let interval;
let isRunning = false;

start.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            num++;
            seconds.innerHTML = num;
        }, 1000);
    }
});

stop.addEventListener('click', () => {
    clearInterval(interval);
    isRunning = false;
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    isRunning = false;
    num = 0;
    seconds.innerHTML = num;
});
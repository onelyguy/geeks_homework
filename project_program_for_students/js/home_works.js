// Homework 1
// Task 1

const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailSpan = document.querySelector('#gmail_result');

const regExp = /@gmail.com$/

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
let movement = 0;

const moveSquare = () => {
    if (movement < 448) {
        movement++
        square.style.left = `${movement}px`
        setTimeout(moveSquare, 10)
    }
}

moveSquare();

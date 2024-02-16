
const text = document.querySelector('h1');
const button = document.querySelector('#btn');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function rgbFounder() {
    const num1 = getRandomInt(255);
    const num2 = getRandomInt(255);
    const num3 = getRandomInt(255);
    const newText = `rgb(${num1}, ${num2}, ${num3})`;
    document.getElementById('test').style.backgroundColor = newText;
    text.innerText = newText;  
}

button.addEventListener('click', rgbFounder);








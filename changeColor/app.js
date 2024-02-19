
const text = document.querySelector('h1');
const button = document.querySelector('#btn');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function checkLevel(num1,num2,num3){
    if((num1<20)|| (num2<20) || (num3<20)){
        return 0;
    } else{
        return 1;
    }
}

function rgbFounder() {
    const num1 = getRandomInt(255);
    const num2 = getRandomInt(255);
    const num3 = getRandomInt(255);
    const newText = `rgb(${num1}, ${num2}, ${num3})`;
    document.getElementById('test').style.backgroundColor = newText;
    const control = checkLevel(num1,num2,num3);
    text.innerText = newText;
    if (control === 0){
        text.style.color = "rgb(248, 252, 255)";  
    } else{
        text.style.color = "rgb(1, 14, 20)";
    }
      
}
    

button.addEventListener('click', rgbFounder);








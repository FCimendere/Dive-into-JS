let maximum = prompt("enter the maximum number: ");
while(!maximum) {
    maximum = parseInt(prompt("Enter a valid number: "));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum)

let guess = prompt("Enter your first guess: ");
let howManyGuess = 1

while (parseInt(guess) !== targetNum){
    if (guess === "q") break;
    howManyGuess ++;
    if (parseInt(guess) > targetNum){
        guess =parseInt(prompt("Too High! Enter your new guess: "));
    } else {
        guess =parseInt(prompt("Too Low! Enter your new guess: "));
    }
}
console.log("You got it!")
    
if (guess === "q"){
    console.log(" You Quit! See you again!");
}else{
    console.log("CONGRATS")
    console.log(`Your guess is: ${guess} - You guessed it in your ${howManyGuess} time.`);
}

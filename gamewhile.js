let target = Math.floor(Math.random() * 20) + 1;

let attempts = 0;
let guess = 0;

while (guess !== target) {
    guess = Number(prompt("Guess a number between 1 and 20"));
    attempts++;

    // if(input === null || input.trim()===""){
    //     alert("Please enter a number. Don't leave it blank.");
    //     continue;
    // }

    if (isNaN(guess) || guess < 1 || guess > 20) {
        alert("🚫 Invalid input! Please enter a number between 1 and 20.");
         continue;
    }

    if (guess < target) {
        alert("Too low! Try again.");
    }
    else if (guess > target) {
        alert("Too high! Try again");
    }
    else {
        alert(`🎉 Correct! You guessed the number in ${attempts} attempts.`);
    }
}

let playPartTwo = prompt("Wanna try Part Two (with only 5 chances)? Type Yes or No:");

if(playPartTwo && playPartTwo.toLowerCase() === "yes"){
    let target = Math.floor(Math.random()*20)+1;
let guess;
let maxAttempts = 5;

for (let i=1; i<=maxAttempts; i++){
    let input = prompt(` Enter a number between 1 and 20:`);

    guess = Number(input);

    if(isNaN(guess) || guess<1 || guess>20){
        alert("Invalid input! Please enter a number between 1 and 20.");
        i--;
        continue;
    }
    if(guess<target){
        alert(`Too low! You have ${maxAttempts - i} guesses left.`);
    }
    else if(guess>target){
        alert(`Too high! You have ${maxAttempts-i} guesses left.`)
    }
    else{
        alert(`🎉 Correct! You guessed the number in ${attempts} attempts.`);
    break;
    }
    if(i === maxAttempts){
        alert(`❌ Oops! You've run out of guesses. The number was ${target}.`)
    }
}
}
else{
    alert("👋 Thanks for playing! See you next time.");
}

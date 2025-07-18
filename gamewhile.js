// --- PART ONE: Unlimited attempts ---
let target = Math.floor(Math.random() * 20) + 1;
let attempts = 0;
let guess = 0;

while (guess !== target) {
    let input = prompt("🎯 Guess a number between 1 and 20:");
    
    if (input === null || input.trim() === "") {
        alert("🚫 Please enter a number. Don't leave it blank.");
        continue;
    }

    guess = Number(input);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 20) {
        alert("🚫 Invalid input! Please enter a number between 1 and 20.");
        continue;
    }

    if (guess < target) {
        alert("📉 Too low! Try again.");
    } else if (guess > target) {
        alert("📈 Too high! Try again.");
    } else {
        alert(`🎉 Correct! You guessed the number in ${attempts} attempt(s).`);
    }
}

// --- ASK IF USER WANTS TO PLAY PART TWO ---
let playPartTwo;

while (true) {
    playPartTwo = prompt("✨ Wanna try Part Two (with only 5 chances)? Type Yes or No:");

    if (playPartTwo === null) {
        alert("👋 Game ended.");
        break;
    }

    playPartTwo = playPartTwo.trim().toLowerCase();

    if (playPartTwo === "yes") {
        // --- PART TWO: Limited attempts (5 max) ---
        let target = Math.floor(Math.random() * 20) + 1;
        let guess;
        let maxAttempts = 5;

        for (let i = 1; i <= maxAttempts; i++) {
            let input = prompt(`🔁 Attempt ${i} of ${maxAttempts} — Enter a number between 1 and 20:`);

            if (input === null || input.trim() === "") {
                alert("🚫 Please enter a number. Don't leave it blank.");
                i--;
                continue;
            }

            guess = Number(input);

            if (isNaN(guess) || guess < 1 || guess > 20) {
                alert("🚫 Invalid input! Please enter a number between 1 and 20.");
                i--;
                continue;
            }

            if (guess < target) {
                alert(`📉 Too low! You have ${maxAttempts - i} guess(es) left.`);
            } else if (guess > target) {
                alert(`📈 Too high! You have ${maxAttempts - i} guess(es) left.`);
            } else {
                alert(`🎯 Correct! You guessed the number in ${i} attempt(s)!`);
                break;
            }

            if (i === maxAttempts) {
                alert(`❌ Game Over! You've used all ${maxAttempts} attempts. The correct number was ${target}.`);
            }
        }
        break; // Exit loop after finishing part two
    } else if (playPartTwo === "no") {
        alert("👋 Thanks for playing! See you next time.");
        break;
    } else {
        alert("❓ Please type *Yes* or *No*.");
    }
}

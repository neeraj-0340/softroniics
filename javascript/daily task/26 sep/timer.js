function guessnumber() {
    const target=Math.floor(Math.random()*100)+1;
    let chances =0;
    const maxchance=10;

    
    while (chances < maxchance) {
        let userinput=prompt("enter a number between 1 and 100 :");
        let guess=Number(userinput);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log("invalid");
            console.log("enter another number");
            continue;
        }

        chances += 1;

        if (guess > target) {
            console.log("go for a lower value");
        }
        else if (guess < target) {
            console.log("go for a higher");
        }
        else (guess == target) {
            console.log("sheri aan ");
            return;
        }

        if (chances === maxchance) {
            console.log("max number of chances reached the actual number was");
            console.log(`${target}`);
            
            
            
        }
    }
}
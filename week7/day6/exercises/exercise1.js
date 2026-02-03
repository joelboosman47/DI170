// 🌟 Exercise 1 : Find the numbers divisible by 23
// Instructions
// Create a function call displayNumbersDivisible() that takes no parameter.
function displayNumbersDivisible(divisor){ // (added the bonus parameter)
    let sum = 0; // keep track of the sum to log it later.
    // In the function, loop through numbers 0 to 500.
    for (let n = 0; n < 500; n++){
        // Console.log all the numbers divisible by 23.
        if (n % divisor == 0){ // use the modulo % and check if it equals 0. That means it is devisible.
            console.log(n);
            sum += n;
        }
    }
    // At the end, console.log the sum of all numbers that are divisible by 23.
    console.log(`Sum: ${sum}`);
}

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313

// Bonus: Add a parameter divisor to the function.
displayNumbersDivisible(23);
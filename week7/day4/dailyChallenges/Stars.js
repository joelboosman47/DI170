// Daily challenge: Stars

// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.

// one loop:
let pattern = "";
for (let i = 0; pattern.length < 11; i++){
    pattern += "* "; 
    console.log(pattern.trim());
}

//nested loop:
for (let i = 0; i < 6; i++) {  // Outer loop for rows 
    let row = "";  // Reset row for each line
    for (let j = 0; j <= i; j++) {  // Inner loop for stars in each row
        row += "* ";
    }
    console.log(row.trim());  // Print the row and trim trailing space
}
// 🌟 Exercise 1 : List of people
// Instructions
const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review about arrays
// Write code to remove “Greg” from the people array.
people.splice(0, 1);

// Write code to replace “James” to “Jason”.
people[2] = 'Jason';

// Write code to add your name to the end of the people array.
people.push('Joel');

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
let newPeople = people.slice(1,-1);

// Write code that gives the index of “Foo”. Why does it return -1 ?
let indexFoo = people.indexOf("Foo"); //returns -1 because it doesn´t exist in the array.

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people[people.length-1];

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (i in people){
    console.log(people[i]);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for (i in people){
    console.log(people[i]);
    if (people[i] === 'Devon'){break}
}

/* 🌟 Exercise 2 : Your favorite colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
*/
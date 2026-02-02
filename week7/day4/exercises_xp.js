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

// 🌟 Exercise 2 : Your favorite colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
let colors = ['green', 'blue', 'orange', 'purple', 'white'];

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

const suffix = ['1st', '2nd', '3rd', '4th', '5th'];

for (let i in colors){
    console.log(`My ${suffix[i]} choice is: ${colors[i]}`);
}

// 🌟 Exercise 3 : Repeat the question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

let userInput;
do {
    userInput = parseInt(window.prompt("Please enter a number"));
} while (userInput < 10);

// 🌟 Exercise 4 : Building Management
// Review about objects

// Copy and paste the above object to your Javascript file.
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
let a = typeof(building);

// Console.log the number of floors in the building.
console.log(building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3.
console.log(
    `Number of apts on the first floor: ${building.numberOfAptByFloor.firstFloor}
Number of apts on the third floor: ${building.numberOfAptByFloor.thirdFloor}`
);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`Second tenant name: ${building.nameOfTenants[1]}
    Number of rooms: ${building.numberOfRoomsAndRent.dan[0]}`);
    
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let sumRentSarahDavid = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];

if (sumRentSarahDavid > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
const family = {
    name: "Boosman",
    father: "Joël",
    mother: "Elvira",
    children: {
        nrOfChildren: 2,
        namesOfChildren: ["Avigail", "Yosef Chaim"],
        namesAndAgesOfChilderen: {
            Avigail: 2,
            YosefChaim: 0
        }
    }
}
// Using a for in loop, console.log the keys of the object.
for (let key in family){
    console.log(`Key: ${key}`)
    
    // Using a for in loop, console.log the values of the object.
    console.log(`Value: ${family[key]}`)
}

// Exercise 6 : Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
let result = '';
for (let key in details){
    result += key + " ";
    result += details[key] + " ";
}
console.log(result);

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
let secretSociety = '';
names.sort()
for (let n in names){
    secretSociety += names[n][0];
}

// 2. Console.log the name of their secret society. The output should be “ABJKPS”
console.log(secretSociety);
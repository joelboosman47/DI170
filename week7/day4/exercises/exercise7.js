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
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
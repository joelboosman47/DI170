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
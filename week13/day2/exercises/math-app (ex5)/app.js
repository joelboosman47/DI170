const lodash = require("lodash");
const { addition, multiply } = require("./math.js");

const addOneTwo = addition(1, 2);
const multplTwoFour = multiply(2, 4);

// log the results to test
console.log(`addition(1, 2) => ${addOneTwo}`);
console.log(`multiply(2, 4) => ${multplTwoFour}`);

const lodashAddOneTwo = lodash.add(1, 2);
const lodashMultplTwoFour = lodash.multiply(2, 4);

// log the results to test again
console.log(`lodash.add(1, 2) => ${lodashAddOneTwo}`);
console.log(`lodash.multiply(2, 4) => ${lodashMultplTwoFour}`);

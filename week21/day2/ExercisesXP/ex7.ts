// 🌟 Exercise 7: Type Assertions
// What You Will Learn:

// How to use type assertions in TypeScript to cast an element to a specific type.
// How to access and manipulate properties of an HTML element after casting.

// Description:
// In this exercise, you’ll learn how to use type assertions to cast an HTML element to a specific type in TypeScript. This allows you to safely access and manipulate properties of the element.

// Instructions
// Get an Element from the DOM:
// Use document.getElementById() to retrieve an HTML element from the DOM.
let element = document.getElementById('id1');

// Use Type Assertion:
// Apply a type assertion to cast the element to a specific HTML element type, such as HTMLInputElement.
let myElem = element as HTMLInputElement;

// Access the Element’s Properties:
// Once cast, use the properties of the specific element type, like setting the value of an input element.
myElem.value = 'Hello!';

// Test the Functionality:

// Ensure that you can successfully set or manipulate a property of the element.
// Additional Notes:

// Type assertions are a powerful way to let TypeScript know more about the type of an element when you’re certain of it. However, you should use them cautiously, as incorrect assertions can lead to runtime errors if the type is not as expected.
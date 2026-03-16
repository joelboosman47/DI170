import TodoList from "./todo.js";

const myToDoList = new TodoList();

// add a task
myToDoList.addTask("Do dishes");
// add another task
myToDoList.addTask("Finish coding exercises");
// add another task
myToDoList.addTask("Write letter to company");

// mark the second and third as complete.
myToDoList.markTaskComplete(1);
myToDoList.markTaskComplete(2);

// list tasks
const tasks = myToDoList.listTasks();
console.log(tasks);

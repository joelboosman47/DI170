class TodoList {
	constructor() {
		this.tasks = [];
	}

	addTask(description) {
		const task = {
			description,
			completed: false,
		};
		this.tasks.push(task);
	}

	markTaskComplete(index) {
		if (index >= 0 && index < this.tasks.length) {
			this.tasks[index].completed = true;
		}
	}

	listTasks() {
		return this.tasks.map((task, idx) => ({
			index: idx,
			description: task.description,
			completed: task.completed,
		}));
	}
}

export default TodoList;

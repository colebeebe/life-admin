const todos = [
    {
	id: 1,
	title: "Study Japanese",
	finished: false,
	date: new Date(2025, 9, 27),
	notes: "Study for at least 15 minutes."
    },
    {
	id: 2,
	title: "Sort Laundry",
	finished: true,
	date: new Date(2025, 9, 27),
	notes: ""
    }
]

const main = document.querySelector("main");

todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.finished;

    const title = document.createElement("h1");
    title.innerText = todo.title;

    const formatter = Intl.DateTimeFormat("en-US", {
	weekday: "long",
	month: "long",
	day: "numeric",
	year: "numeric"
    });
    const date = document.createElement("h2");
    date.innerText = formatter.format(todo.date);

    const notes = document.createElement("p");
    notes.innerText = todo.notes;
    
    if (todo.finished) {
	title.classList.add("finished");
	date.classList.add("finished");
	notes.classList.add("finished");
    }

    todoItem.appendChild(checkbox);
    todoItem.appendChild(title);
    todoItem.appendChild(date);
    todoItem.appendChild(notes);

    main.appendChild(todoItem);
});

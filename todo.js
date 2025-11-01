const todos = [
    {
	id: 1,
	title: "Study",
	finished: false,
	date: new Date(2025, 9, 27),
	notes: "Study for at least 15 minutes."
    },
    {
	id: 2,
	title: "Sort Laundry As Soon as I can make it home",
	finished: true,
	date: new Date(2025, 9, 27),
	notes: ""
    }
]

const main = document.querySelector("main");
const footer = document.querySelector("footer");

// The formatter for the date
const formatter = Intl.DateTimeFormat("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric"
});

todos.forEach((todo) => {
    // Create the main todo element
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    // Create the checkbox element
    const checkbox = document.createElement("label");
    checkbox.classList.add("container");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.finished;
    checkbox.appendChild(input);
    const border = document.createElement("div");
    border.classList.add("checkmark-border");
    const checkmark = document.createElement("div");
    checkmark.classList.add("checkmark");
    border.appendChild(checkmark);
    checkbox.appendChild(border);

    // Create the title element
    const title = document.createElement("h1");
    title.innerText = todo.title;

    // Create the date element and format it
    const date = document.createElement("h2");
    date.innerText = formatter.format(todo.date);

    // Create the notes element
    const notes = document.createElement("p");
    notes.innerText = todo.notes;

    const header = document.createElement("div");
    header.classList.add("todo-header");
    header.appendChild(title);
    header.appendChild(date);
    
    // Now that we've created all of the elements, add them to the todo item
    todoItem.appendChild(checkbox);
    todoItem.appendChild(header);
    todoItem.appendChild(notes);

    // Finally, add the todo item into the DOM
    main.insertBefore(todoItem, footer);
});

const modal = document.createElement("dialog");
modal.innerHTML = `
<form>
    <div class="popup-box">
	<h1>New To-do</h1>
	<div id="todo-container">
	    <label for="todo">To-do</label>
	    <input 
		type="text"
		id="todo"
		name="todo"
		required
	    />
	</div>
	<div id="date-container">
	    <label for="due-date">Due Date</label>
	    <input 
		type="date"
		id="due-date"
		name="due-date"
		required
	    />
	</div>
	<div id="note-container">
	    <label for="note">Note</label>
	    <input 
		type="note"
		id="note"
		name="note"
		placeholder="(Optional)"
	    />
	</div>
	<div id="button-container">
	    <button id="save-button" class="btn-confirm">Save</button>
	    <button id="cancel-button" class="btn-deny">Cancel</button>
	</div>
    </div>
</form>
`;
main.appendChild(modal);
const today = new Date().toISOString().split("T")[0];

document.querySelector("#due-date").min = today;

const newButton = document.querySelector("#new-todo");
newButton.addEventListener("click", () => modal.showModal());

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
	modal.close();
    }
});

const cancelButton = document.querySelector("#cancel-button");
cancelButton.addEventListener("click", () => {
    modal.close()
});

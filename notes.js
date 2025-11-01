const notes = [
    {
	id: 1,
	title: "Notes on CSE 310 for module03",
	date: new Date(2025, 9, 30),
	content: "There are many things that still need to be worked on. A few of these things are as follows:<br><br> <ul> <li>look into the ability to save things locally</li> <li>Flesh out CRUD</li> <li>Implement a landing \"Home\" page</li> </ul>"
    },
    {
	id: 2,
	title: "A Secondary Note",
	date: null,
	content: "This is just a secondary note for now, just to make sure that spacing and other formatting things look ok."
    },
    {
	id: 3,
	title: "",
	date: null,
	content: "This is a tertiary note to test what it may look like without a title or date"
    },
    {
	id: 4,
	title: "Lorem Ipsum",
	date: new Date(2025, 9, 30),
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
	id: 5,
	title: "",
	date: new Date(2025, 9, 30),
	content: "This is a final note to see what it might look like with just a date"
    }
];

const main = document.querySelector("main");
const footer = document.querySelector("footer");

// The formatter for the date
const formatter = Intl.DateTimeFormat("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric"
});

notes.forEach((note) => {
    const noteItem = document.createElement("div");
    noteItem.classList.add("note-item");

    const title = document.createElement("h1");
    title.innerHTML = note.title;
    const date = document.createElement("h2");

    if (note.date !== null) {
	date.innerHTML = formatter.format(note.date);
    }

    if (note.title !== "" || note.date !== null) {
	const header = document.createElement("div");
	header.classList.add("note-header");
	header.appendChild(title);
	header.appendChild(date);
	noteItem.appendChild(header);
    }

    const content = document.createElement("p");
    content.innerHTML = note.content;
    noteItem.appendChild(content);

    main.insertBefore(noteItem, footer);
});

const modal = document.createElement("dialog");
modal.innerHTML = `
    <h1>Create New Note</h1>
    <label for="title">Title:</label>
    <input 
	type="text"
	id="title"
	name="title"
	placeholder="(Optional)"
    />
    <label for="content">Note:</label>
    <input 
	type="textarea" 
	id="content" 
	name="content" 
	placeholder="Begin typing..."
	required
    />
    <div id="action-buttons">
	<button id="save-button" class="btn-confirm">Save</button>
	<button id="cancel-button" class="btn-deny">Cancel</button>
    </div>
`;
document.body.appendChild(modal);

const newButton = document.querySelector("#new-button");
newButton.addEventListener("click", () => modal.showModal());

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
	modal.close();
    }
});

const cancelButton = document.querySelector("#cancel-button");
cancelButton.addEventListener("click", () => modal.close());

const saveButton = document.querySelector("#save-button");


// const textarea = document.getElementById("note-input");
// 
// document.addEventListener('keydown', function(event) {
//     if (document.activeElement !== textarea) {
// 	textarea.focus();
// 
// 	if (event.key.length === 1) {
// 	    textarea.value += event.key;
// 	}
// 
// 	event.preventDefault();
//     } 
// });

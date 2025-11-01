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
<form>
    <div class="popup-box">
	<h1>New Note</h1>
	<div id="date-container">
	    <div class="date-checkmark">
		<label for="date-toggle" class="container">
		    <input 
			type="checkbox"
			id="date-toggle"
			name="date-toggle"
		    />
		    <div class="checkmark-border">
			<div class="checkmark"></div>
		    </div> 
		</label>
		<p>Include Date</p>
	    </div>
	</div>
	<div id="title-container">
	    <label for="title">Title</label>
	    <input 
		type="text"
		id="title"
		name="title"
		placeholder="(Optional)"
	    />
	</div>
	<div id="content-container">
	    <label for="content">Note</label>
	    <textarea 
		id="content" 
		name="content" 
		placeholder="Begin typing..."
		required
	    ></textarea>
	</div>
	<div id="action-buttons">
	    <button id="save-button" class="btn-confirm">Save</button>
	    <button id="cancel-button" class="btn-deny">Cancel</button>
	</div>
    </div>
</form>
`;
main.appendChild(modal);
const dateToggle = document.querySelector("#date-toggle");
const titleElement = document.querySelector("#title");
const contentElement = document.querySelector("#content");
dateToggle.checked = true;

const newButton = document.querySelector("#new-button");
newButton.addEventListener("click", () => modal.showModal());

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
	modal.close();
	titleElement.value = "";
	contentElement.value = "";
	dateToggle.checked = true;
    }
});

const cancelButton = document.querySelector("#cancel-button");
cancelButton.addEventListener("click", () => {
    modal.close()
    titleElement.value = "";
    contentElement.value = "";
    dateToggle.checked = true;
});

// Temporarily start at 6 since we have hard-coded 5 notes in
let noteId = 6;
const saveButton = document.querySelector("#save-button");
saveButton.addEventListener("click", () => {
    if (!contentElement.checkValidity()) {
	return;
    }

    const newTitle = titleElement.value.trim();
    let newDate = null;
    if (dateToggle.checked) {
	newDate = new Date();
    }
    const newContent = contentElement.value.trim();
    const newNote = {
	id: noteId,
	title: newTitle,
	date: newDate,
	content: newContent
    };
    noteId++;
    notes.push(newNote);

    const noteItem = document.createElement("div");
    noteItem.classList.add("note-item");

    const title = document.createElement("h1");
    title.innerHTML = newTitle;
    const date = document.createElement("h2");

    if (newDate !== null) {
	date.innerHTML = formatter.format(newDate);
    }

    if (newTitle !== "" || newDate !== null) {
	const header = document.createElement("div");
	header.classList.add("note-header");
	header.appendChild(title);
	header.appendChild(date);
	noteItem.appendChild(header);
    }

    const content = document.createElement("p");
    content.innerHTML = newContent;
    noteItem.appendChild(content);

    main.insertBefore(noteItem, footer);

    modal.close();
    titleElement.value = "";
    contentElement.value = "";
    dateToggle.checked = true;
});


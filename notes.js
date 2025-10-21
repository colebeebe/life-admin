const textarea = document.getElementById("note-input");

document.addEventListener('keydown', function(event) {
    if (document.activeElement !== textarea) {
	textarea.focus();

	if (event.key.length === 1) {
	    textarea.value += event.key;
	}

	event.preventDefault();
    } 
});

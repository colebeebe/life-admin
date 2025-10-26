const button = document.querySelector("#menu-button");

button.addEventListener('click', () => {
    document.querySelector("main").classList.toggle("open");
    button.classList.toggle("open");
    if (button.classList.contains("open")) {
	button.innerHTML = "<";
    }
    else {
	button.innerHTML = "☰";
    }
});

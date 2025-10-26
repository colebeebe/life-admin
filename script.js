const button = document.querySelector("#menu-button");

button.addEventListener('click', () => {
    document.querySelector("main").classList.toggle("open");
});

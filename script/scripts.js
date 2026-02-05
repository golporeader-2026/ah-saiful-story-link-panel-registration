// Toggle menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        console.log("Menu toggled. Active class:", menu.classList.contains("active"));
    });
    console.log("Hamburger menu initialized successfully");
} else {
    console.error("Hamburger or menu element not found!");
    console.log("hamburger:", hamburger);
    console.log("menu:", menu);
}

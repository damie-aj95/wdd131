document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
    if (navList.classList.contains("show")) {
        menuToggle.innerHTML = "X";
    } else {
        menuToggle.innerHTML = "☰";
    }
});
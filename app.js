
const nav = document.querySelector(".nav-bar");
const hamburger = document.getElementById("hamburger");


hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
})

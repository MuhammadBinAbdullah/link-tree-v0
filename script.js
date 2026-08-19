/* =========================================================
   Muhammad — Linktree-style page
   script.js — JavaScript logic

   The original single-file version of this project contained
   no embedded <script> code — all behavior (entrance animations,
   hover states, responsive layout) is handled purely with CSS
   (animations, transitions, and a media query).

   This file is included so the project follows a standard
   HTML / CSS / JS structure and is ready for future
   interactivity (e.g. analytics, dynamic link data, theme
   toggles) without touching index.html or style.css.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // No functionality to initialize yet — reserved for future use.
});

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    } else {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");
    }
});


/* Remember user's choice */
if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
}

/* =========================================================
   ROTATING TEXT
   ========================================================= */

const rotatingText = document.getElementById("rotatingText");

const roles = [
    "Front-End Engineer",
    "Web Developer",
    "Game Developer",
    "Graphic Designer"
];

let roleIndex = 0;

setInterval(() => {

    roleIndex = (roleIndex + 1) % roles.length;

    rotatingText.style.animation = "none";

    void rotatingText.offsetWidth;

    rotatingText.textContent = roles[roleIndex];

    rotatingText.style.animation =
        "rotatingTextIn 0.6s ease";

}, 2000);

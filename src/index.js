import "./styles.css";
// PART I BASICS
const mainEL = document.querySelector("main");
mainEL.style.backgroundColor = "var(--main-bg)";
const h1 = document.createElement('h1');
h1.textContent = 'DOM Manipulation';
mainEL.appendChild(h1);
mainEL.classList.add('flex-ctr');

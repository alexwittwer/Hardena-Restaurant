import "./input.css";
import css from "./input.css";
import nav from "./modules/nav";
import home from "./modules/home";

const header = document.querySelector(".header");
const container = document.querySelector(".container");

header.appendChild(nav(container));
container.appendChild(home());

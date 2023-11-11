import "./input.css";
import css from "./input.css";
import nav from "./modules/nav";

const header = document.querySelector(".header");
const container = document.querySelector(".container");

header.appendChild(nav(container));

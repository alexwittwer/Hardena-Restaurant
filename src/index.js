import "./input.css";
import css from "./input.css";
import nav from "./modules/nav";
import home from "./modules/home";
import menu from "./modules/menu";
import events from "./modules/events";

const container = document.querySelector(".container");

function main() {
  return comp;
}

container.appendChild(nav()); /*
document.body.appendChild(about());
document.body.appendChild(menu());
document.body.appendChild(hours());
document.body.appendChild(events()); */
container.appendChild(home());

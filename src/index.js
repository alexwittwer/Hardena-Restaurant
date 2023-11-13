import "./input.css";
import nav from "./modules/nav";
import home from "./modules/home";
import Github from "./assets/github.svg";

const header = document.querySelector(".header");
const container = document.querySelector(".container");

header.appendChild(nav(container));
container.appendChild(home());

// add github footer
const footer = document.createElement("footer");
const link = document.createElement("a");

link.href = "https://github.com/alexwittwer";
link.target = "_blank";
link.id = "github-link";

const githubber = new Image();
githubber.src = Github;
githubber.classList.add("github-icon");
githubber.alt = "Github Icon";

link.appendChild(githubber);
footer.appendChild(link);
document.body.appendChild(footer);

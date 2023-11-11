import home from "./home";
import about from "./about";
import menu from "./menu";
import events from "./events";

export default function nav(container) {
  const nav = document.createElement("nav");
  const homebtn = document.createElement("button");
  const menubtn = document.createElement("button");
  const aboutbtn = document.createElement("button");

  const navbuttons = [homebtn, menubtn, , aboutbtn];

  homebtn.textContent = "Home";
  menubtn.textContent = "Menu";
  aboutbtn.textContent = "About";

  // assign css classes, event listeners
  nav.classList.add("nav-bar");
  navbuttons.forEach((element) => {
    console.log(element.firstChild.data);
    element.classList.add("nav-btn", element.firstChild.data);
    element.addEventListener("click", (e) => {
      //clear content
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(selector[element.firstChild.data]);
    });
  });

  // append content
  navbuttons.forEach((element) => {
    nav.appendChild(element);
  });

  // dispatcher to display page
  const selector = {
    Home: home(),
    About: about(),
    Menu: menu(),
  };

  return nav;
}

export default function nav() {
  const nav = document.createElement("nav");
  const home = document.createElement("button");
  const menu = document.createElement("button");
  const events = document.createElement("button");

  const navbuttons = [home, menu, events];

  // assign css classes
  nav.classList.add("nav-bar");
  navbuttons.forEach((element) => {
    element.classList.add("nav-btn");
  });

  home.textContent = "Home";
  menu.textContent = "Menu";
  events.textContent = "Events";

  // append content
  navbuttons.forEach((element) => {
    nav.appendChild(element);
  });

  return nav;
}

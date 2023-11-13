import Logo from "../assets/hardena.gif";
import Food from "../assets/food.jpeg";

export default function home() {
  const home = document.createElement("section");
  const operation = document.createElement("section");
  const hours = document.createElement("ul");
  const days = document.createElement("ul");
  const daysInWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const timeOpen = [
    "Closed",
    "Closed",
    "12:00pm-8:00pm",
    "12:00pm-8:00pm",
    "12:00pm-8:00pm",
    "12:00pm-8:00pm",
    "12:00pm-8:00pm",
  ];
  const h1 = document.createElement("h1");
  const brand = document.createElement("div");

  hours.classList.add("section-time");
  days.classList.add("section-time");
  operation.classList.add("section-operation");
  home.classList.add("section-container");
  h1.classList.add("section-title");
  brand.classList.add("brand");

  h1.textContent = "Hardena";

  // create image
  const hardenaLogo = new Image();
  const hardenaFood = new Image();
  hardenaLogo.src = Logo;
  hardenaFood.src = Food;
  hardenaFood.classList.add("section-image");
  hardenaLogo.classList.add("main-logo");
  hardenaLogo.alt = "Hardena logo";
  hardenaFood.atl = "A spread of Indonesian food on a table";

  // append content add text

  daysInWeek.forEach((element) => {
    let elem = document.createElement("li");
    elem.textContent = `${element}`;
    days.appendChild(elem);
  });

  timeOpen.forEach((element) => {
    let elem = document.createElement("li");
    elem.textContent = `${element}`;
    hours.appendChild(elem);
  });

  operation.appendChild(days);
  operation.appendChild(hours);

  brand.appendChild(h1);
  brand.appendChild(hardenaLogo);

  home.appendChild(brand);
  home.appendChild(hardenaFood);
  home.appendChild(operation);

  return home;
}

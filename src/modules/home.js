import Logo from "../assets/hardena.gif";

export default function home() {
  // handle element creation
  const home = document.createElement("section");
  const bio = document.createElement("div");
  const about = document.createElement("h3");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const contact = document.createElement("div");
  const tel = document.createElement("p");
  const email = document.createElement("p");
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

  // handle css classes
  home.classList.add("section-container");
  about.classList.add("section-header");
  contact.classList.add("section-contact");
  hours.classList.add("section-time");
  days.classList.add("section-time");
  operation.classList.add("section-operation");
  bio.classList.add("section-bio");

  const modules = [about, p1, p2, p3, operation, contact]; // puts elements in array for appending later

  // create image
  const hardenaLogo = new Image();
  hardenaLogo.src = Logo;
  hardenaLogo.classList.add("main-logo");
  home.appendChild(hardenaLogo);

  //content
  about.textContent = "About Us";
  p1.textContent =
    "Established in 2001, Ena & Harry Widjojo initially opened Hardena/Warung Surabaya to cater to the abundant Indonesian migrant workers in South Philly. As the years passed by, word spread about a small & humble hole in the wall, cantina style eatery that served a range of foods that changed daily on a steam table accompanied by smiling faces of the whole family. Here people could discover a place and a meal that wasn't familiar but felt like home.";
  p2.textContent =
    "Prior to owning Hardena, Ena cooked and sold her dishes in the Indonesian consulate in New York City. There, her food journey in America began, inside the small cantina in the basement of the consulate. From there her talents for cooking were recognized. She has catered to former Indonesian President, Suharto and other Indonesian dignitaries, featured in tv programs back home in Indonesia and even on Anthony Bourdains show, The Layover.";
  p3.textContent =
    "Currently her daughters Diana and Maylia operate and run the restarant. She is now retired and enjoying her retirement with her grand daughter, Jalilah.";
  tel.textContent = "tel:  1.215.271.9442";
  email.textContent = "email:  hardenaphilly@gmail.com";

  // append content
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

  contact.appendChild(tel);
  contact.appendChild(email);

  modules.forEach((element) => {
    home.appendChild(element);
  });

  return home;
}

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

  hours.classList.add("section-time");
  days.classList.add("section-time");
  operation.classList.add("section-operation");
  home.classList.add("section-container");

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

  home.appendChild(operation);

  return home;
}

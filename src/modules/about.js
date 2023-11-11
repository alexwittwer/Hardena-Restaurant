export default function home() {
  // handle element creation
  const about = document.createElement("section");
  const bio = document.createElement("h3");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const contact = document.createElement("div");
  const tel = document.createElement("p");
  const email = document.createElement("p");

  // handle css classes
  about.classList.add("section-container");
  bio.classList.add("section-header");
  contact.classList.add("section-contact");

  const modules = [bio, p1, p2, p3, contact]; // puts elements in array for appending later

  //content
  bio.textContent = "About Us";
  p1.textContent =
    "Established in 2001, Ena & Harry Widjojo initially opened Hardena/Warung Surabaya to cater to the abundant Indonesian migrant workers in South Philly. As the years passed by, word spread about a small & humble hole in the wall, cantina style eatery that served a range of foods that changed daily on a steam table accompanied by smiling faces of the whole family. Here people could discover a place and a meal that wasn't familiar but felt like home.";
  p2.textContent =
    "Prior to owning Hardena, Ena cooked and sold her dishes in the Indonesian consulate in New York City. There, her food journey in America began, inside the small cantina in the basement of the consulate. From there her talents for cooking were recognized. She has catered to former Indonesian President, Suharto and other Indonesian dignitaries, featured in tv programs back home in Indonesia and even on Anthony Bourdains show, The Layover.";
  p3.textContent =
    "Currently her daughters Diana and Maylia operate and run the restarant. She is now retired and enjoying her retirement with her grand daughter, Jalilah.";
  contact.textContent = "Contact Us";
  tel.textContent = "tel:  1.215.271.9442";
  email.textContent = "email:  hardenaphilly@gmail.com";

  contact.appendChild(tel);
  contact.appendChild(email);

  modules.forEach((element) => {
    about.appendChild(element);
  });

  return about;
}

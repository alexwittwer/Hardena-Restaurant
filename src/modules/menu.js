export default function menu() {
  const home = document.createElement("section");

  class Menu {
    constructor(name, desc, price) {
      this.Name = name;
      this.Description = desc;
      this.Price = price;
    }
  }

  // menu item descriptions
  const rendang = new Menu(
    "Rendang",
    "6 hr slow braised beef in coconut milk, herbs & spices.",
    17
  );

  const kabing = new Menu(
    "Gule Kambing",
    "Goat curry braised in coconut milk with lemongrass, kaffir lime, cardamom. Weekend only",
    17
  );

  const ayam = new Menu(
    "Ayam Goreng",
    "Malaysian fried chicken with galangal and lemongrass.",
    15
  );

  const ikan = new Menu(
    "Ikan bakar",
    "Charcoal-grilled fish served with sambal, served on a banana leaf.",
    "Market price"
  );

  const tellar = new Menu(
    "Es Teler",
    "Longan, rambutan, papaya, palm fruit, jackfruit in a sweet coco-pandan milk. vegetarian.",
    7
  );

  const pandan = new Menu(
    "Es Cendol",
    "Pandan infused rice flour jelly in coconut milk and palm sugar syrup. vegan.",
    3
  );

  const gudeg = new Menu(
    "Gudeg",
    "Sweet and savory young jackfruit stew, served over rice. vegan.",
    16
  );

  const tempe = new Menu(
    "Oseng Tempe",
    "Seared tempe and tofu in sweet soy sauce. vegan.",
    14
  );

  const food = [rendang, kabing, ayam, ikan, gudeg, tempe];
  const drink = [tellar, pandan];

  const foodmenu = document.createElement("div");
  const drinkmenu = document.createElement("div");

  // add css classes
  home.classList.add("section-container");
  foodmenu.classList.add("section-sub");
  drinkmenu.classList.add("section-sub");

  // add element content
  foodmenu.textContent = "Entrees";
  drinkmenu.textContent = "Drinks";

  // we could refactor this later to accept other items such as salads, sate, soups, sides etc
  food.forEach((e) => {
    const name = document.createElement("p");
    const desc = document.createElement("p");
    const price = document.createElement("p");
    const item = document.createElement("div");

    item.classList.add("menu-item");

    name.textContent = e.Name;
    desc.textContent = e.Description;
    price.textContent = e.Price;

    item.appendChild(name);
    item.appendChild(desc);
    item.appendChild(price);
    foodmenu.appendChild(item);
  });

  drink.forEach((e) => {
    const name = document.createElement("p");
    const desc = document.createElement("p");
    const price = document.createElement("p");
    const item = document.createElement("div");

    item.classList.add("menu-item");

    name.textContent = e.Name;
    desc.textContent = e.Description;
    price.textContent = e.Price;

    item.appendChild(name);
    item.appendChild(desc);
    item.appendChild(price);
    drinkmenu.appendChild(item);
  });

  home.appendChild(foodmenu);
  home.appendChild(drinkmenu);

  return home;
}

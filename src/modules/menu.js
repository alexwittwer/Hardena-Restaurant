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

  // we could refactor this later to accept other items such as salads, sate, soups, sides etc
  food.forEach((e) => {
    const name = document.createElement("p");
    const desc = document.createElement("p");
    const price = document.createElement("p");
    const item = document.createElement("div");

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

/* 
NAME:
DESC:

PRICE:


*/

/* Entrees

Comes in

 8oz / 12oz / 16oz

containers

 

Protein

Rendang

6 hr slow braised beef in coconut milk, herbs & spices.

$9 / $13 / $17

 

Gule Kambing

Goat Curry.

*WEEKEND ONLY*

-- / $13 / $17

​

Ayam

*Chicken dishes change everyday. 

-- / $12 / $15

 

Ikan

*Fish dishes change everyday. 
 $9 / $13 / $16
​
Additional Specials posted on our instagram!
@Hardenaphilly
​

Drinks

 

Es Teler

Exotic fruit cocktail. Includes longan, rambutan, papaya, palm fruit, jackfruit and other available fruit in a sweet coco-pandan milk. vegetarian. $7

 

Es Cendol

Pandan infused rice flour jelly in coconut milk and palm sugar syrup. vegan. $7

 

Soda- $2

San Pellegrino- soda $2.75/sparkling water $3

Water- $2

Teh Botol/Homemade Indonesian Jasmine Tea- $2.5 */

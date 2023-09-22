const shopItems = [
  {
    name: "Product 1",
    price: 19.99,
    description: "Lorem ipsum dolor sit amet concectetur adipiscing elit.",
  },
  {
    name: "Product 2",
    price: 29.99,
    description: "Lorem ipsum dolor sit amet concectetur adipiscing elit.",
  },
  {
    name: "Product 3",
    price: 39.99,
    description: "Lorem ipsum dolor sit amet concectetur adipiscing elit.",
  },
  {
    name: "Product 4",
    price: 39.99,
    description: "Lorem ipsum dolor sit amet concectetur adipiscing elit.",
  },
];

function renderShopItems(shopItems) {
  const shoppingList = document.getElementById("shopping-list");

  shopItems.forEach((shopItem) => {
    const listItem = document.createElement("shopping-list");
    listItem.classList.add("shop-item");

    listItem.innerHTML = `
      <h2>${shopItem.name}</h2>
      <p>Price: ${shopItem.price}</p>
      <p>${shopItem.description}</p>
    `;

    shoppingList.appendChild(listItem);
  });
}

renderShopItems(shopItems);

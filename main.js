const itemsList = [
  { name: "Peas", price: 0.95, type: "per bag" },
  { name: "Eggs", price: 2.1, type: "per dozen" },
  { name: "Milk", price: 1.3, type: "per bottle" },
  { name: "Beans", price: 0.73, type: "per can" }
];

const oneItem = itemsList.map(function(item) {
  var z = document.createElement("p");
  document.getElementById("items").appendChild(z);
  return (z.innerHTML = `${item.name} - $ ${item.price} ${item.type}`);
});

document
  .getElementById("add-item-btn")
  .addEventListener("click", function sayHi() {
    return `Hello there`;
  });

const itemsList = [
  { name: "Peas", price: 0.95, type: "per bag" },
  { name: "Eggs", price: 2.1, type: "per dozen" },
  { name: "Milk", price: 1.3, type: "per bottle" },
  { name: "Beans", price: 0.73, type: "per can" }
];

function createList() {
  itemsList.forEach(item => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const items = `${item.name} - $ ${item.price}${item.type}`;
    span.innerHTML = items;
    span.id = "style-me";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = item.name + "box";
    div.appendChild(span);
    div.appendChild(input);
    div.id = item.name;
    const greenBox = document.getElementById("greenBox");
    greenBox.appendChild(div);
  });
}

createList();

document.getElementById("add-item-btn").addEventListener("click", moveitem);

function moveitem() {
  const peasCheckBox = document.querySelector("#Peasbox");
  const eggCheckBox = document.querySelector("#Eggsbox");
  const milkCheckBox = document.querySelector("#Milkbox");
  const beansCheckBox = document.querySelector("#Beansbox");

  const checkedItems = [];

  if (peasCheckBox.checked) {
    checkedItems.push(document.getElementById("blueBox").appendChild(Peas));
  }
  if (eggCheckBox.checked) {
    checkedItems.push(document.getElementById("blueBox").appendChild(Eggs));
  }
  if (milkCheckBox.checked) {
    checkedItems.push(document.getElementById("blueBox").appendChild(Milk));
  }
  if (beansCheckBox.checked) {
    checkedItems.push(document.getElementById("blueBox").appendChild(Beans));
  }

  const p = document.createElement("p");
  document.getElementById("counterDisplay").appendChild(p);

  if (checkedItems.length === 0) {
    p.innerHTML = `You have not selected any item yet. Please select at least an item`;
  } else if (checkedItems.length === 1) {
    p.innerHTML = `You have selected ${checkedItems.length} item.`;
  } else if (checkedItems.length > 1) {
    p.innerHTML = `You have selected ${checkedItems.length} items.`;
  }
}

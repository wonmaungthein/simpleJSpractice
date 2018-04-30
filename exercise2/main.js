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
  const peasCheckBox = document.getElementById("Peasbox");
  const eggCheckBox = document.getElementById("Eggsbox");
  const milkCheckBox = document.getElementById("Milkbox");
  const beansCheckBox = document.getElementById("Beansbox");
  if (peasCheckBox.checked) {
    document.getElementById("blueBox").appendChild(Peas);
  }
  if (eggCheckBox.checked) {
    document.getElementById("blueBox").appendChild(Eggs);
  }
  if (milkCheckBox.checked) {
    document.getElementById("blueBox").appendChild(Milk);
  }
  if (beansCheckBox.checked) {
    document.getElementById("blueBox").appendChild(Beans);
  }
}

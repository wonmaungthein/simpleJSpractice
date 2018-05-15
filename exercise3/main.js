const itemsList = [
  { name: "Peas", price: 0.95, type: "per bag" },
  { name: "Eggs", price: 2.1, type: "per dozen" },
  { name: "Milk", price: 1.3, type: "per bottle" },
  { name: "Beans", price: 0.73, type: "per can" }
];

function createList() {
  itemsList.forEach(item => {
    const div = document.createElement("div");
    div.className = "moveableItems";
    const span = document.createElement("span");
    const items = `${item.name} - $ ${item.price} ${item.type}`;
    span.innerHTML = items;
    span.id = "style-me";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = item.name + "box";
    div.appendChild(span);
    div.appendChild(input);
    // div.id = item.name;
    const greenBox = document.getElementById("greenBox");
    greenBox.appendChild(div);
  });
}

createList();

document.getElementById("add-item-btn").addEventListener("click", moveitem);

function moveitem() {
  function findCheckedItems() {
    let counter = 0;
    const moveableitemsinGreenbox = greenBox.getElementsByClassName(
      "moveableItems"
    );

    for (var i = 0; i < moveableitemsinGreenbox.length; i++) {
      const checkedItems = [];
      const p = document.createElement("p");
      p.innerHTML = checkedItems;
      const blueBox = document.getElementById("blueBox");
      blueBox.appendChild(p);
      const eachMoveableItems = moveableitemsinGreenbox[i].getElementsByTagName(
        "span"
      )[0].innerHTML;
      const checkedMoveableItems = moveableitemsinGreenbox[
        i
      ].getElementsByTagName("input")[0].checked;

      if (checkedMoveableItems) {
        const removeThisItem = moveableitemsinGreenbox[i];
        counter++;
        p.innerHTML = eachMoveableItems;
        checkedItems.push(p);
        removeThisItem.parentNode.removeChild(removeThisItem);
      }
    }

    if (counter === 0) {
      alert(
        `You have not selected any items yet. Please select at least one item. `
      );
    } else {
      const p = document.createElement("p");
      document.getElementById("counterDisplay").appendChild(p);
      if (counter === 1) {
        p.innerHTML = `You have selected ${counter}  in Green box`;
      } else if (counter > 1) {
        p.innerHTML = `You have selected ${counter}  in Green box`;
      }
    }
  }
  findCheckedItems();
}

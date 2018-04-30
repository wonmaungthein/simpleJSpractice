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

// console.log(document.getElementById("greenBox"));
// function checkedBoxSelect() {
//   var checkbox = document.getElementById("checkbox");
// }

// function selectCheckedbox() {
//   var checkbox = document.getElementById("checkbox");
// document.getElementById('blueBox')
//   return;
//   console.log(checkedBox);
// }

// console.log(selectCheckedbox());
// function myFunction() {
//   var x = document.getElementById("myCheck").checked;
//   document.getElementById("demo").innerHTML = x;
// }

// This is main important function

// function myFunction() {
//   var selectedItems = document.getElementById("item.name");
//   var selectedCheckbox = document.getElementById("checkbox");
//   if (selectedCheckbox.checked) {
//     document.getElementById("blueBox").appendChild(selectedCheckbox);
//   }
// }

// var selectedItemsArray = [];
// function selectedItems() {
//   var x = document.getElementById("checkbox").checked;
//   selectedItemsArray.push(x);
//   return;
// }

// const checkBoxArray = newAray.map(function(item) {
//   const p = document.createElement("p");
//   p.innerHTML = item;
//   document.getElementById("greenBox").appendChild(p);
// });

// const Items = itemsList.map(function(item) {
//   var p = document.createElement("p");
//   p.id = item.name;
//   document.getElementById("greenBox").appendChild(p);
//   return (p.innerHTML = ` ${item.name} - $ ${item.price} ${item.type}`);
// });

// var uncheckedItems = [];
// var ready = [];

// if (peasCheckBox.checked === false) {
//   uncheckedItems.push("i");
// } else
// if (eggCheckBox.checked === false) {
//   uncheckedItems.push("i");
// } else

// if (milkCheckBox.checked === false) {
//   uncheckedItems.push("i");
// } else
// if (beansCheckBox.checked === false) {
//   uncheckedItems.push("i");
// } else

// if (uncheckedItems.length > 0) {
//   alert("Please click one item");
// } else {
//   return ready;
// }

// function checkItem() {
//   if (peasCheckBox.checked === false) {
//     alert("Please select at least one item");
//   }
//   return;
// }

// function disableButton() {
//   document.getElementById("add-item-btn").disabled = true;
// }

// function disableFireWorks() {
//   const image = document.getElementById("image");
//   image.disabled = true;
// }

// function selectOneItem() {
//   document.getElementById("item.name");
//   const firstItem = document.getElementsByTagName("p")[0];
//   document.getElementById("blueBox").appendChild(firstItem);
//   if (
//     document.getElementById("greenBox").getElementsByTagName("p").length <= 0
//   ) {
//     alert("This is the last item to move to the other side");
//     disableButton();
//     // disableFireWorks();
//   }
// }

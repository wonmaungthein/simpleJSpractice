const itemsList = [
  { name: "Peas", price: 0.95, type: "per bag" },
  { name: "Eggs", price: 2.1, type: "per dozen" },
  { name: "Milk", price: 1.3, type: "per bottle" },
  { name: "Beans", price: 0.73, type: "per can" }
];

function createList() {
  itemsList.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML =
      " <input id = 'checkbox' style='text-align:right;' type='checkbox' onclick= 'selectCheckedbox()' value = 'Hello'/>" +
      `${item.name} - $ ${item.price}${item.type}`;
    div.id = item.name;
    document.getElementById("greenBox").appendChild(div);
  });
}

createList();

function selectCheckedbox() {
  var selectedItems = [];
  var checkbox = document.getElementById("checkbox");
  if (checkbox.checked) {
    var value = document.getElementById("checkbox").value;
    selectedItems.push(value);
    console.log(value);
  }
  return selectedItems;
}

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

// document
//   .getElementById("add-item-btn")
//   .addEventListener("click", selectOneItem);
// onclick = "if(this.checked){selectedItems()}";

// function checkItem() {
//   if (Items.length === 0) {
//     alert("There is nothing");
//   } else {
//     alert("there are items");
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

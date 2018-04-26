const itemsList = [
  { name: "Peas", price: 0.95, type: "per bag" },
  { name: "Eggs", price: 2.1, type: "per dozen" },
  { name: "Milk", price: 1.3, type: "per bottle" },
  { name: "Beans", price: 0.73, type: "per can" }
];

const Items = itemsList.map(function(item) {
  var p = document.createElement("p");
  p.id = item.name;
  document.getElementById("greenBox").appendChild(p);
  return (p.innerHTML = `${item.name} - $ ${item.price} ${item.type}`);
});

// const oneItem = itemsList.map(function(item) {
//   return (document.getElementById("items").innerHTML = document.createElement`${
//     item.name
//   } - $ ${item.price} ${item.type}`);
// });

document
  .getElementById("add-item-btn")
  .addEventListener("click", selectOneItem);

function checkItem() {
  if (Items.length === 0) {
    alert("There is nothing");
  } else {
    alert("there are items");
  }
  return;
}

function disableButton() {
  document.getElementById("add-item-btn").disabled = true;
}

function selectOneItem() {
  document.getElementById("item.name");
  const firstItem = document.getElementsByTagName("p")[0];
  document.getElementById("blueBox").appendChild(firstItem);
  if (
    document.getElementById("greenBox").getElementsByTagName("p").length <= 0
  ) {
    alert("This is the last item to move to the other side");
    disableButton();
  }
}

const itemsList = [
  { name: "peas", price: 0.95, type: "per bag" },
  { name: "Eggs", price: 2.1, type: "per dozen" },
  { name: "Milk", price: 1.3, type: "per bottle" },
  { name: "Beans", price: 0.73, type: "per can" }
];

document.getElementById("addbtn").addEventListener("click", selectFirstItem);

function dosomething() {
  alert(itemsList[0].name);
}

function selectFirstItem() {
  return (document.getElementById("container").innerHTML = `${
    itemsList[0].name
  } - $ ${itemsList[0].price} ${itemsList[0].type} `);
}

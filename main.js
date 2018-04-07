const itemsList = [
  { name: "peas", price: 0.95, type: "per bag" },
  { name: "Eggs", price: 2.1, type: "per dozen" },
  { name: "Milk", price: 1.3, type: "per bottle" },
  { name: "Beans", price: 0.73, type: "per can" }
];

document.getElementById("addbtn").addEventListener("click", selectForthItem);

function selectFirstItem() {
  return (document.getElementById("container").innerHTML = `${
    itemsList[0].name
  } - $ ${itemsList[0].price} ${itemsList[0].type} `);
}

function selectSecondItem() {
  return (document.getElementById("container").innerHTML = `${
    itemsList[1].name
  } - $ ${itemsList[1].price} ${itemsList[1].type} `);
}

function selectThirdItem() {
  return (document.getElementById("container").innerHTML = `${
    itemsList[2].name
  } - $ ${itemsList[2].price} ${itemsList[2].type} `);
}

function selectForthItem() {
  return (document.getElementById("container").innerHTML = `${
    itemsList[3].name
  } - $ ${itemsList[3].price} ${itemsList[3].type} `);
}

const mainTable = document.querySelector("#table");
const button = document.querySelector("#button");
const firstName = document.querySelector("#fname");
const secondName = document.querySelector("#sname");
const sNumber = document.querySelector("#snumber");

button.addEventListener("click", () => {
  let row = mainTable.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  cell1.innerHTML = firstName.value;
  cell2.innerHTML = secondName.value;
  cell3.innerHTML = sNumber.value;
});

console.log("hello");

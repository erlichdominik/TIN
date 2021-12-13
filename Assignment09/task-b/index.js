// get form
const form = document.getElementById("form");

form.addEventListener("submit", (ev) => {});

const post = (data) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open("POST", "https://www.localhost:3000/", true);
  httpRequest.setRequestHeader("Content-Type", "application/json");
  httpRequest.send();
};

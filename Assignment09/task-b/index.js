// get form
const form = document.getElementById("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  console.log(form);
});

const post = (data) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open("POST", "https://www.localhost:3000/", true);
  httpRequest.setRequestHeader("Content-Type", "application/json");

  httpRequest.onload = () => {
    var jsonResponse = JSON.parse(httpRequest.responseText);
  };

  const formData = new FormData(form);

  httpRequest.send(JSON.stringify(formData));
};

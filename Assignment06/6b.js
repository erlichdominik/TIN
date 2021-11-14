const text = document.querySelector(".text");

const addText = () => {
  text.innerHTML = "adding text after 5 seconds";
};

setTimeout(addText, 5000);

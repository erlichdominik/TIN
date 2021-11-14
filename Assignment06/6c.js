const form = document.querySelector("#main_form");
const nameField = document.querySelector("#fname");
const numericalField = document.querySelector("#mnumber");
const emailField = document.querySelector("#mail");
const submitButton = document.querySelector("#submit_button");

submitButton.disabled = true;

emailField.addEventListener("keyup", () => {
  let isValid = emailField.checkValidity();

  if (!isValid) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});

const checkValidation = () => {
  if (numericalField.value.length === 0) {
    return false;
  }
  return true;
};

submitButton.addEventListener("click", () => {
  // with code on the emailField and required field on number input
  // we are basically sure that at this point our form is correct
  console.log(checkValidation());
});

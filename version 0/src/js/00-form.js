`use strict`;

const inputsTextConfig = [
  {
    inputclassName: ".js-input-name",
    cardclassName: ".js-card-name",
    defaultValue: "Nombre apellidos",
    cardPrefix: "",
    cardElementAttribute: "innerHTML",
  },
  {
    inputclassName: ".js-input-job",
    cardclassName: ".js-card-job",
    defaultValue: "Developer",
    cardPrefix: "",
    cardElementAttribute: "innerHTML",
  },
  {
    inputclassName: ".js-input-email",
    cardclassName: ".js-card-email",
    defaultValue: "",
    cardPrefix: "mailto:",
    cardElementAttribute: "href",
  },
  {
    inputclassName: ".js-input-phone",
    cardclassName: ".js-card-phone",
    defaultValue: "",
    cardPrefix: "tel:",
    cardElementAttribute: "href",
  },
  {
    inputclassName: ".js-input-linkedin",
    cardclassName: ".js-card-linkedin",
    defaultValue: "",
    cardPrefix: "https://www.linkedin.com/in/",
    cardElementAttribute: "href",
  },
  {
    inputclassName: ".js-input-github",
    cardclassName: ".js-card-github",
    defaultValue: "",
    cardPrefix: "https://www.github.com/",
    cardElementAttribute: "href",
  },
];
function updateAllInputs() {
  for (const inputTextConfig of inputsTextConfig) {
    const inputElement = document.querySelector(inputTextConfig.inputclassName);
    const cardElement = document.querySelector(inputTextConfig.cardclassName);

    let newValue = inputElement.value;

    if (inputTextConfig.cardElementAttribute === "innerHTML") {
      if (inputElement.value === "") {
        newValue = inputTextConfig.defaultValue;
      } else {
        newValue = inputElement.value;
      }

      cardElement.innerHTML = newValue;
    } else if (inputTextConfig.cardElementAttribute === "href") {
      if (inputElement.value === "") {
        newValue = "#";
      } else {
        newValue = newValue.replace(inputTextConfig.cardPrefix, "");
        newValue = inputTextConfig.cardPrefix + newValue;
      }

      cardElement.href = newValue;
    }
  }
  saveInLocalStorage();
}

const inputTextElements = document.querySelectorAll(".js-input-text");

for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener("keyup", updateAllInputs);
}

"use strict";

function PoemButton(buttonCaption, alertText) {
  this.buttonCaption = buttonCaption;
  this.alertText = alertText;
}

PoemButton.prototype.createButton = function () {
  let button = document.createElement("button");
  button.textContent = this.buttonCaption;
  button.onclick = this.buttonPressed.bind(this);
  document.body.append(button);
};

PoemButton.prototype.buttonPressed = function () {
  alert(this.alertText);
};

fetch("https://fe.it-academy.by/Examples/test_JSE.json")
  .then((r) => r.json())
  .then((data) => {
    for (const { buttonCaption, alertText } of data) {
      new PoemButton(buttonCaption, alertText).createButton();
    }
  });

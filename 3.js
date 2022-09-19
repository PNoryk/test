"use strict";

class PoemButton {
  constructor(buttonCaption, alertText) {
    this.buttonCaption = buttonCaption;
    this.alertText = alertText;
  }

  createButton() {
    let button = document.createElement("button");
    button.textContent = this.buttonCaption;
    button.onclick = this.buttonPressed.bind(this);
    // bind alternative
    // button.onclick = () => this.buttonPressed();
    document.body.append(button);
  }

  buttonPressed() {
    alert(this.alertText);
  }
}

fetch("https://fe.it-academy.by/Examples/test_JSE.json")
  .then((r) => r.json())
  .then((data) => {
    for (const { buttonCaption, alertText } of data) {
      new PoemButton(buttonCaption, alertText).createButton();
    }
  });

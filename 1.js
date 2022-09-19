"use strict";

const logLetters = (from, to) => {
  if (from > to) {
    return
  }
  let startCharCode = from.charCodeAt(0);
  let endCharCode = to.charCodeAt(0);

  let timer = setInterval(() => {
    if (startCharCode > endCharCode) {
      clearInterval(timer);
      return
    }
    console.log(String.fromCharCode(startCharCode++));
  }, 1000);
}

logLetters("A", "F");

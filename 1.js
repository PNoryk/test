"use strict";

const [startASCIICode, endASCIICode] = [65, 90];

const range = (start, end) => Array.from(Array(end + 1).keys()).slice(start);

const letters = String.fromCharCode(...range(startASCIICode, endASCIICode));

function logLetters(from, to) {
  let startIndex = letters.indexOf(from);
  if (startIndex === -1) {
    startIndex = 0;
  }
  let endIndex = letters.indexOf(to);
  if (endIndex === -1) {
    endIndex = letters.length;
  }

  const lettersIterator = letters.slice(startIndex, endIndex + 1)[Symbol.iterator]();

  let timer = setInterval(() => {
    let nextItem = lettersIterator.next();
    if (nextItem.done) {
      clearInterval(timer);
      return
    }
    console.log(nextItem.value);
  }, 1000);
}

logLetters("A", "F");

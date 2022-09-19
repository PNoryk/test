"use strict";
fetch("https://fe.it-academy.by/Examples/test_JSE.txt")
  .then((r) => r.text())
  .then((text) => {
    for (const [el] of text.matchAll(/(?<literal>['`"])(\\.|(?!\k<literal>).)*\k<literal>/g)) {
      console.log(el);
    }
  });

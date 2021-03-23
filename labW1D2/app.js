/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
function nameString(obj) {
  if (obj === undefined) return `no object passed`;
  let sum = "";
  if (obj === null) return `${obj} argument`;
  else {
    let keys = Object.keys(obj);
    let sorted = keys.sort();
    // console.log(sorted);

    if (keys.length === 0) return `object has no properties`;

    for (let each of keys) {
      sum += each + ".";
    }
    sum = sum.slice(0, -1);
  }

  return sum;
}

let x = nameString({ a: 4, h: 6, b: 7 });
console.log(x);

/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
function nameString(obj) {
  let sum = "";
  if (obj === null) return `${obj} argument`;

  let keys = Object.keys(obj);
  if (keys.length === 0) return `object has no properties`;
  if (keys.length === 0) {
    return `no elements`;
  } else {
    for (let each of keys) {
      sum += each + ".";
    }
    sum = sum.slice(0, -1);
  }
  return sum;
}

let x = nameString({});
console.log(x);

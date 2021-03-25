/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
  if (string === undefined) return "missing argument";
  if (typeof string !== "string") return "argument not string";
  if (string.length === 0) return "";
  let str = "";
  for (let i = 1; i < string.length; i += 2) {
    str += string[i];
  }
  return str;
}
console.log(removeEvenCharacters("abcd"));

// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
  let arr = array.filter((item) => item > 0);
  let sumPositive = arr.reduce((sum, each) => sum + each, 0);
  return sumPositive;
}

console.log(sumPositiveNumbers([-1, 2, 3]));

// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
  this.numbers = array.filter(numberFilter);
  this.strings = array.filter(stringFilter);
  function numberFilter(item) {
    return typeof item == "number";
  }
  function stringFilter(item) {
    return typeof item == "string";
  }
}

// Makes all negative numbers of the input array positive
function makePositive(array) {
  let arr = [];
  for (let each of array) {
    if (each > 0) arr.push(each);
    else if (each < 0) arr.push(-1 * each);
    else arr.push(each);
  }
  return arr;
}

// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {
  let arr = [];
  // for(let i=0;i<arr.length;i++){}
  for (let each of array) {
    if (each !== 0) arr.push(each);
    else {
      if (arr[arr.length - 1] !== "*") arr.push("*");
    }
  }
  return arr;
}
console.log(removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]));

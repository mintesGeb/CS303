/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function pow(x, n) {
  return Math.pow(x, n);
}

function add2(n1, n2) {
  return n1 + n2;
}

function add(...args) {
  let count = arguments.length;
  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += arguments[i];
  }

  return sum;
}

/*
	Input: grades is an array of integers
	Output: compute average of grades and report letter grade as follows:
	90 - 100 A
	80 - 89  B
	70 - 79  C
	60 - 69  D
	0 - 59   NC
*/
function computeGrade(grades) {
  let sum = 0;
  let ave;
  let letterGrade;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  ave = sum / grades.length;

  if (ave >= 90) letterGrade = "A";
  else if (ave >= 80) letterGrade = "B";
  else if (ave >= 70) letterGrade = "C";
  else if (ave >= 60) letterGrade = "D";
  else letterGrade = "NC";

  return letterGrade;
}

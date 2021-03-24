/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

/*
Function analyzer
Has an unbound this
Creates an object that contains the following information from the "this" object. 
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties (use the typeof operator to compute this)
}	
*/

function analyzer() {
  let output = {};
  let keysArray = Object.keys(this);
  let valueArray = Object.values(this);
  // console.log(valueArray);
  output.numProperties = keysArray.length;

  let countNum = 0;
  for (let each of keysArray) {
    // console.log(typeof each.value);
    if (each.length < 3) countNum++;
  }
  output.cntShortName = countNum;

  let countObj = 0;
  for (let each of valueArray) {
    // console.log(typeof each);
    if (typeof each === "object") {
      countObj++;
    }
  }
  output.cntReference = countObj;

  return output;
}

// console.log(analysis);

// let analysis = person.f();
//             assert.equal(analysis.numProperties, 6);
// 			assert.equal(analysis.cntShortName, 2);
// 			assert.equal(analysis.cntReference, 1);

/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/
function Person(name, country, grades) {
  this.name = name;
  this.country = country;
  this.grades = grades;
  this.computeGrade = function () {
    let sum = 0;
    let arr = this.grades;
    for (let each of arr) {
      sum += each;
    }
    let ave = sum / arr.length;
    return ave;
  };
}

// let x = new Person("mintes", "Ethio", [90, 100]);
// console.log(x);
// console.log(x.computeGrade());

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
  function Analysis(numProperties, cntShortName, cntReference) {
    this.numProperties = numProperties;
    this.cntShortName = cntShortName;
    this.cntReference = cntReference;
  }

  return new Analysis(6, 2, 1);
}

let person = new Person("bob", "usa", [100, 90]);
person.f = analyzer; // name too short
person.x = 0; // name too short
let analysis = person.f();
console.log(analysis.numProperties); //, 6);
console.log(analysis.cntShortName); // 2);
console.log(analysis.cntReference); // 1);

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
  //   this.analyzer=function (){
  // 	  this.
  //   }
}

// let x = new Person("mintes", "Ethio", [90, 100]);
// console.log(x);
// console.log(x.computeGrade());

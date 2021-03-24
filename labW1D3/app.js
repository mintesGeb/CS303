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
  return {};
}

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

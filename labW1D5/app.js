/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function countSubstring(s, target) {
  let count = 0;
  let sliced;
  function helper(s, target) {
    if (s.includes(target)) {
      count++;
      let index = s.indexOf(target);
      sliced = s.slice(index + 3);
      if (sliced === target) {
        count++;
        return count;
      }
      helper(sliced, target);
    }
    return count;
  }
  if (s.includes(target)) {
    return helper(s, target);
  }

  return count;
}

console.log(countSubstring("5abdxyxabdabdd", "abd"));

// Save obj in localStorage
function saveInLocalStorage(name, obj) {
  return localStorage.setItem(name, JSON.stringify(obj));
}

// Return value of name in local storage
function getFromLocalStorage(name) {
  let result = localStorage.getItem(name);
  return JSON.parse(result);
}

// This function has an unbounded this. When it is called, the this will be bound to some object
// The argument "obj" is a single key/value pair, e.g. {location:"Fairfield"}
// It can be any key/value pair
// addMissProperty tests the object bound to its "this" for the key of "obj" (e.g., location)
// If the bound object doesn't have that key then the key and its value is added to the bound object.
function addMissingProperty(obj) {
  let entriesArr = Object.entries(obj);
  for (let each of entriesArr) {
    let keyEach = each[0];
    let valueEach = each[1];
    if (!this[keyEach]) this[keyEach] = valueEach;
  }
}

//
// Constructor function which creates object {name:name, country:country, creationData:...}
// Where creationDate is the time that the object is created.
function Person(name, country) {
  this.name = name;
  this.country = country;
  this.creationDate = new Date();
}

// The parameter "students" is an array of student objects. Each student object has form
// {name:some name, country: some country}
// This function creates a Map using the "students" parameter and sets the value of each student
// in it to zero. This will be the number of classes that the student has missed.
// The function incrementAbscences (see next) can be called to increment the number of absences.
function register(students) {
  let map = new Map();
  for (let each of students) {
    map.set(each, 0);
  }
  return map;
}

console.log(
  register([
    { name: "bob", country: "usa" },
    { name: "jill", country: "usa" },
  ])
);
// Parameters:
// course is a Map mapping student objects to an integer which is the number of days missed
// student is an object that can be used as a key to course.
// This function increments the number of days missed for the student.
function incrementAbsences(course, student) {
  let stu1 = course.get(student);
  return course.set(student, stu1 + 1);
}

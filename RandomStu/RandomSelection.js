"use strict";
// alert("ok");
window.onload = pageload;

function pageload() {
  document.querySelector(".btn").onclick = chooseRandomStudent;
}

let students = [
  "Ajibola Sulaiman",
  "Indrias Berassa",
  "Bisrat Tegegne",
  "Daniel Hagos",
  "Michael Alazar",
  "Abdulhamid Ibrahim",
  "Tam Nguyen",
  "Eyasu Gebrehiwot",
  "Meron Kiflmariam",
  "Mintesinot Gebre",
  "Amanuel Abuhay",
  "Eshete Fente",
  "Shibiru Ararso",
  "Awaab Elamin",
  "Fekade Tegeghe",
  "Henok Hamito",
  "Beimnet Tesfaye",
  "Asgedom Hailemariam",
];
let chosenArr = [];

function chooseRandomStudent() {
  // alert("ok");
  if (students.length === 0) {
    alert("starting Over!");
    students = chosenArr;
    chosenArr = [];
    chooseRandomStudent();
  } else {
    console.log(students);
    let randomNo = Math.floor(Math.random() * students.length);
    let chosenStu = students[randomNo];
    document.querySelector(".display").innerHTML = chosenStu;
    console.log(randomNo);
    console.log(chosenStu);
    chosenArr.push(chosenStu);
    let indexOfStu = students.indexOf(chosenStu);
    students.splice(indexOfStu, 1);
    console.log(students);
    console.log(chosenArr);
  }

  // return;
}

// // console.log(chooseRandomStudent(students));

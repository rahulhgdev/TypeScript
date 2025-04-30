"use strict";
// Rest operator (...) used in collecting the muliple elements into an array
// Used in desctructuring, functional params
function count(...val) {
    console.log(val);
}
count(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25);
function getName(...args) {
    console.log(args);
}
getName("Aarav", "Saanvi", "Vivaan", "Ananya", "Aditya", "Isha", "Krishna", "Meera", "Rohan", "Priya");

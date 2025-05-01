"use strict";
// Generics(means any types) in TypeScript are a way to create reusable and flexible components that work with a variety of types while still providing strong type safety.
// <T> can be anything but it similar to Template in C++ so use <T>, we can use anything for this type param like <A>, <U> etc..
// To achieve showing inbuilt method on generic type, you've to use Type Narrowing (check typeof), ex. if(typeof a === 'string'){a.}
// It's not mandatory to give type param while calling function, TS automatically detects type
function xyz(a, b, c) {
    console.log(a + " " + b + " " + c);
}
xyz(2025, 'is Goated!', 3000);
xyz(false, 'is Goated!', 3000);
xyz(false, 'is Goated!', 3000);
xyz('Test', 'is Goated!', 3000); // Not mandatory to give Type param, TS automatically detects type
// Function return as Generic
function abc2(a, b) {
    console.log(a + " " + b);
    // return 'hey'; // <-- This will give error even we're retuning string, because T can be anyting and we're passing string and function is expecting to return T
    // return 123; // same issue as above
    // Solution
    return 'hey'; // or return 'hey' as T;
}
let a1 = abc2("hi", "haa");
console.log(a1);

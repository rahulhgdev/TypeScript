"use strict";
// Type assertion in TypeScript is a way to tell the compiler what the type of a variable is, 
// often when the developer has more information than the compiler does. 
// It's used when you're confident about the type of a variable but TypeScript cannot infer it correctly.
let value = 'This is string';
// 1st way - Telling TS to treat value as string type
value;
// 2nd way mostly used in .tsx React
value; // use . on this you'll get in-built methods on string
const obj1 = {
    name: 'Rahul',
    age: 20
};
// Telling TypeScript to treat obj1 as a Test
const ans = obj1;
console.log(ans);

"use strict";
// Modules help organize code by splitting it into reusable pieces.
// In TypeScript (TS), a module refers to any file containing top-level import or export statements
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = greet;
exports.shoutOut = shoutOut;
exports.default = defaultEx;
function greet(name) {
    console.log("Hello " + name);
}
function shoutOut(username) {
    console.log("Shoutout to " + username);
}
// Default 
function defaultEx(age) {
    console.log("Your age is: " + age);
}

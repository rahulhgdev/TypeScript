"use strict";
/*
Premitives - Numbers, Strings, Booleans
References -
Array,
Tuples -> When you know DataType and no. of data is same then use Tuples ex., Name(String) & Age(Number)
Enums -> It can be used for setting pre-fixed vaalues like user roles or status codes
Any, Unknown, Void, Null, Undefined, Never
** Note: In vscode, you can hover on variable and it'll show variable datatype
*/
// Number
let a = 12;
// String
let b = "Rahul";
// Boolean
let c = false;
// Array: hover over variable and check
let d = [11, 22, 33, 44, "Test", "TypeScript", { 'name': 'JavaScript', 'version': 'ES6' }];
// Tuples 
// - If you inter exchange position or give extra data ex., here only 2 data can be assigned else it'll give error
let e = ['Rahul', 20];
// Enums 
// Its key value pair but uses = instead :
// Check JS code for enum after compilation
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["SUPER_ADMIN"] = "super_admin";
    UserRole["USER"] = "user";
    UserRole["EDITOR"] = "editor";
})(UserRole || (UserRole = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["OK"] = "200";
    StatusCode["NOT_FOUND"] = "404";
    StatusCode["SEVER_ERROR"] = "500";
    StatusCode["BAD_GATEWAY"] = "502";
})(StatusCode || (StatusCode = {}));
console.log(UserRole.SUPER_ADMIN);
console.log(StatusCode.NOT_FOUND);
// Any
// It'll accept any datatype
// By default you don't declare and type then its any, remove :any from below ex., then it'll give error
// In this you can perform any functionality ex., if 1 value datatype is string and 1 is number even then you can use string in-built function on number it won't give error
let f;
f = 12;
f = 'TS';
f.toUpperCase();
// Unknown
// Same as Any, it'll also accept any datatype but you can not perform any functionality on it.
// For performing functionality, you've to check datatype, see below ex.
let g;
g = 13;
g = 'JS';
if (typeof g === "string") {
    g.toUpperCase();
}
// Void
// Used when function doesn't return anything
function abc() {
    console.log("ABC");
}
// Null
// Used when a variable of function accepts or returns null
// Also used with union like string | null - means value can be string or null
let h;
// h = 10;
// Undefined
// When you don't give any value to a variable then its default value is undefined
let i;
// i = 10;
// Never
// Used in case of infine loop, ex., function which is not returned ever
// -rm :never then you can see console.log("Test") is reachable
function xyz() {
    while (true) {
    }
}
xyz();
console.log("Test");

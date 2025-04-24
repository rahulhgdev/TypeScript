"use strict";
// Extending Interfaces
// type obj. you'll find it has access to properties of User as well as Admin interface too
function extendFn(obj) {
    // obj.
    console.log(obj);
}
extendFn({ role: "admin", delete_permission: true, name: "rahul", age: 20, session: 2000 });
// type obj. you'll find it has access of both abcd interface as both are merged
function mergingFn(obj) {
    // obj.
    console.log(obj);
}
mergingFn({ name: "javascript", age: 15, address: "India", mobile_no: 10000000 });

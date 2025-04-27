"use strict";
// Optional Parameter property (?) is the property in which its not mandatory/optional to assign value
class Person {
    // public id: number = 1;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let p1 = new Person('Rahul', 20);
console.log(p1);
let p2 = new Person("Jashon", 28, 'Male');
console.log(p2);

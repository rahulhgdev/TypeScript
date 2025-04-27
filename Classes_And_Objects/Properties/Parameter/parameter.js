"use strict";
// Parameter properties means passing property(variable here) declaration + initialization inside constructor parameter
class Mobile {
    // variable declaration + initialization inside constructor
    constructor(name, RAM, Processor) {
        this.name = name;
        this.RAM = RAM;
        this.Processor = Processor;
    }
}
let mb1 = new Mobile('Moto G5s Plus', 6, 'Snapdragon 625');
console.log(mb1);

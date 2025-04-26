"use strict";
// Class is blueprint that defines properties and functions of a object.
class Laptop {
    constructor() {
        this.name = "Acer Aspire 5";
        this.RAM = "8gb";
        this.SSD = "512gb";
        this.OS = 'Win11';
    }
}
let l1 = new Laptop();
console.log(l1);
let l2 = new Laptop();
console.log(l2);

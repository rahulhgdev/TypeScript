"use strict";
// Abstract class is used for purpose of template or base class ex., LLM-Models
// Make LLM-Models as abstract class and ChatGPT, Claude etx as subclass
// Note: Abstract method should be implemented in subclass
class Animal {
    constructor(name) {
        this.name = name;
    }
    // protected method
    getFood() {
        return this.name + ' eats food on time';
    }
    // normal method
    jump() {
        return this.name + ' jumps high.';
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return this.name + ' bhow bhow!!';
    }
    // Protected members can be access in subclass
    getFood() {
        return this.name + ' eats pedigree.';
    }
    jump() {
        return this.name + ' jumps very high.';
    }
}
let d1 = new Dog('Bruno');
console.log(d1);

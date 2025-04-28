// Abstract class is used for purpose of template or base class ex., LLM-Models
// Make LLM-Models as abstract class and ChatGPT, Claude etx as subclass
// Note: Abstract method should be implemented in subclass

abstract class Animal{
    constructor(public name: string){}

    abstract makeSound(): string; // must implememt this abstract method in subclass

    // protected method
    protected getFood(): string{
        return this.name + ' eats food on time';
    }

    // normal method
    jump(): string{
        return this.name + ' jumps high.';
    }
}

class Dog extends Animal{

    constructor(name: string){
        super(name);
    }
    makeSound(): string {
        return this.name + ' bhow bhow!!'
    }

    // Protected members can be access in subclass
    getFood(): string {
        return this.name + ' eats pedigree.';
    }

    jump(): string {
        return this.name + ' jumps very high.';
    }
}
let d1 = new Dog('Bruno');
console.log(d1);
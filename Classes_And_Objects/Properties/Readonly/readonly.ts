// When you want functionality such that a variable can not reassigned anywhere except constructor|
// Note: add readonly after access modifier

class Bike{
    constructor(public readonly name: string){
        name = 'Splendor'; // You can update readonly members inside constructor only i.e. inside declaration
    }
    // Try to change bike name inside class
    changeName(){
        this.name = 'Hero Xtreme 125R';
    }
}

let bk1 = new Bike('Bajaj Pulsar N160');
console.log(bk1);
bk1.changeName();

// Try to change bike name outside class
bk1.name = 'Royal Enfield Continental GT 650';
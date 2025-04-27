// Parameter properties means passing property(variable here) declaration + initialization inside constructor parameter
class Mobile{ 
    // variable declaration + initialization inside constructor
    constructor(public name: string, public RAM: number, public Processor: string){}
}
let mb1 = new Mobile('Moto G5s Plus', 6, 'Snapdragon 625');
console.log(mb1);

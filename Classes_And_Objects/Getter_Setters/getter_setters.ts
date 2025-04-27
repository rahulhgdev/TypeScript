// TS provides standard way to access and update the properties thats by using Getters & Setters
// Using Getters & Setters, we can access or update the value as property (here, f1.name = "Jasmine") not like method (f1.setName("Jasmine")) in normal way
// For Getters and Setters its better to use _ with property name for which we're going to set getters and setters. Ex., property name - age and get & set method - get age(){} & set age(){}
// ** As its access and update as properties so if you create poperty name and get or set method name same as property then it'll give Duplicate identifier error, so that's why use _
// ** You can create property name without _ but when you'll create getter & setter mrthod then use diff. method name ex., property name - age and get & set method - getAge(){} & setAge(){}

class Flower{
    constructor(public _name: string){}

    // Normal Way
    // getName(){
    //     console.log(this.name);
    //     return this.name;
    // }
    // setName(name: string){
    //     this.name = name;
    // }

    // Getters and Setters
    get name(){
        return this._name;
    }
    set name(value: string){
        this._name = value;
    }
}

let f1 = new Flower('Lily');
// console.log(f1);

// Normal Way - Accessing & Updating as method
// f1.getName(); // Get
// f1.setName('Jasmine'); // Set
// f1.getName();

// Getters & Setters - Accessing & Updating as property
console.log(f1.name); // Get
f1.name = 'Jasmine'; // Set
console.log(f1.name);
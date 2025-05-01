class randomGUI<T>{
    constructor(public gui_data: T, public address: T){
        // console.log(gui_data + " " + address);
    }
}

let g1 = new randomGUI<string>('abcdef0123456789', 'Found in DB'); // here, providing type param as string
let g2 = new randomGUI(2025, 123456789); // here, not providing any type param, TS automatically infer/detect it

// Note: When you are not providing type param and if function param has more than 1 property which has generic type, then while calling
// function, give second argument type same as first argument type, else will give error

// let g3 = new randomGUI(1111, 'Will give error as this argument type is not number'); // uncomment this and see, it'll give error
let g4 = new randomGUI('Arg 1 is string', 'Args 2 is also string');

console.log(g1);
console.log(g2);
console.log(g4);

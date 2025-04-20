// Type & Type Aliases
// Even we've multiple built-in types in TS, but Type is use to create custom type
// It allow to define custom name to type

// Creating Type 

type User1 = {
    name: string;
    age: number;
    email: string;
}

// Type Aliases
type valueType = number | string | boolean | null;

let abcTest: valueType;
abcTest = 12;
abcTest = 'Rahul';
abcTest = true;
abcTest = null;
// abcTest = [11,22,33,44]; // will give error as array type is not given in alias
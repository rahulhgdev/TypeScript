// Type assertion in TypeScript is a way to tell the compiler what the type of a variable is, 
// often when the developer has more information than the compiler does. 
// It's used when you're confident about the type of a variable but TypeScript cannot infer it correctly.

let value: any = 'This is string';

// 1st way - Telling TS to treat value as string type
(<string>value); 

// 2nd way mostly used in .tsx React
(value as string); // use . on this you'll get in-built methods on string

// Interface example
interface Test {
    name: string,
    age: number
}

const obj1 = {
    name: 'Rahul',
    age: 20
}

// Telling TypeScript to treat obj1 as a Test
const ans = obj1 as Test;
console.log(ans);

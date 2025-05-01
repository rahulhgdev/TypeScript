// Modules help organize code by splitting it into reusable pieces.
// In TypeScript (TS), a module refers to any file containing top-level import or export statements

export function greet(name: string){
    console.log("Hello " + name);
}

export function shoutOut(username: string | number){
    console.log("Shoutout to " + username);
}

// Default 

export default function defaultEx(age: number){
    console.log("Your age is: " + age);
}
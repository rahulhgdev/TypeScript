// Function Overloading is a refers to the ability to define multiple methods with the same name but different parameter types or numbers. 
// In TypeScript, to use Function/Method Overloading we first have to define multiple function signature and then use in single implementation 

// Multiple Function Signature
function fetchData(id: number): void; 
function fetchData(id: number, data: number): void;
function fetchData(id: number, data: string, location: string): void;

// Single Impelementation

function fetchData(id: any, data?: any, location?: any){
    if(typeof id === 'number' && data === undefined && location === undefined){
        console.log('First fnc called');
    }
    if(typeof id === 'number' && typeof data === 'number'){
        console.log('Second fnc called');
    }
    if(typeof id === 'number' && typeof data === 'string' && typeof location === 'string'){
        console.log('Third fnc calld');
    }
    else {
        console.error("Invalid!!!");
    }
}

fetchData(1); // called first fnc
fetchData(2, 2025); // called 2nd fnc
fetchData(3, 'Contains all images data', 'NAS'); // called 3rd fnc
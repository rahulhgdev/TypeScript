// Type casting is use to convert 1 type to another type

let sm = String(1000);
console.log(sm + " Type is : " + typeof sm);
console.log(sm.charAt(0)); // in-built string method after typecasting number type to string

let num = Number("25000");
console.log(num + " Type is : " + typeof num);
console.log(num.toFixed(2)); // in-built number method after typecasting string type to number
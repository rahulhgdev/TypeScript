// Union Type - | (OR)
// - When we've to use multiple type ex., user_name can be either string or null

let user_name: string | null;
user_name = "rahul";
user_name = null;

// Intersection Type - & (AND)
// - When you want functionality to use property of 2 or more types then we use Intersection type
// Intersection type is use to extend types (like we've done interface extending)

type car = {
    name: string;
    mileage: number;
    engine_type: string;
}

// Type Extending
// Here we're using Intersection Type (&) to extend car type

type ev_car = car & {
    getBatteryInfo(battery: string): void;
}

// type a. you'll find it has access to properties fo both car & ev_car
function getCarInfo(a: ev_car){
    a.mileage;
    a.getBatteryInfo('Excide battery');
}

// Diff. between type and interface
// 1. Type is use to create custom type 
// 1. Interface is used to crate face of obj. means which type of data it consists
// 2. In Type, merging is not allowed - we can't create 2 or more types with same name it'll give error, see below ex. #Type Merging
// 2. In Interface, merging is allowed - we can create 2 or more interfaces with same name and it'll merge properties of all interface

// Type Merging - not allowed will give error

type merging = {
    name: string;
    age: number;
}
// type merging = {
//     address: string;
//     phone_no: number;
// }
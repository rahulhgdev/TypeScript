"use strict";
// Union Type - | (OR)
// - When we've to use multiple type ex., user_name can be either string or null
let user_name;
user_name = "rahul";
user_name = null;
// type a. you'll find it has access to properties fo both car & ev_car
function getCarInfo(a) {
    a.mileage;
    a.getBatteryInfo('Excide battery');
}
// type merging = {
//     address: string;
//     phone_no: number;
// }

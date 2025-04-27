"use strict";
// Static members doesn't depends on object, ex., Value of PI, Random numbers
// We can use value of PI or random numbers using Math class without even creating its object
// Even if you create an object and check then static members wil not show in object
// To access static members you can directly use class name and static members like staticExample.Version
class staticExample {
    static getRandom() {
        return Math.random() * 10;
    }
}
staticExample.Version = 1.07;
console.log(staticExample.Version);
console.log(staticExample.getRandom());
// let se1 = new staticExample();

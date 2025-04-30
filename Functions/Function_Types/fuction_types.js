"use strict";
// Here, we're passing function type to printinfo just like we pass string or number type to property 
function abc(name, age, printInfo) {
    printInfo("Hers's all info to download..");
}
abc('Rahul', 20, (allInfo) => {
    console.log('allInfo');
});

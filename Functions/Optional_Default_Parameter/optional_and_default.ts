// 1. Optional Parameter property (?) is the property in which its not mandatory/optional to assign value
// Note: Both Optional & Default parameter should be pass at the end, you can't pass in-between other params.
function getUserInput(name: string, mobile_no: number, address: string, gender ?: string){
    console.log(name + " " + mobile_no + " " + " " + address + " " + gender);
}

getUserInput("Rahul", 123456789, 'Mumbai, India', 'M');
getUserInput("John Cena", 987654321, 'Delhi, India'); // Opional - didn't passed gender

// 2. Default Parameter propererty is also optional and it is property in which we pass default value, ex. if we set any property with 
// default value in function and while calling the function if we don't pass the value then its defualt value will pass.
function calculateDiscount(price: number, discount:number = 20){
    let discountAmt = price*(discount/100);
    let finalPrice = price - discountAmt;
    console.log(finalPrice);
}

calculateDiscount(1200);

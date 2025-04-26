// this keyword is used when you want to access any variables or methods inside the class

class Car{
    public model;
    public owner_detail;
    constructor(model:string, owner_detail: string){
        this.model = model;
        this.owner_detail = owner_detail;

        // accessing method inside consructor
        this.getInsuranceInfo();
        this.getOwnerDetails();
    }

    getInsuranceInfo(){
        console.log( this.model + " Insurance info is available in pdf file");
    }

    getOwnerDetails(){
        console.log("Owner details : " + this.owner_detail);
    }
}

let c1 = new Car("KIA", "Rahul");
console.log(c1);

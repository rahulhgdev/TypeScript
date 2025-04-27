// There are mainly 3 acustomer_idccess modifies in TypeScripts - Public, Private & Protected
// Public - This access modifier is used when you want to access members like variable or methods anywhere in the program and Public is default access modifier in TS
// Private - This access modifier is used when you want to access members like variable or methods only inside the same class where they're declared
// Protected - This access modifier is used when you want to access members like variable or methods only inside the same class or subclas
// Protected member is used when want Private access modified functionality with access inside subclass

class Bank{
    public bank_name;
    private account_no;
    protected customer_id;
    constructor(bank_name: string, account_no: number, customer_id: number){
        this.bank_name = bank_name;
        this.account_no = account_no;
        this.customer_id = customer_id;
    }

    // -------------- 1. Inside Class --------------
    // Public
    getBankName(){
        console.log(this.bank_name);
    }
    // Private
    getAccountNo(){
        console.log("Before Change: ", this.account_no);
        this.account_no = 11111;
        console.log("After Change: ", this.account_no);
    }
    // Protected
    getAccountId(){
        console.log(this.customer_id);
    }
}

// -------------- 2. Outside Class --------------
let b1 = new Bank("SBI", 12345, 67890);
console.log("------ Public ------");
console.log(b1);
// Public
b1.bank_name = 'HDFC'; // Here, you can access public member bank_name because its public
console.log(b1);

b1.getAccountNo(); // Note: You can access private member thorugh public method getAccountNo()


// Private
console.log("------ Private ------");
b1.account_no = 333333; // Here, you can't access private member account_no as its private, you can only update in class where its declared
console.log(b1);

// Protected 
console.log("------ Protected ------");
b1.customer_id = 45612; // Here, you can't access protected member customer_id as its private, you can only access or change inside class where its declared or subclass
console.log(b1);

// -------------- 3. Inside Subclass --------------
class GraminBank extends Bank{
    public gramin_bank_info;
    constructor(bank_name: string, account_no: number, customer_id: number, gramin_bank_info: string[]){
        super(bank_name, account_no, customer_id); //  If you have a base class, you’ll need to call super(); in your constructor body before using any this
        this.gramin_bank_info = gramin_bank_info;
    }

    // Public - You can access public members in subclass
    changeBankName(){
        this.bank_name = 'Axis';
    }

    // Private - You can't access private members inside subclass
    changeAccountNo(){
        this.account_no = 88888;
    }

    // Protected - You can access protected member inside subclass
    changeCustomerID(){
        this.customer_id = 7777; // Here, you can update access the protected member customer_id as GraminBank is subclass of Bank class
        console.log("Accessed and updated Protected member : ", this.customer_id);
    }

    // gramin_bank_info
    getGraminBankInfo(){
        this.gramin_bank_info = ['Chaitanya Godavari Grameena Bank', 'India'];
    }
}

let gb1 = new GraminBank('Grameena Bank', 5566, 1111, ['Chaitanya Godavari Grameena Bank', 'India']);
console.log(gb1);
gb1.changeCustomerID();
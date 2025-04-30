// Interface
// When you're passing obj in a function at that time you've to give type to that object, in this case we use interface
// Interface is use to define face of object means which type of data is stored in that oject.

// Ex., If you want to create interface of Transaction Object
const transactions = {
   title: "Piad tuition fees",
   desc: "Paid online last friday on 11th April",
   amount: 8000,
   date: "11/04/2025",
   category: "Expense",
}


// Creating Transaction interface - which type of data it consists
interface trans {
    title: string;
    desc: string | null;
    amount: number;
    date: string;
    category: string;
    location?: string, // ?: optional
}

// Here you're assigning trans interface to obj i.e., obj will consists all properties which defined in trans interface
// You can check type obj.
function fetchTransaction(obj: trans){
    // obj.title = ''
}

// When calling function, you'll need to pass all properties data, if you pass extra then also it'll give error as its not present in trans interface
// As location is oprional property in trans interface then its optional to pass when function is called, it won't give any error if you don't pass it.
fetchTransaction({title: 'College fees', desc: "online paid", amount: 15800, date: '12/04/2025', category: 'expense'})
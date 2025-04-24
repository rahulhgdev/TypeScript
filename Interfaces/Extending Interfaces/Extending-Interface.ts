// Extending Interfaces

interface User {
    name: string,
    age: number;
    session: number;
}

interface Admin extends User {
    role: string;
    delete_permission: true;
}

// type obj. you'll find it has access to properties of User as well as Admin interface too
function extendFn(obj: Admin){
    // obj.
    console.log(obj);
}

extendFn({role: "admin", delete_permission: true, name: "rahul", age: 20, session: 2000 });


// Interface merging - it happens when two or more interfaces have same name

interface abcd{
    name: string;
    age: number;
}
interface abcd{
    address: string;
    mobile_no: number | null;
}
// type obj. you'll find it has access of both abcd interface as both are merged
function mergingFn(obj: abcd){
    // obj.
    console.log(obj);
}
mergingFn({name: "javascript", age: 15, address: "India", mobile_no: 10000000});
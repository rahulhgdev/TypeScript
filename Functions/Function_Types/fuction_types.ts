// Here, we're passing function type to printinfo just like we pass string or number type to property 
function abc(name: string, age: number, printInfo: (info: string) => void){
    printInfo("Hers's all info to download..");
}

abc('Rahul', 20, (allInfo: string)=>{
    console.log('allInfo');
})
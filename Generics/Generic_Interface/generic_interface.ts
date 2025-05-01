/* Why Use Generics?
    Reusability: Write one version of a function/class and use it with different types.
    Type Safety: TypeScript keeps track of the type and prevents invalid operations.
    Avoid any: any gives up type checking. Generics retain the type information.
*/

interface geoCoding<T>{
    name: string,
    parameters: number | string,
    key: T,
    assumption?: T[],
}

function findGeoCoding(obj: geoCoding<string>){
    console.log(obj);
    let first = obj.key.charAt(0);
    console.log(first);
}
findGeoCoding({name : "Mumbai", parameters: 2025, key: 'Sans Lendisi'});
findGeoCoding({name : "Mumbai", parameters: 2025, key: 'Sans Lendisi', assumption: ['not applicable', 'might be applicable']});
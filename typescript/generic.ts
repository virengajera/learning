let score: Array<Number> = [];
let names: Array<string> = [];


function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}


// Generics Types

function identityThree<Type>(val: Type): Type {
    return val
}

/* 
    Shortucut this is preferred by everyone else
    
    instead of T you can use any word of letter not necessarily of Type

    function identityThree<T>(val: T): T {
    return val
}

*/

identityThree(5)        // here type will be of number means val and return type will be also number
identityThree("Hello")  // here type will be of string means val and return type will be also string

type User = {
    name: string,
    age: number
}


identityThree<User>({ name: "Viren", "age": 25 })        // Here type will be automatically of User same applies for interface

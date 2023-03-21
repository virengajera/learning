/* 
    Generics with array

    Problem : You cannot use arr.length function on object or number. You can only use with array

*/

function getArrayLength<T>(arr: T): T {
    return arr.length                   // will not work with object
}



function getArrayLength_solution<T>(arr: T[]): number {
    return arr.length
}

// T and U both can be of different type but it return Object
function one<T, U>(valone: T, valtwo: U): object {
    return {
        valone,
        valtwo
    }
}

interface Dabatabse {
    connection : string,
    username : string,
    password : string
}

function two<T, U extends Dabatabse>(valone : T, valtwo : U) : object {
    return {
        valone,
        valtwo
    }
}

/* 
    Generics Classes

*/

interface Quiz {
    name : string,
    type : string
}

interface Course {
    name : string,
    author : string,
    subject : string
}

class Sell <T>{

    public cart : T[] = []

    addToCart(product : T) {
        this.cart.push(product)
    }

}


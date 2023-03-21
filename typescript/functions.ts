/* 

In TS : By default it will take function return type,parameter a and b as "any" data type

*/

function addTwo(a, b) {
    return a + b
}

addTwo("2", 1)   // Allowed 
addTwo(1, 2)     // Allowed

/* Solution */

/* You can also porvide default value here we have provided 0 */

function sol_addTwo(a: number = 0, b: number = 0): number {

    // return "Hello World"     // will be not allowed
    return a + b
}

//sol_addTwo("2", 1)   // Not - Allowed 
sol_addTwo(1, 2)     // Allowed


/* Another functions example */

const getHello = function (s: string): string {

    return "Hello World"

}

const arr = [1, 2, 3]

arr.map((a): number => {
    return a * 2
})


/* 

What to when functions return Error message

Solution : user "never" datatype or "void"

"never" : used with error handling

"void" : normal when function does not return anything

*/

function fail(msg: string): never {
    throw new Error(msg)
}




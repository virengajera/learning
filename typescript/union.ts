/* 

Allow multiple types in array 

e.g. allow boolean and number in array values

*/

let scores: string | number;

scores = 55         // Allowed
scores = "55"       // Allowed



/* 
    You can alow allow custom object of multiple type

*/

type User = {
    name: string,
    age: number
}

type Admin = {
    name : string,
    password : string
}

let viren : User | Admin;

viren = {name : "abc", age :2}              // Allowed
viren = {name : "xyz", password : "pass"}   // Allowed


/* 
    You can also applies to function arguments and return type
*/

function getName(id:number | string)  {

    // id.toLowerCase() will not work since there is number or string possible value
    // Solution : Do strong type checing
    
    if(typeof id === "string"){
        return id.toLowerCase()
    }
    else {
        return id + 2
    }
}


/* 

 Array with Union

*/


let arr1 : string[] | number[] = [];   // You can have all values either string or number not both

arr1 = [1,2,3]                          // Allowed
arr1 = ["Hello", "World"]               // Allowed
arr1 = ["He", 1 , 2 , 3 , "World"]      // Not Allowed


// Solution
let arr2 : (string | number)[] = []   // Both allowed string and number


arr2 = [1,2,3]                          // Allowed
arr2 = ["Hello", "World"]               // Allowed
arr2 = ["He", 1 , 2 , 3 , "World"]      // Allowed


/* 
 
 You can define specific value to have in variable liek "yes" or "no"

*/

let isCustomer : "yes" | "no"


isCustomer = "n/a"      // Not allowed it can only have "yes" or "no" value


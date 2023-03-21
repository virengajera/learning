/* 
The order of element and datatype should be as defined
e.g. you want first element to be of string only, 2nd one of number
 */

let tuple_user: [string,number,boolean]

//tuple_user = ["Viren",25,true]      // Order of datatype matters 1st value must be string then number and last boolean

//tuple_user = [25,"Viren",true]      // Not allowed bcoz 1st value is number it should be string and so on

/* 
    2nd Way using type
*/

type User = [string,number,boolean]

let tuple_user_2 : User = ["hello",56,false]

/* 
    Hint : Since it is array you are allowed to do any array operations of array like push,pop etc.
    but only allowed datatype of User

    Problem : Now order does not matter when pushing 
    means you dont necessarily need to first push number value then string value
*/

tuple_user_2.push(5)
tuple_user_2.push("World")
tuple_user_2.push("Hi")

console.log(tuple_user_2)
// Compiling ts file ==>   tsc  file_name.ts

/* 
 
Types of DataTypes in TypeScript

- Number
- String
- Boolean
- Null
- Undefined
- void
- Object
- Array
- Tuples

- any
- never
- unknown


*/


/* VARIABLES */

let greeting: string = "Hello World"

//greeting = 6 // Not Allowed

let userid: number = 456

let isLogged: boolean = true



/* Type Interference or

 It automaticallys assign datatype you dont need to specificy manually every time

*/

let customerid = 56;        // Here custerid will be of number and cannot be changed later to other datatype

//customerid = "Hello"    // Not Allowed


/* 

Avoid using : any

any : can hold any kind of datatype and can change data type it will be like js so avoid using as much as possible

*/



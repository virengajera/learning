/* 
    DIFFERENCE B/W INTERFACE and TYPES
    ---------------------------------
    Interface : like class you can extends(inherits) multiple interfaces

    here type1 and type2 are interface defined

    const viren : type1 , type2

    In TYPE : & is used to extends types

    DIFFERENT : You cannot add new field once it is created

*/

interface User {
    email : string,
    userID : number,
    getEmail () : string            // or getEmail : () => getEmail
    getDiscount(id : number,value:number) : number
}


let viren : User = {

    email : "viren@gmail.com",
    userID : 2,

    getEmail : function() {
        return this.email
    },
    getDiscount : function(id:number, value : number){
        return id * value * 7
    }
};

/* 
    defining your own field in the existing interface
*/

// This could be written by library and stored somewhere else
// Problem : you want to add your own extra field
// Solution : create interface with same name

interface intf1{
    googleid : number
}


interface intf1{
    myid : string       // here you add extra field according to your requirements
}

let allids : intf1 = {
    googleid : 123,
    myid : "123@cutsom.com"
}


/* 
    You can also extends single or mulitple interface like inheritance

*/
interface Admin extends User,intf1 {
    role : string                   // Custom field added
}

let viren_admin : Admin = {
    email : "admin@gmail.com",
    userID : -1,
    getEmail: ()=>{return "admin@gmail.com"},
    getDiscount : (id:number,value:number) => { return id * value * 9 },

    googleid : 53,
    myid : "6546565",    

    role : "DB Admin"
}

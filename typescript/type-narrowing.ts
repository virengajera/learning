//  Refer google : narrowing in typescript

typeof null // will return "object" in JS
typeof []   // will return "object" in JS

// Here you should handle all the possible case of string
// Here also you one problem empyt string("") is not handled so you have to do it by yourself
function printAll(str : string | string[] | null){

        if(str){    // null is handled

            if(typeof str === "object"){        // array of string is handled

            }
            else if(typeof str === "string"){

            }

        }
}

/* 
    Similar you 2 interfaces in which you want to verify that user is admin or normal user

        then just verify that if input has isadmin property then return that value
*/

type User {
    name : string
}

type Admin {
    name : string,
    isAdmin : boolean
}

function checkIsAdmin(user : User | Admin){

    if("isAdmin" in user ){
        console.log("this is admin and it has isAdmin property")
        return true
    }
    else {
        return false
    }
}
/* Function returning Object  Bad Way*/

function returnObj({ a: string, b: number }): { name: string, age: number } {

    return {
        name: "Viren",
        age: 25
    }
}

/* Solution Define Object usint "type" keyword */

type inputObj = {
    a: string,
    b: number
}

type returnObj_type = {
    name: string,
    age: number
}

function returnObj_2(obj: inputObj): returnObj_type {
    return {
        name: "Viren",
        age: 20
    }
}


/* 

    "readonly" : you will be not allowed to change its value 

    Optional Key : can be passed with "?:" means not necessary to have those field. and Rest of the fields are mandatory

    good practice : that keyname should begin with "_" (single underscore) 

*/


type User = {
    readonly _id: number
    name: string,
    age: number
    creditcard_number?: number
}

let virenUser: User = {
    _id: 123,
    name: "Viren",
    age: 23
}

virenUser._id = 8944654     // not allowed because it is readonly
virenUser.name = "Gajera"       // Will be allowed to change that value


type cardate = {
    date: string
}

type cardetail = {
    expiry: string,
    cvv: number
}

type card_info = cardate & cardetail
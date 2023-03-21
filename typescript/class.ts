class User {

    email: string
    name: string
    readonly city: string

    public id: number
    private age: number

    constructor(email: string, name: string) {

        this.email = email
        this.name = name

    }
}

const Viren = new User("Viren", "viren@gmail.com")

Viren.email = "newmail@gmail.com"

Viren.email = 5     // Not allowed

Viren.city = "Surat"        // Not allowed because city is readonly


/* 

    Good Practice for Declaring and using variables declare directly in constructor and assigned automatically no need to use this

*/

class User_good_way {

    readonly city: string

    // protected variable 
    protected phonenumber:string

    constructor(
        public email: string, 
        public name: string, 
        private age: number
        ) {


    }

    // Getter methods use "get" keyword
    get getNewemail():string {

        return `new+${this.email}`
    }

    // setter note that setter should not return anything it just for changing variable value

    set changeAge(num : number){
        this.age = num + 5
    }


    // private method
    // you cannot called using object e.g. obj.deleteToken()

    private  deleteToken():void{
        console.log("Token deleted")
    } 

}
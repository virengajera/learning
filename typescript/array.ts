/* 
    Defining Array of String or numbers only
*/

const superHeros: string[] = []

// or const superHeros : Array<string> = []

// Readonly array   const userids : ReadonlyArray<string>

superHeros.push("Batman")


/* 

Defining Array which stores Objecgt

*/

type User = {
    name: string,
    age: number
}

const all_users: User[] = []

all_users.push({ name: 'Vire', age: 20 })


/* 

Sub array : Array inside array

*/

const nested_array : number[][] = [
    [255,255,0]
]
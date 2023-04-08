const net = require('net')
const PORT = 3001
const HOST = "127.0.0.1"

const client = net.createConnection({
    host: HOST,
    port:PORT
},()=>{
    for(let i =0;i<2;i++){

        client.write(`Simple message of string ${i}`)
    }
})
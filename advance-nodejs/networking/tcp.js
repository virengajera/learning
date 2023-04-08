const net = require('net')
const PORT = 3001
const HOST = "127.0.0.1"

// Creates a TCP server

const server = net.createServer((socket)=>{

})

server.listen(PORT,HOST,()=>{
    console.log("Opened a TCP server on",server.address())
})
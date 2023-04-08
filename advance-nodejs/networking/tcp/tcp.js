const net = require('net')
const PORT = 3001
const HOST = "127.0.0.1"

// Creates a TCP server
// socket will be duplex stream
const server = net.createServer((socket)=>{

    socket.on('data',(chunks)=>{

        console.log("Data recieved",chunks.toString())

    })  

})

server.listen(PORT,HOST,()=>{
    console.log("Opened a TCP server on",server.address())
})
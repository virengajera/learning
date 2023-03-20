const eventemit = require('events')

class Emitter extends eventemit {}

const myEmitter = new Emitter()

/* 

This event based code does not uses libuv library

It does not perform any asynchronous task. Because events are purely implemented in  JavaScript

It uses object to store all events whenever events are emitted it iterate over
each event and if name matches then execute that callback

*/
myEmitter.on('xyz',()=>{

    console.log("Custom event name \"xyz\" is fired with emit method")
})

myEmitter.emit('xyz')

myEmitter.on("abc", () => {console.log("ABC 1")})
myEmitter.on("abc", () => {console.log("ABC 2")})
myEmitter.on("abc", (param) => {console.log("ABC 3",param)})


myEmitter.emit("abc")
myEmitter.emit("abc","viren")


/* 
Executing event once even if emit happens multiple times 
*/

myEmitter.once('foo',()=>console.log("Called Once even if you have multiple emit"))

myEmitter.emit("foo")
myEmitter.emit("foo")
myEmitter.emit("foo")
myEmitter.emit("foo")
myEmitter.emit("foo")
myEmitter.emit("foo")

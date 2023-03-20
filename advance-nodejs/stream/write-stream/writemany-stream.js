const n = 1000000;

const fs = require('fs').promises;

(async ()=>{

    const fh = await fs.open('writestream.txt','w')

    const write_stream = fh.createWriteStream();

    console.log("Lenght of write_stream Buffer",write_stream.writableHighWaterMark)
    
    // console.log("Filled Buffer",write_stream.writableLength)
    
    // write_stream.write("Hello World")
    
    // console.log("Filled Buffer After writting",write_stream.writableLength)

    // const buff = Buffer.alloc(1e8,"a") // creating buffer of 100MB filled with value a
    
    // const buff = Buffer.alloc(16383,"a")  // size is same as (internal buffer of stream - 1)

    console.log(write_stream.writableLength)
    
    write_stream.write(buff)

    console.log(write_stream.writableLength)

    console.log(write_stream.write(Buffer.alloc(1,"b")))
    console.log(write_stream.write(Buffer.alloc(1,"c")))

    console.log(write_stream.writableLength)

    // "drain" is emitted when internal Buffer (greater than) writable lenght of buffer
    // or write_stream.write() returns false
    
    // Problem : Whenever drain event is called. You are again writting 16384 bytes which will again emit "drain" event results into infinite loop.
    write_stream.on("drain",()=>{
        console.log(write_stream.write(Buffer.alloc(16834,"x")))
        console.log("safe to write in writ_stream buffer")
        console.log(write_stream.writableLength)
    })
    
    // Will return False because we are writting exactly same size of buffer and buffer becomes full
    // so you cannot write more. It returns False.
    // If you will write 1 byte less then value would be true
    console.log(write_stream.write(buff))  

    // On Closing file all the events related to stream will not work. that is why we are commenting right now
    // fh.close()

})()
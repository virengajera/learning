const { Readable } = require('stream'); //bcoz we are implementing writable stream
const fs = require('fs');

class MyReadableStream extends Readable {

    constructor({ highWaterMark, filename }) {

        super({ highWaterMark });

        this.filename = filename;
        this.fd = null;

    }


    _construct(cb) {

        fs.open(this.filename, 'r', (err, fd) => {
            if (err) {
                cb(err);
            }
            else {
                this.fd = fd;
                cb();
            }
        })


    }

    // Different method compared to writable stream

    _read(size) {
        
        const buff = Buffer.alloc(size)

        fs.read(this.fd, buff, 0, size, null, (err, bytesRead) => {

            if (err) {
                return this.destroy(err);   // this part is different from writable stream
            }

            // this.push(null) will call stream.on("end") event because null values is passed in push method
            this.push(bytesRead > 0 ? buff.subarray(0,bytesRead) : null)       // stream.on("Data") event it will give buff value 
        })
    }

    _destroy(err,cb){
        if(this.fd)
        {
            fs.close(this.fd,(e)=> cb(e || err))
        }
        else{
            cb()
        }

    }



}


const mystream = new MyReadableStream({highWaterMark: 1024,filename:"custom.txt"})

mystream.on("data",(chunks)=>{

    console.log(chunks.toString())

})

mystream.on("end",()=>{
    console.log("Reading Ended")
})




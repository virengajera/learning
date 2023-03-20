const { Writable } = require('stream'); //bcoz we are implementing writable stream
const fs = require('fs');

class MyWritableStream extends Writable {

    constructor({ highWaterMark, filename }) {

        super({ highWaterMark });

        this.filename = filename;
        this.fd = null;
        this.chunks = [];
        this.chunksSize = 0;
        this.numberOfWrites = 0;

    }

    // will run after constructor() method is runned
    // All the other will be called only when cb() is executed form _callback otherwise _write() it will wait.
    _construct(cb) {

        fs.open(this.filename, 'w', (err, fd) => {
            if (err) {
                cb(err);
            }
            else {
                this.fd = fd;
                cb();
            }
        })


    }

    // Never emit event in child class let node handle for you
    // Never over-write method with write() in this way
    // cb() ==> means successful if cb(err) ==> error occured node.js will handle closing of stream.
    _write(chunk, encoding, cb) {
        // do our write operation
        this.chunks.push(chunk);
        this.chunksSize += chunk.length;

        if (this.chunksSize > this.writableHighWaterMark) {

            fs.write(this.fd, Buffer.concat(this.chunks), (err) => {

                if (err) {
                    return cb(err);
                }
                this.chunks = [];
                this.chunksSize = 0;
                ++this.numberOfWrites;
                cb();
            })
        }

        else {
            cb();
        }

    }

    // this function is only called when stream.end() is called
    _final(cb) {

        fs.write(this.fd, Buffer.concat(this.chunks), (err) => {

            if (err) {
                cb(err);
            }
            ++this.numberOfWrites;
            this.chunks = [];
            cb();
        })

    }

    _destroy(err, cb) {

        console.log("Number of writes : ", this.numberOfWrites)

        if (this.fd) {
            fs.close(this.fd, (e) => {

                if (e) {
                    cb(e)
                }
                cb()
            })
        }
        else {
            cb(err)
        }
    }

}


const n = 1000000;


(async () => {

    // Time : 1 s
    // Memory Usage : 38 MB
    // CPU : 4%

   
    const mystream = new MyWritableStream({ highWaterMark: 1800, filename: "custom.txt" })

    console.time("custom_mystream")

    let i = 0;

    const writeMany = function () {
        while (i < n) {

            const buff = Buffer.from(` ${i} `, "utf-8")

            if (!mystream.write(buff)) break;

            i++;

            if (i == n) {
                return mystream.end()
                // mystream.write(data)  will throw error
            }
        }
    }

    writeMany();

    mystream.on("drain", () => {

        writeMany()

    })
    
    mystream.on('finish', () => {
        console.log("Stream Finished")
        console.timeEnd("custom_mystream")
    })
})()
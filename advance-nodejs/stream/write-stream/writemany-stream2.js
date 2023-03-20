const n = 1000000;
//const n = 1000000000;  // For creating hughe file for read-stream

const fs = require('fs').promises;


(async ()=>{

    // Time : 5 s
    // Memory Usage : 40 MB
    // CPU : 15 %

    const fh = await fs.open('big.txt','w')

    const write_stream = fh.createWriteStream();     // default higWateMark : 16 KB

    //const write_stream = fh.createWriteStream({ highWaterMark:  10485760 * 5 });   // 10 MB 
    console.time("stream")

    let i = 0;

    const writeMany = function (){
        while(i < n){

            const buff = Buffer.from(` ${i} `,"utf-8")

            if(!write_stream.write(buff)) break;

            i++;

            if(i == n){
                return write_stream.end()
                // write_stream.write(data)  will throw error
            }
        }
    }

    writeMany();

    write_stream.on("drain",()=>{

        // Drain Happens around 468 times = size of file / highwatermarkvalue

        writeMany()

    })

    write_stream.on("finish",()=>{

        console.timeEnd("stream")
        fh.close()
    })



})()
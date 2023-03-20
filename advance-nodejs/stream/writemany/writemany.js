const n = 1000000;

/* const fsPromise = require('fs').promises


(async () => {

    // Time : 1 minute 7 seconds
    // Memory: 43 MB
    // CPU: 21%

    const fh = await fsPromise.open("writemany.txt", "w")
    
    console.time("fs_promise_version")

    for (let i = 0; i < n; i++) {

        await fh.write(` ${i} `)

    }

    console.timeEnd("fs_promise_version")
    fh.close()

})() */



/* 

CALL BACK VERSION

*/


/* 
const fscb =require('fs')


(() => {


    fscb.open("writemany.txt", "w",(err,fh)=>{

        console.time("callback_version")

        for (let i = 0; i < n; i++) {

            

            // With Call back

            // Time : 3.5 s
            // Memory usage : 1 GB
            // CPU: 30%
            // Problem : Order of written number will be different
            
            

            //fscb.write(fh,` ${i} `, ()=>{})


            

            // Synchornous Version is used

            // Time : 7.8 s
            // Memory : 24 MB
            // CPU : 11%
            
            

            fscb.writeSync(fh,` ${i} `)

    
        }

        console.timeEnd("callback_version")
    })
    

})() */



// With Stream
// Using this way is Bad Practice bcoz you dont have control over memory

const fs = require('fs').promises;

(async ()=>{

    // Time : 1 s
    // Memory : 215 MB
    // CPU : 15%
    // Problem : Your memory will blow out if the file size is big
    // Solution : refer code in folder /write_stream

    const fh = await fs.open('writemany.txt','w')

    const write_stream = fh.createWriteStream();

    console.time("with_stream")

    for(let i=0 ; i < n ; i++ ){

        write_stream.write(` ${i} `)

    }

    console.timeEnd("with_stream")
    fh.close()

})()
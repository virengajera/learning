const fs = require('fs').promises;

// Time : 4 s to copy 850MB File
// CPU :  11%
// Memory : 16 MB

// Problem : It has less error handling avoid using in production if necessary.
// Solution : Pipeline API not pipe api

(async ()=>{

    const src = await fs.open('src-big.txt',"r")
    
    const dest = await fs.open('dest-big.txt',"w")
    
    console.time("pipe")

    const read_stream = src.createReadStream()
    const write_stream = dest.createWriteStream()

    read_stream.pipe(write_stream)      // Pipe is used

    // Solution for better Error Handling and Prevent memory leaks : Pipeline
    // const {pipeline} = require('stream')
/*     
    pipeline(read_stream,write_stream,(err)=>{
        if(err){
            console.log(err)
        }
    })
 */
    write_stream.on("finish",()=>{
        console.log("finished writting")
        console.timeEnd("pipe")
    })

    

})()


a
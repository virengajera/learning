const fs = require('fs').promises;


(async ()=>{

    const fh_readBig = await fs.open('src-gigantic.txt','r')  
    const fh_writeBig = await fs.open('dest-gigantic.txt','w')
    

    const read_stream = fh_readBig.createReadStream() // highWaterMark value : 64 KB default
    const write_stream = fh_writeBig.createWriteStream()    // highWaterMark value : 16 KB default

    // const read_stream = fh.createReadStream({highWaterMark : 32 * 1024}) // Changing default high water mark value to 32 KB

    
    console.time('write_stream')

    // Problem:
    // This approach will not work because all the data are written to write_stream buffer
    // Data gets keeping in buffer and your memory will blow out
    // We need to pause the reading and once data is drained continue reading data

    /* 
    read_stream.on('data',(chunks)=>{

        write_stream.write(chunks)
    
    })
     */


    // Solution

    read_stream.on('data',(chunks)=>{

        if(!write_stream.write(chunks)){    
            read_stream.pause()             // once buffer is full stop reading and move data
        }
    }) 

    write_stream.on('drain',()=>{

        read_stream.resume()    // once data is drained to destination continue reading

    })

    read_stream.on('end',()=>{
        console.timeEnd('write_stream')
        console.log('End')
        fh_readBig.close()
        fh_writeBig.close()
    })

    read_stream.on('close',()=>{
        console.log("closed")
    })




})()
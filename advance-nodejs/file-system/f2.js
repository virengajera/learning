const fsPromise = require('fs').promises;

(async ()=>{

    const FileHandler = await fsPromise.open('f2.txt')
   
    const watcher = fsPromise.watch('./f2.txt')

    console.log("Change file content");

    for await (const event of watcher){

        if(event.eventType === "change")
        {

            console.log("File was changed")

            /* 1st time then start read from 1st chartacter to end
                byteRead = 28 (till 28 position all data read)

                2nd time it start from previous position left.
                byteRead = 0 (from position 29 since it is end of file it is 0)

             */

            const content = await FileHandler.read()
            console.log(content)

            /* 
            Here we have very small file but node.js is allocating huge buffer so waste of memory

            Solution 1 : To allocate buffer size acording to size of file.

            const size = (await FileHandler.stat()).size
            const content2 = await FileHandler.read(Buffer.alloc(size))
            */


        }

    }
    FileHandler.close()

}) ()
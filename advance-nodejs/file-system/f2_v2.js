const fsPromise = require('fs').promises;

(async () => {

    // Give unique descriptor 
    const FileHandler = await fsPromise.open('f2.txt')

    const watcher = fsPromise.watch('f2.txt')

    console.log("Change the File to see results")

    FileHandler.on('change', async () => {
        
        console.log("File changed --")

        // Get the size of File
        const size = (await FileHandler.stat()).size

        // Allocate buffer of file-size
        const buffer = Buffer.alloc(size)

        //the location on which we want to start filling buffer
        const offset = 0

        // how many bytes we want to read
        const length = buffer.byteLength

        //Position from which we want start reading the file
        const postion = 0

        const content = await FileHandler.read(buffer, offset, length, postion)

        console.log("Bytes Read :" ,content.bytesRead)
            
        // Now we have data in Buffer you need to decode it
        console.log("Buffer Data : ",buffer.toString("utf-8"))


    })


    for await (const event of watcher) {

        if (event.eventType === "change") {

            FileHandler.emit("change")
        }

    }
    FileHandler.close()

})()
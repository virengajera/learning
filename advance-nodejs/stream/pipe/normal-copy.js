const fs = require('fs').promises;

// Bad Method
// Time : 3.5s 
// CPU : 10%
// Memory Usage: 830 MB around the size of source file because size of source file is 850MB
// Problem : It will copy all the data in memory then to destination
// Solution : Use Pipe or Pipeline API
(async ()=>{

    console.time("cp")
    const src = await fs.readFile('src-big.txt')

    const dest = await fs.open('dest-big.txt',"w")

    await dest.write(src)

    console.timeEnd("cp")

    dest.close()

})()
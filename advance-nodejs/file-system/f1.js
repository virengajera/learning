const fs = require('fs')

const f1_content = fs.readFileSync('f1.txt') // return buffers with hexadecimal values 

// length represents value in Bytes
console.log(f1_content.length,f1_content.toString("utf-8"))
/*

Encryption Transform

*/

const { Transform } = require("node:stream");
const fs = require("node:fs/promises");

class Encrypt extends Transform {
  _transform(chunk, encoding, callback) {
    // <34 + 1, ff, a4 + 1, 11 + 1, 22 + 1....>
    for (let i = 0; i < chunk.length; ++i) {
      if (chunk[i] !== 255) {
        chunk[i] = chunk[i] + 1;
      }
    }
    callback(null, chunk);      // alternate you can use this.push(chunk)
  }
}

// Another way of writting Transform
// Below Transform Stream converts String into Uppercase
const uppercase_transform = new Transform({
  transform(chunk,encoding,cb){

    let uppercase_string = chunk.toString().toUpperCase();

    cb(null,uppercase_string)
  }
})

// called same as below readable_strea.pipe(uppercase_transform).pipe(writable_stream)
/* 

For Better Error Handling Always Use and prevent memory leaks: Pipeline

pipeline(readbale_stream,uppercase_transorm,writbale_stream,(err)=>{

  if(err){
    console.log(err)
  }
})

*/

(async () => {
  const readFileHandle = await fs.open("read.txt", "r");
  const writeFileHandle = await fs.open("encrypted.txt", "w");

  const readStream = readFileHandle.createReadStream();
  const writeStream = writeFileHandle.createWriteStream();

  const encrypt = new Encrypt();

  readStream.pipe(encrypt).pipe(writeStream);  // Read Data => Transform(encrypt) => write to file

})();
const {Buffer} = require('buffer')

/* Allocate 8-Bytes of memory to buff */
const buff = Buffer.alloc(8)

console.log(buff) // each are represented in Hexa-decimal

/* 

You can only write binary data in buffer

so you need encoding to convert s into binary

utf8 represents data in 8 bits or 1 byte means 

it will occupy only 1 byte of buffer

*/
buff.write("s","utf-8")

console.log(buff) // 73 00 00 .....

// 2 bytes gets occupied
buff.write("st","utf-8")

console.log(buff) // 73 74 00 00 .... are in hex

/* 

Will give data in decimal numbers
115,116,0,0 ....

s = 0x73 (In hex) = 115 (In decimal)

*/
console.log(buff.toJSON()) 

/* 
If you try to write more data than buffer then last remaining data will be ignored

abc data will be ignored and string12 will be in buffer

No error will be thrown

*/

buff.write("string12abc")

console.log("Writting more than size of buffer",buff.toJSON())

console.log(buff.length,buff[0]) // 8 115

/* 

Automatically allocate buffer according to size of data

*/

const buff2 = Buffer.from("string","utf-8")

/* 
Write exact data present without any encoding directly to buffer default will be utf-8

e.g 115 is integer will be written 0x115 as hex in buffer

output will be "string"
*/
const buff3 = Buffer.from([115, 116, 114, 105,110, 103])

console.log(buff3.toString())

/* 
    115 is in decimal and you are converting to hex and storing in buff4
*/
const buff4 = Buffer.from([115, 116, 114, 105,110, 103],"hex")

console.log("Buffer 4 With Hex encoding",buff4)

console.log(buff4.toString("hex"))      // output : 73 74 72 69 6e 67
console.log(buff4.toString("utf-8"))    // output : string
console.log(buff4.toString("utf16le"))  //output : 瑳楲杮



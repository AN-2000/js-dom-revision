// JSON.stringify
// => converts a js object to string

// let o = {
//   name: "Rahul",
// };

// console.log(o);

// let stringWhichContainsObject = JSON.stringify(o);

// console.log(stringWhichContainsObject);

//  JSON.parse
// => converts a string which contains a js object back to a js object

// let originalobject = JSON.parse(stringWhichContainsObject);

// console.log(originalobject);

let fs = require("fs")

// fs.writeFileSync("test.txt",JSON.stringify(o))

let buffer = fs.readFileSync("./test.txt")

let stringValue = buffer.toString()

console.log(JSON.parse(stringValue));
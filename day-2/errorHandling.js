let fs = require("fs");

try {
  fs.readFileSync("a.txt");
} catch (err) {
  console.log(err.message);
}

//Creation of a new promise

let p = new Promise(function executor(resolve, reject) {
  setTimeout(function () {
    resolve("kaam hogya");
  }, 2000);
});

// p.finally(function () {
//     //finally is used for cleanup
//   console.log("finally was called");
// }).then(function (v) {
//   console.log(v);
// });

//consumer => then; catch; finally




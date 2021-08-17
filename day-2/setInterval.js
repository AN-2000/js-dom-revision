// Browser => Web Apis
// Nodejs => Node Apis
// it is also a timer function
// setTimeout it only executes the given function once
// setInterval it keeps execting the given function in cycles of the given period

// both setInterval as well as setTimeout takes time in milliseconds
// 1 sec = 1000 millisec

let id = setInterval(function () {
  console.log("this will be printed after 2 sec");
}, 2000);

setTimeout(function () {
  clearInterval(id);
}, 4000);

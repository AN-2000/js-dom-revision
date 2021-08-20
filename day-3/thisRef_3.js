// this in browser with strict mode

"use strict";

//global area (not in any obj or fn)
// console.log(this); // browser's global object = window object

// function f(){
//     console.log(this);  //global object = window object 
// }

// f()

// inside an object
// let obj ={
//     name: "Rahul",
//     f:function(){
//         console.log(this);  // object itself
//     }
// }

// obj.f()

// let obj = {
//   name: "Rahul",
//   f: function () {
//     function g() {
//       console.log(this); //inside inner function it will be undefined
//     }
//     g();
//   },
// };

// obj.f();


// Summary 
// Context: browser + strict 

// 1. global area => this = global object(window) [this is different from nodejs]
// 2. function in global area => this = undefined
// 3. direct function in an object => this = object itself 
// 4. indirect function in an object => undefined

// case 2 and 4 behaves same 



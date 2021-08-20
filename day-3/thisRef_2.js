// this in nodejs with strict mode

"use strict";

//global area (not in any obj or fn)
// console.log(this); // empty object

// function f(){
//     console.log(this);  //undefined
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

let obj = {
  name: "Rahul",
  f: function () {
    function g() {
      console.log(this); //inside inner function it will be undefined
    }
    g();
  },
};

obj.f();


// Summary 
// Context: nodejs + strict 

// 1. global area => this = {}
// 2. function in global area => this = undefined  (diff from non strict)
// 3. direct function in an object => this = object itself 
// 4. indirect function in an object => undefined   (diff from non strict)

// case 2 and 4 behaves same 



// this in nodejs without strict mode

//global area (not in any obj or fn)
// console.log(this); // empty object

// function f(){
//     console.log(this);  //global object
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
//       console.log(this); //inside inner function it will be a global object
//     }
//     g();
//   },
// };

// obj.f();


// Summary 
// Context: nodejs + non strict 

// 1. global area => this = {}
// 2. function in global area => this = global object 
// 3. direct function in an object => this = object itself 
// 4. indirect function in an object => global object 

// case 2 and 4 behaves same 



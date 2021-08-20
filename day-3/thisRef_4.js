// this in browser without strict mode

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
//       console.log(this); //inside inner function it will be a global object = window
//     }
//     g();
//   },
// };

// obj.f();


// Summary 
// Context: browser + non strict 

// 1. global area => this = global object(window) [this is different from nodejs]
// 2. function in global area => this = global object(window) 
// 3. direct function in an object => this = object itself 
// 4. indirect function in an object => global object(window) 

// case 2 and 4 behaves same 



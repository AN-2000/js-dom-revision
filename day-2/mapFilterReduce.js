let a = ["this ", "is ", "a ", "string "];

// function double(x) {
//   return 2 * x;
// }

// let returnedArr = a.map(double);

// console.log(a);
// console.log(returnedArr);

//filter bolta hai aap muje ek function do joki ek condition check krta ho
// and based on that condition muje true ya false deta ho
// function isEven(x) {
//   return x % 2 === 0;
// }

// let returnedArr = a.filter(isEven);

// console.log(a);
// console.log(returnedArr);

function add(x, y) {
  return x + y;
}

let returnedVal = a.reduce(add);

console.log(returnedVal);

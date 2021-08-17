function A() {
  let i = 1;
  return function B() {
    console.log(i);
  };
}

let f = A();

f();

// function memoFib() {
//   let memo = {};

//   return function fibonacci(num) {
//     if (memo[num]) {
//       return memo[num];
//     } else {
//       if (num < 2) {
//         return num;
//       } else {
//         let ans = fibonacci(num - 1) + fibonacci(num - 2);
//         memo[num] = ans
//         return ans;
//       }
//     }
//   };
// }

// let f = memoFib();

// console.log(f(50));

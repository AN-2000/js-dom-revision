let p1 = fetch("https://jsonplaceholder.typicode.com/posts");
let p2 = fetch("https://jsonplaceholder.typicode.com/users");

//takes an array of promises
//gives back a promise
//which resolves when all the promises in the array resolves

let p3 = Promise.all([p1, p2]);

//when the returned promise from promise.all resolves it
// contains an array with values of the promises passed to promise.all
p3.then(function (valArr) {
  console.log(valArr);
});

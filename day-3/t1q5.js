let arr = [1, 2, 3];

console.log(arr);  //[1,2,3]


let randomAdder = function (arr = ["a", "b"]) {


  arr[arr.length * arr.length] = arr.length * arr.length;


};



randomAdder(arr);



console.log(arr[9]);  //9
console.log(arr[8]);  //undefined
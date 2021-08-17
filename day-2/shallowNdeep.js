let o = {
  name: "Rahul",
  age: 16,
  address: {
    city: "Delhi",
    zip: 110001,
  },
};

// let copyObj = {}

// //shallow
// for(x in o){
//     copyObj[x] = o[x]
// }

// console.log(copyObj);
// console.log(o);

let deepCopy = JSON.parse(JSON.stringify(o));

console.log(deepCopy);

let a = [{ name: "Hello" }];

let ansArr = []

for(let i = 0;i<a.length;i++){
    ansArr.push(a[i])
}
Array.prototype.myFilter = function (cb) {
  let ans = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      ans.push(this[i]);
    }
  }
  return ans;
};

let a = [1, 2, 3];

function isEven(x) {
  return x % 2 === 0;
}

let returnedArr = a.myFilter(isEven);

console.log(returnedArr);

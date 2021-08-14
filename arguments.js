function f(flag) {
  if (flag === "m") {
    let product = 1;

    for (let i = 1; i < arguments.length; i++) {
      product *= arguments[i];
    }

    return product;
  } else if (flag === "a") {
    let sum = 0;

    for (let i = 1; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
}

// arguments is nothing but an array like object

console.log(f("m", 2, 4));
console.log(f("a", 2, 4));

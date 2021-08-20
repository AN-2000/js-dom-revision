"use strict";

let obj = {
  name: "Rahul",
  f: function () {
    function g(x, y, z) {
      // using this keyword I want to access properties of obj inside g
      console.log(x + y + z);
      console.log(this);
    }

    //call method it calls the function jispr apne use kra h ise and aap is arguments me this ka ref dete ho
    // and wohi ref g ka bhi this ban jata
    // g.call(this, 1, 2, 3);

    // apply function works exactly the same with a subtle diff
    // let arr = [1,2,3]
    // g.apply(this,arr)

    let newG = g.bind(this);
    
    newG(1, 2, 3);
  },
};

obj.f();

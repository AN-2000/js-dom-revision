function sayHi() {
  console.log("hi");
}

//setTimeout ek function hai, apne use ek dusra function,
// as an argument de rakha hai
// to is function ko callback

function f() {
  console.log("this will greet after 2 sec");
}

setTimeout(f, 2000);

// will go to callstack get executed and will be popped off
sayHi();

// greet();         // output: 

// function greet() {
//   console.log("Hello");
// }

// sayHi();         // output:

// const sayHi = function() {
//   console.log("Hi");
// };

//------

// const user = {
//   name: "Nirmit",
//   greet: function() {
//     return `Hello, ${this.name}`;
//   },
//   shout: () => {
//     return `HELLO, ${this.name}`;
//   }
// };

// console.log(user.greet()); // ?
// console.log(user.shout()); // ?




//---------


// function createGreeter(name) {
//   return function() {
//     console.log("Hi, " + name);
//   };
// }

// const greetNirmit = createGreeter("Nirmit");
// greetNirmit(); 

//---------

// function executor(fn) {
//   console.log("Before");
//   fn();
//   console.log("After");
// }

// executor(function() {
//   console.log("Running inner");
// });


//----------

// function say() {
//   return "hi";
// }

// console.log(say === say);         
// console.log(say === function() { return "hi"; });

//--------

// function greet(name = "Guest") {
//   console.log("Hello, " + name);
// }

// greet();        // ?
// greet("Nirmit"); // ?

//-------

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

//var is function-scoped, not block-scoped

// So there's only one i, shared across all iterations

// By the time setTimeout runs (after 1 second), the loop has already finished and i is 3

// All three callbacks refer to the same i, and they all see 3


//------------

// const x = function hello() {
//   return "hi";
// };

// console.log(x());      // works
// console.log(hello());  // what happens?


//----------


// console.log(a);
// var a = 10;

// console.log(b);
// let b = 20;

//output: undefined
//output: error: Cannot access 'b' before initialization

// -------------


// let user = "nirmit";
// let isMember = user || user.name ? true : false;
// console.log(isMember);

//output: true

// ------
// value = undefined;
// value = "hiii";
// let x = value || "default";
// console.log(x);

//let x = value ?? "default";



// -------

// let person = { profile: { name: "Nirmit" } };
// console.log(person.profile?.name); 
// console.log(person.account?.id);   
// Nirmit 
// undefined

//Can you rewrite the second line without using optional chaining, but still handle it safely?
// console.log(person.account && person.account.id);


//--------


// let score = null;
// let finalScore = score ?? 50;
// console.log(finalScore);
//Output: 50

//-----------


// let score = "33";
// console.log(typeof score);
//output: string
// let value = Number(score);
// console.log(typeof value);
//output: number

//--------

// let x = 5;
// let y = x++;
// let z = ++x;

// console.log(x, y, z);
//output: 7, 6, 7

//-----

// const name = "Nirmit";
// const repo = 50;

// console.log(`My name is ${name} and repo count is ${repo}`);

//----

// function test() {
//   console.log(x);
//   var x = 5;
// }
// test();
//output:undefined

//--------
// let score;       // declaration
// score = 100;     // initialization

// let score = 100; // declaration + initialization

//--------
// function run() {
//   let a = 10;
//   if (true) {
//     let a = 20;
//     console.log(a);
//   }
//   console.log(a);
// }
// run();

//output: 20, 10

//-------
// let data = { id: 0 }; 
// console.log(data.id ?? 10);
// console.log(data.id || 10);

//0 and 10

//------
// typeof these below
// | Expression   | typeof result |
// | ------------ | ------------- |
// | `[]`         | `"object"`    |
// | `{}`         | `"object"`    |
// | `(() => {})` | `"function"`  |
// | `undefined`  | `"undefined"` |
// | `NaN`        | `"number"`    |

//------
// let a = 1;
// console.log(a++); // ?
// console.log(++a); // ?
//------


// let x;
// console.log(x);
// x = 10;
//output: undefined
//You declared the variable x but haven’t assigned it a value yet. So x is undefined by default.


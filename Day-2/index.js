// const obj1 = { name: "Nirmit" };
// const obj2 = {...obj1};

// obj2.name = "Changed";

// console.log(obj1.name); // ?

//output: chnaged
//objects (non-primitives) behave in JavaScript — they're passed by reference.
//You assigned obj2 = obj1. That means both obj1 and obj2 are pointing to the same object in memory. When you do obj2.name = "Changed", you're directly modifying the object itself, not just a copy of it.


//-----

// const obj1 = { name: "Nirmit" };
// const obj2 = { ...obj1 };

// obj2.name = "Changed";

// console.log(obj1.name); 

//output: Nirmit using spread opeartor

//--------

// const original = {
//   name: "Nirmit",
//   skills: ["JS", "React"]
// };

// const copy = { ...original, skills: [...original.skills] };
// copy.skills.push("Node.js");

// console.log(original.skills); 

//output: all 3

//---------

// const arr = [1, 2, 2, 3, 4, 4, 5];

// const uniqueFilter = arr.filter((value, index, self) => self.indexOf(value) === index);

// console.log(uniqueFilter); // [1, 2, 3, 4, 5]

//--------
// A Set is a built-in JavaScript object that only stores unique values.
// const arr = [1, 2, 2, 3, 4, 4, 5];

// const uniqueSet = [...new Set(arr)];

// console.log(uniqueSet); // [1, 2, 3, 4, 5]

//----------

// const key = "username";
// const value = "nirmit";

// const obj = {
//   [key]: value
// };

// console.log(obj); // { username: 'nirmit' }

//---------

// const user = { name: "Nirmit", age: 22 };
// const update = { age: 23, city: "Delhi" };

// const merge = Object.assign({}, user, update)
// console.log(merge);

//------
// const merged = { ...user, ...update };
// console.log(merged);
// { name: 'Nirmit', age: 23, city: 'Delhi' }


//---------

// const config = {
//     env: {
//         prod: {
//             api: "https://api.com"
//         }
//     }
// };

// console.log(config?.env?.prod?.api);


//-----------

// const arr = ["apple", "banana", "cherry"];

// const newObj = Object.assign({}, arr);
// console.log(newObj);


//--------

// const obj2 = arr.reduce((acc, fruit) => {
//   acc[fruit] = true;
//   return acc;
// }, {});

// console.log(obj2);
// { apple: true, banana: true, cherry: true }


//---------

// const obj = { a: 1, b: 2, c: 3 };
// const result = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
// console.log(result);
// ["a=1", "b=2", "c=3"]

// What is Object.entries()?
// It’s a method that takes an object and returns an array of key–value pairs.

//----------


// const [a, , b] = [10, 20, 30];
// console.log(a, b); // ?


//--------

// const a = { x: 1 };
// const b = { x: 1 };

// console.log(a === b); 

//-----------

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// arr2.push(4);

// console.log(arr1); 



//--------

// const a = { x: 1, y: 2 };
// const b = { y: 2, x: 1 };

// console.log(JSON.stringify(a) === JSON.stringify(b)); 

//---------

// let arr = [1, 2];
// let newArr = arr;
// newArr.push(3);

// let arr2 = [...arr];
// arr2.push(4);

// console.log(arr);   // ?
// console.log(arr2);  // ?

//-------
const user = {
  name: "Nirmit",
  age: 22,
  password: "secret"
};

const { password, ...safeUser } = user;

console.log(safeUser);
// { name: 'Nirmit', age: 22 }

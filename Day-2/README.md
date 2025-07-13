# 📘 Day 2 – JavaScript Interview Revision: Arrays & Objects

This README summarizes key theory and behaviors for arrays and objects in JavaScript, based on hands-on problems you solved. These are core concepts tested in interviews, especially around reference types, shallow copies, mutation traps, and transformation techniques.

---

## ✅ Reference vs Copy in Objects

```js
const obj1 = { name: "Nirmit" };
const obj2 = obj1;
obj2.name = "Changed";
console.log(obj1.name); // "Changed"
```

* Objects are assigned by **reference**, not by value.
* `obj1` and `obj2` point to the **same memory location**.

**Using Spread Operator:**

```js
const obj2 = { ...obj1 };
obj2.name = "Changed";
console.log(obj1.name); // "Nirmit"
```

* This creates a **shallow clone**.

---

## ✅ Shallow vs Deep Copy

```js
const original = {
  name: "Nirmit",
  skills: ["JS", "React"]
};
const copy = { ...original };
copy.skills.push("Node.js");
```

* `skills` is a nested array (reference).
* Both `original.skills` and `copy.skills` point to the same array.

To deep clone:

```js
const copy = { ...original, skills: [...original.skills] };
```

---

## ✅ Remove Duplicates from Array

**Using filter:**

```js
arr.filter((val, i, self) => self.indexOf(val) === i)
```

**Using Set:**

```js
[...new Set(arr)]
```

* `Set` stores only unique values.

---

## ✅ Dynamic Object Keys

```js
const key = "username";
const value = "nirmit";
const obj = { [key]: value };
```

* ES6 allows computed property names using square brackets.

---

## ✅ Merging Objects

**Using Object.assign:**

```js
Object.assign({}, obj1, obj2)
```

**Using spread:**

```js
{ ...obj1, ...obj2 }
```

* Later properties overwrite earlier ones.

---

## ✅ Nested Optional Access

```js
config?.env?.prod?.api
```

* Avoids error when accessing deeply nested props.
* Returns `undefined` if any in the chain is nullish.

---

## ✅ Array to Object Transform

```js
const arr = ["apple", "banana"];
const obj = Object.assign({}, arr);
```

* Keys become array indexes.

Convert to boolean map:

```js
arr.reduce((acc, item) => {
  acc[item] = true;
  return acc;
}, {})
```

---

## ✅ Object to Array Transform

```js
Object.entries(obj).map(([k, v]) => `${k}=${v}`)
```

* `Object.entries()` converts object to array of key-value pairs.

---

## ✅ Destructuring Arrays

```js
const [a, , b] = [10, 20, 30];
```

* Skips index 1, assigns `a = 10`, `b = 30`

---

## ✅ Object Identity

```js
const a = { x: 1 };
const b = { x: 1 };
a === b // false
```

* Objects are only equal if they refer to the same memory.

---

## ✅ Array Identity

```js
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1,2,3,4]
```

* Both refer to same array.

---

## ✅ JSON.stringify and Key Order

```js
JSON.stringify({ x: 1, y: 2 }) === JSON.stringify({ y: 2, x: 1 })
```

* May return false due to key order.

---

## ✅ Destructuring with Rest

```js
const { password, ...safeUser } = user;
```

* Removes `password`, keeps remaining properties.

---

## ✅ Reduce for Aggregation

```js
[1, 2, 3].reduce((acc, curr) => acc + curr)
```

* Common pattern for sums, maps, groupings, etc.

---

## ✅ Symbols in Objects

```js
const sym = Symbol("id");
const obj = { [sym]: 123 };
```

* Spread and assign may **not copy symbol keys** unless handled explicitly.

---

## ✅ Nested Mutability Trap

```js
const base = { info: { name: "Nirmit" } };
const copy = { ...base };
copy.info.name = "Changed";
```

* `info` is still a reference.
* Deep cloning is needed for full immutability.

---

## ✅ Slice vs Splice

```js
arr.slice(-2)   // returns last 2 items (non-mutating)
arr.splice(-2)  // removes and returns last 2 (mutating)
```

---

## ✅ Array Holes

```js
const arr = [1, , 3];
arr.length // 3
arr.map(x => x) // skips the hole
```

* Holes are undefined slots that `map` and some methods skip.

---

## ✅ Object.freeze vs Object.seal

```js
Object.freeze(obj)
// No changes allowed — can’t add, remove, or modify props

Object.seal(obj)
// Can modify existing properties but can’t add or remove
```


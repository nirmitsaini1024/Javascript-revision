# 📘 Day 1 – JavaScript Interview Revision (README)

This file summarizes the core concepts you covered on Day 1, with examples and theory you can revisit anytime. These are real interview foundations.

---

## ✅ 1. Hoisting

**What is hoisting?**

* JavaScript moves variable and function **declarations** to the top of their scope at compile time.
* Only `var` declarations are hoisted with `undefined`. `let` and `const` are hoisted but **not initialized**.
* This leads to the **Temporal Dead Zone (TDZ)** for `let` and `const`.

**Examples:**

```js
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;
```

---

## ✅ 2. Declaration vs Initialization

* **Declaration** registers a variable in the scope.
* **Initialization** assigns it a value.

```js
let score;       // declaration
score = 100;     // initialization

let value = 50;  // both
```

---

## ✅ 3. Scope: Function vs Block

* `var` is **function scoped**.
* `let` and `const` are **block scoped**.
* Variables declared inside `{}` with `let`/`const` can’t be accessed outside.

```js
function run() {
  let a = 10;
  if (true) {
    let a = 20;
    console.log(a); // 20
  }
  console.log(a);   // 10
}
```

---

## ✅ 4. typeof Operator

Used to check data types.

```js
typeof []         // 'object'
typeof {}         // 'object'
typeof (() => {}) // 'function'
typeof undefined  // 'undefined'
typeof NaN        // 'number'
```

Note: `typeof null` is also `'object'` – this is a well-known language bug.

---

## ✅ 5. Optional Chaining (`?.`)

* Safely access nested properties.
* Prevents runtime errors if intermediate properties are `undefined` or `null`.

```js
let person = { profile: { name: "Nirmit" } };
console.log(person.profile?.name); // 'Nirmit'
console.log(person.account?.id);   // undefined
```

---

## ✅ 6. Nullish Coalescing (`??`)

* Returns the right-hand value **only if** the left is `null` or `undefined`.
* Unlike `||`, it does not consider `0`, `false`, or `""` as falsy.

```js
let score = null;
let final = score ?? 50;  // 50
```

---

## ✅ 7. Logical Operators

```js
let x = value || "default"; // if value is falsy, use "default"
let y = value ?? "default"; // only uses "default" if value is null/undefined
```

Use `||` when any falsy value (0, false, '') should fallback.
Use `??` when only nullish values should fallback.

---

## ✅ 8. Equality Checks

```js
value == null       // true if value is null or undefined
value === null      // true only if value is strictly null
value === undefined // true only if value is strictly undefined
```

---

## ✅ 9. Pre/Post Increment

```js
let x = 5;
let y = x++;
let z = ++x;

// x = 7, y = 5, z = 7
```

* `x++`: return first, then increment.
* `++x`: increment first, then return.

---

## ✅ 10. Template Literals

* Use backticks \`\` to embed variables.
* Use `${}` for expressions inside the string.

```js
const name = "Nirmit";
const repo = 50;
console.log(`My name is ${name} and repo count is ${repo}`);
```

---

## ✅ 11. Undefined Variables

```js
let x;
console.log(x); // undefined
```

Declared but not initialized → value is `undefined` by default.

---

## ✅ 12. Final Outputs Recap

* `console.log(a); var a = 10;` → `undefined`
* `console.log(b); let b = 20;` → `ReferenceError`
* `typeof null` → `'object'` (language bug)
* `NaN` is a number type
* `[]` and `{}` are both `'object'`
* `undefined` and `null` are different values, but loosely equal

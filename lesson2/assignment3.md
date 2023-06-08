1. Create a variable named `firstName` and set it equal to your first name. Set another variable named `lastName` to your last name. Join the two together, separated by a space, and store the result in a variable named `fullName`. Log the value of `fullName`.

<br>
<br>
<br>

```js
let firstName = 'Christopher';
let lastName = 'Perkins';
let fullName = [firstName, lastName].join(' '); // Just me being sily
//  fullName = firstName + ' ' + lastName       // works too
//  fullName = `${firstName} ${lastName}`       // Does as well
console.log(fullName);                          // => Christopher Perkins
```
---

2. Call concat on `firstName` using `lastName` as an argument. Log the return value.

<br>
<br>
<br>

```js
console.log(firstName.concat(lastName));        // => ChristopherPerkins
```

---

3. Split the `fullName` variable into an array that contains the first and last names as separate strings. Log the value of the array.

<br>
<br>
<br>

```js
console.log(fullName.split(' '));                // => ['Christopher', 'Perkins']
```

---

4. Create a variable named `language` and set it equal to `'JavaScript'`. Find the index of the first occurrence of the letter `'S'` and save it to a variable named `idx` variable. Log the value of `idx`.

<br>
<br>
<br>

```js
let language = 'JavaScript';
let idx = language.indexOf('S');
console.log(idx);                                // => 4
```

---

5. Call `charCodeAt` on the language variable with an argument of `idx`. Save the return value to a variable named `charCode`, then log the value of `charCode`.

<br>
<br>
<br>

```js
let charCode = language.charCodeAt(idx);
console.log(charCode);                           // => 83
```

---

6. Log the return value of `String.fromCharCode` when you pass it `charCode` as an argument.

<br>
<br>
<br>

```js
console.log(String.fromCharCode(charCode));      // => S
```

---

7. Find the index of the last occurrence of the letter `'a'` in the `language` variable and log the result.

<br>
<br>
<br>

```js
console.log(language.lastIndexOf('a'));          // => 3
```

---

8. Create two variables, `a = 'a'` and `b = 'b'`. Log a "greater than" comparison between the two variables. Reassign the value `'B'` to variable `b`, then compare the two variables again, and log the comparison value.

<br>
<br>
<br>

```js
let a = 'a';
let b = 'b';
console.log(a > b);                              // => false
b = 'B';
console.log(a > b);                              // => true
```

---

9. Call the `language.slice` method with arguments `1` and `4`. Next, call the method with arguments `2` and `4`. Log the return values.

<br>
<br>
<br>

```js
console.log(language.slice(1, 4));               // => ava
console.log(language.slice(2, 4));               // => va
```

---

10. Repeat the previous problem, but this time use `substring` instead of `slice`. Do the results differ in any way?

<br>
<br>
<br>

```js
console.log(language.substring(1, 4));           // => ava
console.log(language.substring(2, 4));           // => va
```

No change.

---

11. Call the `language.slice` method with arguments `1` and `-1`. Next, call the method with arguments `2` and `-1`. Log the return values.

<br>
<br>
<br>

```js
console.log(language.slice(1, -1));              // => avaScrip
console.log(language.slice(2, -1));              // => vaScrip
```

---

12. Repeat the previous problem, but this time use `substring` instead of `slice`. Do the results differ in any way?

<br>
<br>
<br>

```js
console.log(language.substring(1, -1));           // => J
console.log(language.substring(2, -1));           // => Ja
```

The larger index is the end, while the smaller is the start. `-1` becomes `0` in this case, so it is like calling `slice` on `0`, `1` and `0`, `2`.

---

13. Create variables named `fact1` and `fact2` and set them equal to `'JavaScript is fun'` and `'Kids like it too'`, respectively. Combine the values of the two variables with the string `' and '` between them, and store the result in a variable named `compoundSentence`. Make sure the first letter of `fact2` shows up as lowercase in `compoundSentence`. Log the value of `compoundSentence`.

<br>
<br>
<br>

```js
let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';
let compoundSentence = `${fact1} and ${fact2.toLowerCase()}`;
console.log(compoundSentence);                   // => JavaScript is fun and kids like it too
```

---

14. Log the first letter of `fact1` and `fact2` using bracket notation.

<br>
<br>
<br>

```js
console.log(fact1[0], fact2[0]);                 // => J K
```

---

15. Create a variable named `pi` and set it to the result of `22 / 7`. Convert `pi` to a String using the `toString` method. Search the resulting string for the final occurrence of `'14'`, and log its index position.

<br>
<br>
<br>

```js
let pi = 22 / 7;
console.log(pi.toString().lastIndexOf('14'));    // => 14
```

---

16. Create a variable named `boxNumber` and set it to the result of calling `356.toString()`, and log the result. Before moving on, try to run your program.

<br>
<br>
<br>

```js
let boxNumber = 356.toString();                  // SyntaxError
console.log(boxNumber);
```

<span style="color:red">One way to avoid this is to use two periods instead of one. Replace 356.toString() with 356..toString(), and try running it again.</span>

```js
let boxNumber = 356..toString();
console.log(boxNumber);                          // => 356
```

<span style="color:red">Some "linter" programs reject this usage, and instead suggest that you use parentheses. Update your program again: eliminate the second period, and place 356 in parentheses, then run the program again.</span>

```js
let boxNumber = (356).toString();
console.log(boxNumber);                          // => 356
```

---

17. Convert the `boxNumber` variable back to a number using `parseInt`. To make sure the result is a number, you can log `typeof boxNumber` to verify the type of the result. Now convert the number back to a String by using the `String` function and log the `typeof` of the result to verify it is now a String.

<br>
<br>
<br>

```js
boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);                   // => number
boxNumber = String(boxNumber);
console.log(typeof boxNumber);                   // => string
```

---

18. Write a program that asks for a user's name, then greets the user with that name. If the user appends a `!` to his name (e.g., `'Bill!'`), the computer should "yell" its greeting: that is, it should log everything to the console in uppercase. You can check whether the name ends with a `!` using `String.prototype.endsWith` (ES6 only). You can remove the `!` from the user's name with `String.prototype.slice`.

Examples:

```
What is your name? Bob
Hello Bob.                                   // console output

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?             // console output
```

<br>
<br>
<br>

```js
const rlSync = require('readline-sync');
let name = rlSync.question('What is your name? ');

if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
```

// Given an array of integers, nums, return the third largest number in the
// array. If the third largest number does not exist, return the greatest
// number.

// You are not allowed to sort the array.

// Example

// thirdMax([3, 2, 1]); // 1

/*
Input: Array
  - Can be sparse?
  - Can be empty?, if so return what
  - Will be integers as elements
  - Will an array always be passed
  - Will more than one argument ever be passed to it?

Output: Third Largest Number
  - Or first largest if there isn't three

Rules:
  -  Are the largest numbers unique? Do we count duplicates as separate largest
    numbers?
  - If there are less than three 'largest numbers' return only the first
  - Can not sort
  - Can I mutate the array?

Assumptions Since no Answers:
  - Duplicates count as different numbers
  - Arrays won't be sparse
  - will have at least 1 element
  - NaN will not be present
  - Infinity is not an integer
  - can not mutate argument

e
thirdMax([1]); // 1
thirdMax([-1]); // -1
thirdMax([1, 2]); // 2
thirdMax([1, 3, 2]); // 1
thirdMax([3, -3, 2]); // -3
thirdMax([1, 2, 2, 3]); // 2

d
  - Array

a
- If less than three elements return max
- Copy Array
- Find Max, then find max index
- Splice max out of copied array
- Repeat two more times and return third max
*/

function thirdMax(nums) {
  if (nums.length < 3) return Math.max(...nums);
  nums = nums.slice();

  let max;
  for (let times = 0; times < 3; times += 1) {
    max = Math.max(...nums);
    nums.splice(nums.indexOf(max), 1);
  }

  return max;
}

console.log(thirdMax([1])); // 1
console.log(thirdMax([-1])); // -1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([1, 3, 2])); // 1
console.log(thirdMax([3, -3, 2])); // -3
console.log(thirdMax([1, 2, 2, 3])); // 2

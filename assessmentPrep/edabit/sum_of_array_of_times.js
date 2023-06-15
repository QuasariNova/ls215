// Create a function that takes an array of strings representing times
// ('hours:minutes:seconds') and returns their sum as an array of integers
// ([hours, minutes, seconds]).

// Example:

// timeSum(['1:03:45', '1:23:05']); // => [2, 26, 50]

/*
Input: Array of Strings
  - Each string is in this format : 'H:MM:SS'
Output: Array of 3 Numbers
  - First is hours
  - Second is minutes
  - Third is seconds

Rules:
  - strings of time can be converted into 3 values, hour, minute, and second
  - Result is sum of times
  - Seconds are 0-59, minutes are 0-59, while hours can be any positive value
  - If input is an empty array, return [0, 0, 0]
  - If input is not an array, return undefined
  - Will not receive a string that is not a time

E
timeSum(['1:03:45', '1:23:05']); // => [2, 26, 50]
timeSum(['0:00:55', '0:00:10']); // => [0, 1, 5]
timeSum(); // => undefined
timeSum([]); // => [0, 0, 0]
timeSum('13:22:05'); // => undefined

D
Array

A
- Transform array of strings into array of numbers representing seconds
  - Split on ':' and convert hours and minutes to seconds
- Fold array of numbers into sum of seconds
- Convert seconds into hours and minutes and return
*/

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 3600;

function timeToSeconds(time) {
  const segments = time.split(':').map(number => parseInt(number, 10));
  return (segments[0] * SECONDS_PER_HOUR)
    + (segments[1] * SECONDS_PER_MINUTE)
    + segments[2];
}

// console.log(timeToSeconds('0:00:32')); // => 32
// console.log(timeToSeconds('1:01:00')); // => 3660

function timeSum(arrayOfTimes) {
  if (!Array.isArray(arrayOfTimes)) return undefined;

  const secondsARR = arrayOfTimes.map(timeToSeconds);
  let seconds = secondsARR.reduce((sum, value) => sum + value, 0);

  let hours = Math.floor(seconds / SECONDS_PER_HOUR);
  seconds %= SECONDS_PER_HOUR;

  let minutes = Math.floor(seconds / SECONDS_PER_MINUTE);
  seconds %= SECONDS_PER_MINUTE;

  return [hours, minutes, seconds];
}

console.log(timeSum(['1:03:45', '1:23:05'])); // => [2, 26, 50]
console.log(timeSum(['0:00:55', '0:00:10'])); // => [0, 1, 5]
console.log(timeSum()); // => undefined
console.log(timeSum([])); // => [0, 0, 0]
console.log(timeSum('13:22:05')); // => undefined

console.log(timeSum(["5:39:42", "10:02:08", "8:26:33"])); // => [24, 8, 23]
console.log(timeSum(["1:23:45"])); // => [1, 23, 45]

// 20 minutes

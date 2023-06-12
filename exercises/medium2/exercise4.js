// Write a function that takes a year as an argument and returns the number of
// 'Friday the 13ths' in that year. You may assume that the year is greater
// than 1752 (when the modern Gregorian Calendar was adopted by the United
// Kingdom). You may also assume that the same calendar will remain in use for
// the foreseeable future.

// Examples:

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

function fridayThe13ths(year) {
  const DAY = 13;
  const FRIDAY = 5;
  let count = 0;

  for (let month = 0; month < 12; month += 1) {
    const date = new Date(year, month, DAY);
    if (date.getDay() === FRIDAY) count += 1;
  }

  return count;
}

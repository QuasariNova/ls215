// Write a program that cleans up user-entered phone numbers so that they can
// be sent as SMS messages. Other than digits, the number may also contain
// special character such as spaces, dash, dot, and parentheses that should be
// ignored.

// The rules are as follows:

//     If the phone number is less than 10 digits, assume that it is a bad
//       number.
//     If the phone number is 10 digits, assume that it is good.
//     If the phone number is 11 digits and the first number is 1, trim the 1
//       and use the last 10 digits.
//     If the phone number is 11 digits and the first number is not 1, then it
//       is a bad number.
//     If the phone number is more than 11 digits, assume that it is a bad
//       number.

// For bad numbers, just a return a string of 10 0s.

/*
Input: String containing phone number
  - Can contain nondigit characters ' ', '-', '.', '(', and ')'
  - Can it contain nonspecial characters too? Can we just ignore them?
    - Assuming no
  - Will input only be a string? If number is submitted and valid is that ok?
Output: String contaning phone number stripped of nondigit characters
  - If invalid number was input, will be a string of 10 0s

Rules:
  - Number has all special characters removed
  - If Number is less than 10 digits, it is bad
  - If number is more than 11 digits, it is bad
  - All numbers with 10 digits are good
  - Numbers with 11 digits must start with 1
  - We return last 10 digits

E
console.log(cleanNumber(''));                              // '0000000000'
console.log(cleanNumber('123456789'));                     // '0000000000'
console.log(cleanNumber('123456789012'));                  // '0000000000'
console.log(cleanNumber('22345678901'));                   // '0000000000'
console.log(cleanNumber('12345678901'));                   // '12345678901'
console.log(cleanNumber('1234567890'));                    // '1234567890'
console.log(cleanNumber('1(800) 456-7932'));               // '18004567932'
console.log(cleanNumber('  940 . 555 -() 3542'));          // '9405553542'
console.log(cleanNumber('  940 a 555 -() 3542'));          // '0000000000'

D
String of numbers

A
- Replace non digit characters in string with nothing.
- Test replaced string with pattern for good number
    - If failes return string of 10 0s
- Return replaced string
*/

function cleanNumber(phoneNumber) {
  if (typeof phoneNumber !== 'string') return '0000000000';

  phoneNumber = phoneNumber.replace(/[ -.()]/g, '');
  if (!/^1?\d{10}$/.test(phoneNumber)) return '0000000000';

  return phoneNumber.slice(-10);
}

console.log(cleanNumber(''));                              // '0000000000'
console.log(cleanNumber('123456789'));                     // '0000000000'
console.log(cleanNumber('123456789012'));                  // '0000000000'
console.log(cleanNumber('22345678901'));                   // '0000000000'
console.log(cleanNumber('12345678901'));                   // '2345678901'
console.log(cleanNumber('1234567890'));                    // '1234567890'
console.log(cleanNumber('1(800) 456-7932'));               // '8004567932'
console.log(cleanNumber('  940 . 555 -() 3542'));          // '9405553542'
console.log(cleanNumber(9405553542));                      // '0000000000'
console.log(cleanNumber('  940 a 555 -() 3542'));          // '0000000000'

// 17 minuts

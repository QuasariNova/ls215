// A triangle is classified as follows:

//     Equilateral: All three sides are of equal length.
//     Isosceles: Two sides are of equal length, while the third is different.
//     Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides
// must be greater than the length of the longest side, and every side must
// have a length greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as
// arguments and returns one of the following four strings representing the
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or
// 'invalid'.

// Examples:

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 4, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

function triangle(one, two, three) {
  let triangle = [one, two, three].sort((a, b) => a - b);

  if (triangle[0] + triangle[1] <= triangle[2]
      || triangle[0] <= 0) return 'invalid';

  if (one === two && two === three) return 'equilateral';
  if (one === two || one === three || two === three) return 'isosceles';
  return 'scalene';
}

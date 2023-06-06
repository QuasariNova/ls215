// Write a Function named totalArea that takes an Array of rectangles as an
// argument. The Function should return the total area covered by all the
// rectangles.

const rectangleArea = (width, length) => width * length;
const sum = (sum, value) => sum + value;

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

function totalArea(rectangles) {
  const areas = rectangles.map((dimensions) => rectangleArea(...dimensions));
  return areas.reduce(sum);
}

// Now, write a second Function named totalSquareArea. This Function should
// calculate the total area of a set of rectangles, just like totalArea.
// However, it should only include squares in its calculations: it should
// ignore rectangles that aren't square.

const isSquare = (width, length) => width === length;

console.log(totalSquareArea(rectangles));    // 121

function totalSquareArea(rectangles) {
  let squares = rectangles.filter((dimensions) => isSquare(...dimensions));
  return totalArea(squares);
}

// Write a function that takes an arbitrary MxN matrix, rotates it clockwise by
// 90-degrees as described above, and returns the result as a new matrix. The
// function should not mutate the original matrix.

// Examples:

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

function rotate90(matrix) {
  const result = Array(matrix[0].length).fill(1).map(_ => []);

  for (let y  = matrix.length - 1; y >= 0; y -= 1) {
    for (let x = 0; x < matrix[y].length; x += 1) {
      result[x].push(matrix[y][x]);
    }
  }

  return result;
}

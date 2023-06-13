// The transpose of a 3x3 matrix is the matrix that results from exchanging the
// rows and columns of the original matrix.

// Write a function that takes an array of arrays that represents a 3x3 matrix
// and returns the transpose of the matrix. You should implement the function
// on your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a
// new matrix and leave the input matrix array unchanged.

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

function transpose(matrix) {
  const result = Array(matrix[0].length).fill(1).map(_ => []);

  for (let y  = 0; y < matrix.length; y += 1) {
    for (let x = 0; x < matrix[y].length; x += 1) {
      result[x].push(matrix[y][x]);
    }
  }

  return result;
}

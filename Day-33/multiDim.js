let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function transposeMatrix(matrix) {
  // Your code here
  //   let temp = matrix[0];
  //   matrix[0] = matrix[1];
  //   matrix[1] = matrix[2];
  //   matrix[2] = temp;

  //   for (let i = 0; i < matrix.length; i++) {
  //     let temp = matrix[i][0];
  //     matrix[i][0] = matrix[i][1];
  //     matrix[i][1] = matrix[i][2];
  //     matrix[i][2] = temp;
  //   }
  // return matrix;
  let results = [];
  for (let i = 0; i < matrix.length; i++) {
    let newRow = [];
    for (let j = 0; j < matrix[i].length; j++) {
      newRow.push(matrix[j][i]);
    }
    results.push(newRow);
  }
  return results;
}

function rowSums(matrix) {
  // Your code here
  let rowSums = matrix.map((row) => row.reduce((a, b) => a + b, 0));
  return rowSums;
}

console.log("Transpose of matrix1:", transposeMatrix(matrix));
console.log("Row sums of matrix1:", rowSums(matrix));


function multiplyMatrix(matrix1, matrix2) {
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

let matrix1 = [[1, 2], [3, 4]];
let matrix2 = [[5, 6], [7, 8]];
let product = multiplyMatrix(matrix1, matrix2);
console.log('Product of Matricies:', product); // Output: [[19, 22], [43, 50]]

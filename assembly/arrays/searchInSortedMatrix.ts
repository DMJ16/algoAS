export function searchInSortedMatrix(matrix: i32[][], target: i32): i32[] {
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) col--;
    else if (matrix[row][col] < target) row++;
    else return [row, col];
  }
  return [-1, -1];
}

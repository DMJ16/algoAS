import "wasi";
import { Console } from "as-wasi";

export function matrixSpiralTraversal(): void {
  const matrix = generateMatrix(60, 30);
  renderSpiral(matrix);
}

function generateMatrix(width: i32, height: i32): i32[][] {
  const matrix: i32[][] = [];
  for (let i = 0; i < height; i++) {
    const row: i32[] = [];
    matrix.push(row);
    for (let j = 0; j < width; j++) {
      matrix[i].push(0);
    }
  }

  let startRow = 0;
  let startCol = 0;
  let endRow = matrix.length - 1;
  let endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      matrix[startRow][col] = 1;
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      matrix[row][endCol] = 2;
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      matrix[endRow][col] = 3;
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      matrix[row][startCol] = 4;
    }
    startRow++;
    startCol++;
    endRow--;
    endCol--;
  }

  return matrix;
}

function renderSpiral(matrix: i32[][]): void {
  for (let i = 0; i < matrix.length; i++) {
    let line = "";
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      let char = "";
      const col = row[j];
      switch (col) {
        case 1:
          char = ">";
          break;
        case 2:
          char = "v";
          break;
        case 3:
          char = "<";
          break;
        case 4:
          char = "^";
          break;
        default:
          char = " ";
      }
      line = line.concat(char);
    }
    Console.log(line);
  }
}

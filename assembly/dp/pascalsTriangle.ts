export function pascalsTriangle(i: i32, j: i32): i32 {
  if (j === 1 || i === j) return 1;
  return pascalsTriangle(i - 1, j - 1) + pascalsTriangle(i - 1, j);
}

export function generatePascalsTriangle(numRows: i32): i32[][] {
  const pascal: i32[][] = [];
  for (let i = 0; i < numRows; i++) {
    const row: i32[] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(pascal[i - 1][j - 1] + pascal[i - 1][j]);
      }
    }
    pascal.push(row);
  }

  return pascal;
}

export function pascalsTriangle2(rowIdx: i32): i32[] {
  const row: i32[] = [1];
  for (let i = 1; i <= rowIdx; i++) {
    for (let j = i; j > 0; j--) {
      if (j === i) row[j] = 1;
      else row[j] = row[j - 1] + row[j];
    }
  }
  return row;
}

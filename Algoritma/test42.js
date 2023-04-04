const matrix = [[1, 4, 4], [4, 8, 6], [9, 8, 9]];
const n = matrix.length;

let diagonal1_sum = 0;
let diagonal2_sum = 0;

for (let i = 0; i < n; i++) {
    diagonal1_sum += matrix[i][i];
    diagonal2_sum += matrix[i][n - 1 - i];
}

const result = diagonal1_sum - diagonal2_sum;
console.log(result);
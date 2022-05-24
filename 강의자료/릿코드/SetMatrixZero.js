/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const rows = new Set();
    const cols = new Set();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }

    rows.forEach((row) => {
        for (let i = 0; i < n; i++) {
            matrix[row][i] = 0;
        }
    });

    cols.forEach((col) => {
        for (let i = 0; i < m; i++) {
            matrix[i][col] = 0;
        }
    });

    return matrix;
};

console.log(
    setZeroes([
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
    ])
);

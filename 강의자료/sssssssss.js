let arr = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];
let input = [
    [1, 2, 3],
    [4, 5, 6],
];



let sr = 1;
let er = 2;
let sc = 1;
let ec = 3;
for (let row = sr; row <= er; row++) {
    arr[row].splice(sc, ec - sc + 1, ...input[row - sr]);
}

console.table(arr);

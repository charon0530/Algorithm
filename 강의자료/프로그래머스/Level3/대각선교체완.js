function solution(arr) {
    let result = [];
    let dx = arr[0].length - 1;
    let dy = arr.length - 1;
    let yj = dy;

    //change
    function std_func(x) {
        return (dy * x) / dx;
    }

    function std_func2(x) {
        return (-dy * x) / dx + yj;
    }

    let upper = [];
    let cross = [];
    let under = [];
    console.table(arr);
    //가로가 크다면 세로로 탐색
    if (arr[0].length >= arr.length) {
        for (let x = 0; x < arr[0].length; x++) {
            for (let y = 0; y < arr.length; y++) {
                if (std_func(x) > y) upper.push(arr[y][x]);
                if (std_func(x) < y) under.push(arr[y][x]);
            }
        }
    }
    if (arr[0].length >= arr.length) {
        for (let x = 0; x < arr[0].length; x++) {
            for (let y = 0; y < arr.length; y++) {
                if (std_func(x) > y) arr[y][x] = under.shift();
                if (std_func(x) < y) arr[y][x] = upper.shift();
            }
        }
    }

    //세로가 크다면 가로로 탐색

    //console.log(upper, under, cross);
    console.table(arr);
    return result;
}

console.log(
    solution([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);

console.log(
    solution([
        [1, 2, 3],
        [4, 5, 6],
    ])
);
console.log(
    solution([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
    ])
);
console.log(
    solution([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ])
);

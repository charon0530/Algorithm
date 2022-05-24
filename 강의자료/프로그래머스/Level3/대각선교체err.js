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

    for (let y = 0; y < arr.length; y++) {
        for (let x = 0; x < arr[0].length; x++) {
            if (std_func(x) > y) upper.push(arr[y][x]);
            if (std_func(x) === y) cross.push(arr[y][x]);
        }
    }

    for (let x = 0; x < arr[0].length; x++) {
        for (let y = 0; y < arr.length; y++) {
            if (std_func(x) < y) under.push(arr[y][x]);
        }
    }
    console.log(upper);
    console.log(under);

    for (let y = 0; y < arr.length; y++) {
        for (let x = 0; x < arr[0].length; x++) {
            if (std_func(x) > y) arr[y][x] = under.shift();
        }
    }
    for (let x = 0; x < arr[0].length; x++) {
        for (let y = 0; y < arr.length; y++) {
            if (std_func(x) < y) arr[y][x] = upper.shift();
        }
    }

    //console.log(upper, under, cross);
    console.table(arr);
    return result;
}

console.log(
    solution([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ])
);

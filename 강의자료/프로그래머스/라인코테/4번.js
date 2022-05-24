function solution(arr, brr) {
    var answer = 0;
    const cursors = new Array(arr.length - 1);

    let temp = 0;
    for (let i = 0; i < cursors.length; i++) {
        cursors[i] = temp + arr[i];
        temp += arr[i];
    }
    cursors.unshift(0);
    cursors.push(cursors[cursors.length - 1] + arr[arr.length - 1]);
    console.log(cursors);

    for (let i = 1; i <= Math.ceil((cursors.length - 2) / 2); i++) {
        if (cursors[i] - cursors[i - 1] !== brr[i - 1]) {
            cursors[i] = cursors[i - 1] + brr[i - 1];
            answer++;
        }
        if (
            cursors[cursors.length - i] - cursors[cursors.length - 1 - i] !==
            brr[brr.length - i]
        ) {
            cursors[cursors.length - 1 - i] =
                cursors[cursors.length - i] - brr[brr.length - i];
            answer++;
        }
    }
    return answer;
}

console.log(solution([3, 7, 2, 4], [4, 5, 5, 2]));
console.log(solution([1, 4, 1, 6], [8, 1, 1, 2]));
console.log(solution([3, 1, 1, 1, 1, 100], [8, 1, 1, 1, 1, 95]));

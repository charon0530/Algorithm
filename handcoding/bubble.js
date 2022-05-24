function solution(arr) {
    for (let i = arr.length - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
    }
    return arr;
}

console.log(solution([9, 8, 7, 6, 5, 4, 3, 21]));

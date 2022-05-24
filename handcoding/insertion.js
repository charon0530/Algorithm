function solution(arr) {
    for (let std = 1; std < arr.length; std++) {
        let val = arr[std];
        let trg;
        for (trg = std - 1; trg >= 0 && arr[trg] > val; trg--) {
            arr[trg + 1] = arr[trg];
        }
        arr[trg + 1] = val;
    }
    return arr;
}
console.log(solution([9, 8, 7, 6, 5, 4, 3, 21]));

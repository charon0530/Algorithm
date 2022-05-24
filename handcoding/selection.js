function solution(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let temp_val = arr[i];
        let temp_idx = i;
        for (let j = i; j < arr.length; j++) {
            if (temp_val > arr[j]) {
                temp_val = arr[j];
                temp_idx = j;
            }
        }
        [arr[i], arr[temp_idx]] = [temp_val, arr[i]];
    }
    return arr;
}

console.log(solution([9, 8, 7, 6, 5, 4, 3, 21]));

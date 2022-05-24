function solution(trg, arr) {
    arr.sort((a, b) => a - b);
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === trg) return mid + 1;
        if (arr[mid] > trg) high = mid - 1;
        else low = mid + 1;
    }
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(65, arr));

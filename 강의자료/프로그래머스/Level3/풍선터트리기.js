function solution(a) {
    var answer = new Set();
    if (a.length === 1) return 1;
    for (let i = 0; i < a.length; i++) {
        let std = a[i];
        let l_min = Number.MAX_SAFE_INTEGER;
        let r_min = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < i; j++) {
            if (a[j] < l_min) l_min = a[j];
        }
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] < r_min) r_min = a[j];
        }
        let temp = [l_min, r_min, std];
        temp.sort((a, b) => a - b).pop();
        for (let v of temp) {
            answer.add(v);
        }
    }
    return answer.size;
}

console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33]));
console.log(
    [-16, 27, 65, -2, 58, -92, -71, -68, -61, -33].sort((a, b) => a - b)
);

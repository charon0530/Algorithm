function solution(a) {
    var left_big = [a[0]];
    var right_big = [a[a.length - 1]];
    var left_min = a[0];
    var right_min = a[a.length - 1];

    for (var i = 1; i < a.length - 1; i++) {
        if (left_min > a[i]) {
            left_min = a[i];
            left_big.push(a[i]);
        }
        if (right_min > a[a.length - i - 1]) {
            right_min = a[a.length - i - 1];
            right_big.push(a[a.length - i - 1]);
        }
    }
    return new Set([...left_big, ...right_big]).size;
}

console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33]));

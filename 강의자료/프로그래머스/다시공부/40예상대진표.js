function solution(n, a, b) {
    let answer = 1;
    a = Math.min(a, b);
    b = Math.max(a, b);

    while (!(b - a === 1 && b % 2 === 0)) {
        answer++;
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
    }
    return answer;
}

console.log(solution(8, 4, 7));

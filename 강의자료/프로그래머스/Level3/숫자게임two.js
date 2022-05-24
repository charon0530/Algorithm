function solution(A, B) {
    var answer = 0;
    let p1 = 0;
    let p2 = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    while (p1 < A.length && p2 < B.length) {
        if (A[p1] < B[p2]) {
            p1++;
            p2++;
            answer++;
        } else p2++;
    }

    return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));

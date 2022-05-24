function solution(A, B) {
    var answer = 0;
    A.sort((a, b) => a - b); // [1,3,5,7]

    for (let i = 0; i < A.length; i++) {
        let x = A[i];
        let min_upper_x = Math.min(...B.filter((el) => el > x));
        let idx = B.indexOf(min_upper_x);
        if (idx === -1) continue;
        B.splice(idx, 1);
        answer++;
    }

    return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));

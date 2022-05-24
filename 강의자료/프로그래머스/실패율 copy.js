function solution(N, stages) {
    var answer = [];
    let tryArr = new Array(N + 1).fill(0);
    let failArr = new Array(N + 1).fill(0);

    stages.forEach((x) => {
        for (let i = 1; i <= N; i++) {
            if (x >= i) {
                tryArr[i]++;
            }
            if (x === i) {
                failArr[i]++;
            }
        }
    });

    for (let i = 1; i < failArr.length; i++) {
        let rate = failArr[i] / tryArr[i];
        answer.push([i, rate]);
    }

    answer.sort((a, b) => {
        if (b[1] === a[1]) {
            return a[0] - b[0];
        }
        return b[1] - a[1];
    });

    return answer.map((x) => x[0]);
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));

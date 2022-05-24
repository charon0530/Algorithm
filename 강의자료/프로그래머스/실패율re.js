function solution(N, stages = []) {
    const answer = [];
    for (let i = 1; i <= N; i++) {
        const tryNum = stages.filter((x) => x >= i).length;
        const failNum = stages.filter((x) => x === i).length;
        answer.push([failNum / tryNum || 0, i]);
    }
    answer.sort((a, b) => {
        if (b[1] === a[1]) return a[1] - b[1];
        return b[0] - a[0];
    });

    return answer.map((x) => x[1]);
}

console.log(solution(5, [4, 4, 4, 4, 4]));

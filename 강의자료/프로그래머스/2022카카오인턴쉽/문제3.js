function solution(alp, cop, problems) {
    var answer = 0;
    let targetAlp = 0;
    let targetCop = 0;

    for (let i = 0; i < problems.length; i++) {
        const [reqAlp, reqCop, rwdAlp, rwdCop, dur] = problems[i];
        targetAlp = Math.max(reqAlp, targetAlp);
        targetCop = Math.max(reqCop, targetCop);
    }
    //정확히 해당 점수 도달
    const dp = Array.from({ length: targetAlp * 2 }, () => new Array(targetCop * 2).fill(-1));
    for (let i = 0; i <= alp; i++) {
        for (let j = 0; j <= cop; j++) {
            dp[i][j] = 0;
        }
    }

    problems.push([0, 0, 1, 0, 1])
    problems.push([0, 0, 0, 1, 1])

    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            if (dp[i][j] === 0) continue;

            let minValue = Number.MAX_SAFE_INTEGER;

            for (const [reqAlp, reqCop, rwdAlp, rwdCop, dur] of problems) {
                //이 문제로 도달할 수 있는가
                if (i - rwdAlp >= reqAlp && j - rwdCop >= reqCop) {
                    minValue = Math.min(minValue, dp[i - rwdAlp][j - rwdCop] + dur)
                }
            }
            dp[i][j] = minValue
        }
    }

    console.table(dp)
    return answer;
}

console.log(
    solution(10, 10, [[10, 15, 2, 1, 2], [20, 20, 3, 3, 4]])
);
//냅색이랑 다른이유 : 순서가 중요
function solution(alp, cop, problems) {
    var answer = Number.MAX_SAFE_INTEGER;
    let targetAlp = 0;
    let targetCop = 0;
    let maxRwdAlp = 0;
    let maxRwdCop = 0;

    for (let i = 0; i < problems.length; i++) {
        const [reqAlp, reqCop, rwdAlp, rwdCop, dur] = problems[i];
        maxRwdAlp = Math.max(maxRwdAlp, rwdAlp);
        maxRwdCop = Math.max(maxRwdCop, rwdCop);
        targetAlp = Math.max(reqAlp, targetAlp);
        targetCop = Math.max(reqCop, targetCop);
    }
    //정확히 해당 점수 도달
    const dp = Array.from({ length: targetAlp + maxRwdAlp + 1 + alp }, () => new Array(targetCop + maxRwdCop + 1 + cop).fill(999));

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
    for (let i = targetAlp; i < dp.length; i++) {
        for (let j = targetCop; j < dp[0].length; j++) {
            answer = Math.min(answer, dp[i][j]);
        }
    }

    console.table(dp)
    return answer;
}

console.log(
    solution(10, 10, [[10, 15, 2, 1, 2], [20, 20, 3, 3, 4]])
);
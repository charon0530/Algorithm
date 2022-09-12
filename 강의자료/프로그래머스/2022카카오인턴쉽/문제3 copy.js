function solution(alp, cop, problems) {
    var answer = 0;
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
    const dp = Array.from({ length: targetAlp + maxRwdAlp + 1 }, () => new Array(targetCop + maxRwdCop + 1).fill(999));
    for (let i = 0; i <= alp; i++) {
        for (let j = 0; j <= cop; j++) {
            dp[i][j] = 0;
        }
    }

    problems.push([0, 0, 1, 0, 1])
    problems.push([0, 0, 0, 1, 1])

    for (const [reqAlp, reqCop, rwdAlp, rwdCop, dur] of problems) {
        for (let i = reqAlp + rwdAlp; i < dp.length; i++) {
            for (let j = reqCop + rwdCop; j < dp[0].length; j++) {
                dp[i][j] = Math.min(dp[i][j], dp[i - rwdAlp][j - rwdCop] + dur)
            }
        }
    }


    console.table(dp)
    return dp[targetAlp][targetCop];
}

console.log(
    solution(10, 10, [[10, 15, 2, 1, 2], [20, 20, 3, 3, 4]])
);
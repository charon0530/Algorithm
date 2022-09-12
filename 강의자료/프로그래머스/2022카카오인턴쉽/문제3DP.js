function solution(alp, cop, problems) {
    var answer = 0;
    let targetAlp = 0;
    let targetCop = 0;


    for (let i = 0; i < problems.length; i++) {
        const [reqAlp, reqCop, rwdAlp, rwdCop, dur] = problems[i];
        ///////////////////////////////////////////////////
        targetAlp = Math.max(reqAlp, targetAlp, alp);
        targetCop = Math.max(reqCop, targetCop, cop);
        ///////////////////////////////////////////////////
    }


    problems.push([0, 0, 1, 0, 1])
    problems.push([0, 0, 0, 1, 1])

    const dp = Array.from({ length: Math.max(targetAlp + 1, alp + 1) }, () => new Array(Math.max(targetCop + 1, cop + 1)).fill(999));

    dp[alp][cop] = 0;


    for (let i = alp; i <= targetAlp; i++) {
        for (let j = cop; j <= targetCop; j++) {
            for (const [reqAlp, reqCop, rwdAlp, rwdCop, dur] of problems) {
                if (i >= targetAlp && rwdCop === 0) continue;
                if (j >= targetCop && rwdAlp === 0) continue;

                if (i >= reqAlp && j >= reqCop) {
                    ///////////////////////////////////
                    const curAlp = Math.min(i + rwdAlp, targetAlp)
                    const curCop = Math.min(j + rwdCop, targetCop)
                    ///////////////////////////////////
                    dp[curAlp][curCop] = Math.min(dp[curAlp][curCop], dp[i][j] + dur)
                }
            }
        }
    }
    console.table(dp)
    return dp[targetAlp][targetCop];
}

console.log(
    solution(10, 10, [[10, 15, 2, 1, 2], [20, 20, 3, 3, 4]])
);
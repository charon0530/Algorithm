function solution(alp, cop, problems = []) {
    var answer = Number.MAX_SAFE_INTEGER;
    let target_alp = 0;
    let target_cop = 0;

    problems.push([0, 0, 1, 0, 1]);
    problems.push([0, 0, 0, 1, 1]);

    for (let i = 0; i < problems.length; i++) {
        const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[i];
        target_alp = Math.max(target_alp, alp_req);
        target_cop = Math.max(target_cop, cop_req);
    }

    let cur_alp = alp;
    let cur_cop = cop;

    const dp = Array.from({ length: target_alp + 1 }, () =>
        new Array(target_cop + 1).fill(999)
    );

    const queue = [];
    queue.push([cur_alp, cur_cop, 0]);
    let i = 0;
    while (queue.length) {
        const [c_alp, c_cop, c_time] = queue.shift();
        //console.log(i++);
        if (answer < c_time) continue;
        if (c_alp <= target_alp && c_cop <= target_cop) {
            if (dp[c_alp][c_cop] <= c_time) continue;
            dp[c_alp][c_cop] = c_time;
        }

        if (c_alp >= target_alp && c_cop >= target_cop) {
            answer = Math.min(answer, c_time);
            continue;
        }

        const can_solve = problems.filter(
            (x) => c_alp >= x[0] && c_cop >= x[1]
        );
        for (let i = 0; i < can_solve.length; i++) {
            const cur_p = can_solve[i];
            queue.push([c_alp + cur_p[2], c_cop + cur_p[3], c_time + cur_p[4]]);
        }
    }
    console.table(dp);

    return answer;
}

console.log(
    solution(10, 10, [
        [10, 15, 2, 1, 2],
        [20, 20, 3, 3, 4],
        [0, 0, 10, 0, 1],
    ])
);

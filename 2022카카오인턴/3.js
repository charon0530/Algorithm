function solution(alp, cop, problems = []) {
    var answer = Number.MAX_SAFE_INTEGER;
    let target_alp = 0;
    let target_cop = 0;

    problems.push([0, 0, 1, 0, 1]);
    problems.push([0, 0, 0, 1, 1]);
    const alp_sort_problems = problems
        .map((line) => line.slice())
        .sort((a, b) => b[2] / b[4] - a[2] / a[4]);
    const cop_sort_problems = problems
        .map((line) => line.slice())
        .sort((a, b) => b[3] / b[4] - a[3] / a[4]);

    const bal_sort_problems = problems
        .map((line) => line.slice())
        .sort((a, b) => (b[2] + b[3]) / b[4] - (a[2] + a[3]) / a[4]);

    for (let i = 0; i < problems.length; i++) {
        const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[i];
        target_alp = Math.max(target_alp, alp_req);
        target_cop = Math.max(target_cop, cop_req);
    }

    function isPossible(time) {
        let cur_alp = alp;
        let cur_cop = cop;

        const queue = [];
        queue.push([cur_alp, cur_cop, 0]);

        while (queue.length) {
            const [c_alp, c_cop, c_time] = queue.shift();
            if (c_time > time) continue;
            else if (c_time < time) {
                if (c_alp >= target_alp && c_cop >= target_cop) return true;
            } else {
                if (c_alp >= target_alp && c_cop >= target_cop) return true;
                else continue;
            }

            //alp우선
            const alp_filtered = alp_sort_problems.filter(
                (x) => time - c_time >= x[4] && c_alp >= x[0] && c_cop >= x[1]
            );
            queue.push([
                c_alp + alp_filtered[0][2],
                c_cop + alp_filtered[0][3],
                c_time + alp_filtered[0][4],
            ]);
            //cop우선;
            const cop_filtered = cop_sort_problems.filter(
                (x) => time - c_time >= x[4] && c_alp >= x[0] && c_cop >= x[1]
            );
            queue.push([
                c_alp + cop_filtered[0][2],
                c_cop + cop_filtered[0][3],
                c_time + cop_filtered[0][4],
            ]);
            //bal우선
            const bal_filtered = bal_sort_problems.filter(
                (x) => time - c_time >= x[4] && c_alp >= x[0] && c_cop >= x[1]
            );
            queue.push([
                c_alp + bal_filtered[0][2],
                c_cop + bal_filtered[0][3],
                c_time + bal_filtered[0][4],
            ]);
        }
        return false;
    }

    let lt = 0;
    let rt = target_alp + target_cop;

    while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2);

        if (isPossible(mid)) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }
    return answer;
}

console.log(
    solution(10, 10, [
        [10, 15, 2, 1, 2],
        [20, 20, 3, 3, 4],
    ])
);

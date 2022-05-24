function solution(jobs) {
    let total = 0;
    const n = jobs.length;

    jobs.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });
    let endTime = -1;

    while (jobs.length) {
        let waited_count = 0;
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i][0] <= endTime) waited_count++;
            else break;
        }

        if (waited_count > 0) {
            let idx = -1;
            let temp_end_time = Number.MAX_SAFE_INTEGER;
            for (let i = 0; i < jobs.length; i++) {
                if (jobs[i][0] <= endTime) {
                    if (jobs[i][1] < temp_end_time) {
                        idx = i;
                        temp_end_time = jobs[i][1];
                    }
                } else break;
            }
            let [s, d] = jobs.splice(idx, 1)[0];
            total += d + (endTime - s);
            endTime += d;
        } else {
            let [s, d] = jobs.shift();
            total += d;
            endTime = s + d;
        }
    }

    return parseInt(total / n);
}

console.log(
    solution([
        [0, 3],
        [1, 9],
        [2, 6],
    ])
);

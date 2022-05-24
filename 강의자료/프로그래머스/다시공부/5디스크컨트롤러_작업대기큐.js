function solution(jobs) {
    let answer = 0;
    let n = jobs.length;
    //jobs를 끝나는시간으로 sort
    //jobs.sort((a,b)=>(a[0]+a[1]) - (b[0]+b[1]));
    // console.log(jobs);
    jobs.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });
    let queue = [];
    queue.push(jobs.shift());
    let sum = 0;
    let endTime = 0;
    while (true) {
        if (queue.length) {
            let cur_job = queue.shift();
            console.log(cur_job);
            let s = cur_job[0];
            let d = cur_job[1];

            if (s >= endTime) {
                sum += d;
                endTime = s + d;
            } else {
                sum += d + (endTime - s);
                //console.log((endTime - s),d);
                endTime = endTime + d;
            }

            let count = 0;
            for (let job of jobs) {
                if (job[0] < endTime) {
                    queue.push(job);
                    count++;
                }
            }
            if (count > 0) queue.sort((a, b) => a[1] - b[1]);
            for (let i = 0; i < count; i++) {
                jobs.shift();
            }
        } else {
            if (jobs.length) {
                queue.push(jobs.shift());
            }
        }

        if (queue.length === 0 && jobs.length === 0) break;
    }

    answer = parseInt(sum / n);
    return answer;
}

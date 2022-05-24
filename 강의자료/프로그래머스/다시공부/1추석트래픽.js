// 소수점 연산에서 toFixed를 이용하는 것이 중요했다.

function solution(lines) {
    let answer = -1;
    let dots = new Set();
    let timeLine = [];
    lines.forEach((line) => {
        const [date, S, T] = line.split(" ");
        const [eH, eM, eS] = S.split(":").map((x) => Number(x));
        const endTime = eH * 3600 + eM * 60 + eS;
        const durTime = Number(T.split("s")[0]);
        const startTime = endTime - (durTime - 0.001);

        timeLine.push([startTime, endTime]);
        dots.add(startTime);
        dots.add(endTime);
    });
    timeLine.sort((a, b) => a[0] - b[0]);

    for (let dot of dots) {
        const std_start_time = dot;
        const std_end_time = Number((std_start_time + 1 - 0.001).toFixed(3));
        let count = 0;

        for (let [s, e] of timeLine) {
            if (!(e < std_start_time || s > std_end_time)) {
                count++;
            }
            if (s > std_end_time) break;
        }
        answer = Math.max(answer, count);
    }
    return answer;
}

console.log(
    solution([
        "2016-09-15 20:59:57.421 0.351s",
        "2016-09-15 20:59:58.233 1.181s",
        "2016-09-15 20:59:58.299 0.8s",
        "2016-09-15 20:59:58.688 1.041s",
        "2016-09-15 20:59:59.591 1.412s",
        "2016-09-15 21:00:00.464 1.466s",
        "2016-09-15 21:00:00.741 1.581s",
        "2016-09-15 21:00:00.748 2.31s",
        "2016-09-15 21:00:00.966 0.381s",
        "2016-09-15 21:00:02.066 2.62s",
    ])
);

function SecToTime(sec) {
    const H = parseInt(sec / 3600);
    sec -= H * 3600;
    const M = parseInt(sec / 60);
    sec -= M * 60;
    const S = sec;

    return (
        String(H).padStart(2, 0) +
        ":" +
        String(M).padStart(2, 0) +
        ":" +
        String(S).padStart(2, 0)
    );
}
function TimeToSec(time = "") {
    const [H, M, S] = time.split(":").map((x) => Number(x));
    return H * 3600 + M * 60 + S;
}
function solution(play_time, adv_time, logs) {
    play_time = TimeToSec(play_time);
    adv_time = TimeToSec(adv_time);

    const acc = new Array(play_time + 1).fill(0);
    logs.forEach((log) => {
        const [s, e] = log.split("-");
        acc[TimeToSec(s)] += 1;
        acc[TimeToSec(e)] -= 1;
    });

    for (let i = 1; i < acc.length; i++) {
        acc[i] += acc[i - 1];
    }

    for (let i = 1; i < acc.length; i++) {
        acc[i] += acc[i - 1];
    }

    let answer = acc[adv_time - 1];

    let idx = 0;
    for (let i = 1; i < acc.length - adv_time; i++) {
        // 끝 지점을 빼는것이 중요!
        if (answer < acc[i + adv_time - 1] - acc[i - 1]) {
            idx = i;
            answer = acc[i + adv_time - 1] - acc[i - 1];
        }
    }

    return SecToTime(idx);
}

console.log(
    solution("02:03:55", "00:14:15", [
        "01:20:15-01:45:14",
        "00:40:31-01:00:00",
        "00:25:50-00:48:29",
        "01:30:59-01:53:29",
        "01:37:44-02:02:30",
    ])
);

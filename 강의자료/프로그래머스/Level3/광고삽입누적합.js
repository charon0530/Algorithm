// 2차원 누적합도 한 번 볼것
// https://velog.io/@ohdowon064/Algorithm-2%EC%B0%A8%EC%9B%90-%EB%B0%B0%EC%97%B4-%EB%B6%80%EB%B6%84%ED%95%A9-%EB%88%84%EC%A0%81%ED%95%A9-%EA%B5%AC%ED%95%98%EA%B8%B0
function TimeToSec(time = "") {
    let [h, m, s] = time.split(":").map((x) => Number(x));
    return 3600 * h + 60 * m + s;
}
function SecToTime(sec = 0) {
    let h = parseInt(sec / 3600);
    sec = sec % 3600;
    let m = parseInt(sec / 60);
    sec = sec % 60;
    sec = parseInt(sec);
    let s = sec;
    return (
        String(h).padStart(2, 0) +
        ":" +
        String(m).padStart(2, 0) +
        ":" +
        String(s).padStart(2, 0)
    );
}

function solution(play_time, adv_time, logs) {
    let answer = 0;
    let time_viewers = new Array(360000).fill(0); // ar[0] => 0초부터 1초까지 보는 사람 수
    //log마다 시작 부터 끝까지 1씩 추가
    logs.forEach((log) => {
        let [s, e] = log.split("-").map((x) => TimeToSec(x));
        time_viewers[s] = time_viewers[s] + 1;
        time_viewers[e] = time_viewers[e] - 1;
    });
    let play_time_sec = TimeToSec(play_time);
    for (let i = 1; i < play_time_sec; i++) {
        time_viewers[i] = time_viewers[i] + time_viewers[i - 1];
    }
    for (let i = 1; i < play_time_sec; i++) {
        time_viewers[i] = time_viewers[i] + time_viewers[i - 1];
    }
    let adv_time_sec = TimeToSec(adv_time);
    let idx;
    answer = time_viewers[adv_time_sec - 1];
    for (let i = adv_time_sec - 1; i < play_time_sec; i++) {
        if (answer < time_viewers[i] - time_viewers[i - adv_time_sec]) {
            answer = time_viewers[i] - time_viewers[i - adv_time_sec];
            idx = i - adv_time_sec + 1;
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
console.log(
    solution("50:00:00", "50:00:00", [
        "15:36:51-38:21:49",
        "10:14:18-15:36:51",
        "38:21:49-42:51:45",
    ])
);
console.log(
    solution("99:59:59", "25:00:00", [
        "69:59:59-89:59:59",
        "01:00:00-21:00:00",
        "79:59:59-99:59:59",
        "11:00:00-31:00:00",
    ])
);

arr = [
    [0, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1],
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[0].length; j++) {
        arr[i][j] += arr[i][j - 1];
    }
}

console.table(arr);

for (let i = 0; i < arr[0].length; i++) {
    for (let j = 1; j < arr.length; j++) {
        arr[j][i] += arr[j - 1][i];
    }
}
console.table(arr);

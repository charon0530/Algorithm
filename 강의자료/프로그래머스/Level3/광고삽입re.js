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
        for (let i = s; i < e; i++) {
            time_viewers[i]++;
        }
    });
    let term = TimeToSec(adv_time);
    //초기 sum값 구하기
    let max_sum = 0;
    let temp_sum = 0;
    for (let i = 0; i < term; i++) {
        temp_sum += time_viewers[i];
    }
    max_sum = temp_sum;
    // sliding window를 통해 sum 클 경우 갱신

    for (let rt = term; rt < TimeToSec(play_time); rt++) {
        temp_sum += time_viewers[rt] - time_viewers[rt - term];
        if (temp_sum > max_sum) {
            max_sum = temp_sum;
            answer = rt - term + 1;
        }
    }
    return SecToTime(answer);
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

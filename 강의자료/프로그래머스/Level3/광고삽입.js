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
    play_time = TimeToSec(play_time);
    let max_time = 0;
    let answer_time = 0;
    let log_sec = [];
    let dots = [];

    for (let i = 0; i < logs.length; i++) {
        let [s, e] = logs[i].split("-").map((x) => TimeToSec(x));
        log_sec.push([s, e]);
        dots.push([s, "S"]);
        dots.push([e, "E"]);
    }
    dots.sort((a, b) => a[0] - b[0]);
    //console.log(log_sec);
    //console.log(dots);

    for (let i = 0; i < dots.length; i++) {
        if (dots[i][1] === "E") continue;
        // START DOT
        let std_time = dots[i][0];
        let std_end_time = std_time + TimeToSec(adv_time);

        if (answer_time === 0 && std_end_time > play_time) {
            return SecToTime(play_time - TimeToSec(adv_time));
        }

        let count = log_sec.filter(
            (x) => x[0] <= std_time && x[1] > std_time
        ).length;
        //console.log(count);
        let idx = i;
        let total = 0;
        let cur_time = std_time;
        for (let j = idx + 1; j < dots.length; j++) {
            if (dots[j][0] >= std_end_time) {
                total += (std_end_time - cur_time) * count;
                break;
            }
            if (dots[j][1] === "S") {
                total += (dots[j][0] - cur_time) * count;
                count++;
                cur_time = dots[j][0];
            } else if (dots[j][1] === "E") {
                total += (dots[j][0] - cur_time) * count;
                count--;
                cur_time = dots[j][0];
            }
        }
        if (total > max_time) {
            max_time = total;
            answer_time = std_time;
        }
    }
    return SecToTime(answer_time);
}

// console.log(
//     solution("02:03:55", "00:14:15", [
//         "01:20:15-01:45:14",
//         "00:40:31-01:00:00",
//         "00:25:50-00:48:29",
//         "01:30:59-01:53:29",
//         "01:37:44-02:02:30",
//     ])
// );
// console.log(
//     solution("50:00:00", "50:00:00", [
//         "15:36:51-38:21:49",
//         "10:14:18-15:36:51",
//         "38:21:49-42:51:45",
//     ])
// );
console.log(
    solution("99:59:59", "25:00:00", [
        "69:59:59-89:59:59",
        "01:00:00-21:00:00",
        "79:59:59-99:59:59",
        "11:00:00-31:00:00",
    ])
);

function solution(n, t, m, timetable = []) {
    //총 n번을 따지는데 마지막 n번째에 탈 수 있는지 or 없는지
    //없다면 마지막 n번의 첫번째 사람보다 1분 빠르게!

    timetable = timetable.map((time) => {
        const [h, m] = time.split(":").map((x) => Number(x));
        const minute = h * 60 + m;
        return minute;
    });

    timetable.sort((a, b) => a - b);
    //console.log(timetable);
    let cur_time = 9 * 60;
    for (let i = 0; i < n; i++) {
        let can_ride_count = timetable.filter((x) => x <= cur_time).length;
        if (i === n - 1) {
            if (can_ride_count <= m - 1) {
                return (
                    String(parseInt(cur_time / 60)).padStart(2, "0") +
                    ":" +
                    String(cur_time % 60).padStart(2, "0")
                );
            } else {
                const val = timetable[m - 1] - 1;
                return (
                    String(parseInt(val / 60)).padStart(2, "0") +
                    ":" +
                    String(val % 60).padStart(2, "0")
                );
            }
        } else {
            if (can_ride_count <= m) {
                for (let j = 0; j < can_ride_count; j++) timetable.shift();
            } else {
                for (let j = 0; j < m; j++) timetable.shift();
            }
            cur_time = cur_time + t;
        }
    }
}

console.log(solution(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"]));
console.log(solution(2, 10, 2, ["09:10", "09:09", "08:00"]));
console.log(solution(2, 1, 2, ["09:00", "09:00", "09:00", "09:00"]));
console.log(solution(1, 1, 5, ["00:01", "00:01", "00:01", "00:01", "00:01"]));
console.log(solution(1, 1, 1, ["23:59"]));

// 문제 단순화 => 가장 마지막 셔틀을 탈 수 있는 시각을 구하면 된다
function solution(n, t, m, timetable) {
    let queue = [];
    timetable.forEach((time) => {
        let [h, m] = time.split(":").map((x) => Number(x));
        queue.push(h * 60 + m);
    });
    // sort는 콜백함수를 안주면 문자열로 취급해서 유니코드 비교함
    // ex)
    //  let a = [1,2,3,4,8,9,1124,11,15,32];
    //  a.sort();
    queue.sort((a, b) => a - b);
    let time = 9 * 60;
    for (let k = 0; k < n - 1; k++) {
        //times of bus
        let people_num = 0;
        for (let i = 0; i < queue.length; i++) {
            if (queue[i] <= time && people_num < m) {
                people_num++;
            }
        }

        for (let i = 0; i < people_num; i++) queue.shift();
        time += t;
    }
    queue = queue.filter((x) => x <= time);
    if (queue.length >= m) {
        time = queue[m - 1] - 1;
    }
    return (
        String(parseInt(time / 60)).padStart(2, "0") +
        ":" +
        String(time % 60).padStart(2, "0")
    );
}

console.log(solution(1, 1, 1, ["00:01"]));

function solution(n, lost, reserve) {
    let real_lost = lost.filter((x) => !reserve.includes(x));
    let real_reserve = reserve.filter((x) => !lost.includes(x));

    console.log(real_lost, real_reserve);
    for (let i = 0; i < real_reserve.length; i++) {
        let num = real_reserve[i];

        let idx = real_lost.indexOf(num - 1);
        if (idx !== -1) {
            real_lost.splice(idx, 1);
            continue;
        }
        idx = real_lost.indexOf(num + 1);
        if (idx !== -1) {
            real_lost.splice(idx, 1);
            continue;
        }
    }
    return n - real_lost.length;
}

console.log(solution(5, [1, 2, 3], [2, 3, 4]));

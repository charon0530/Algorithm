function solution(food_times, k) {
    var answer = 0;
    let cur_idx = 0;

    for (let time = 1; time <= k; time++) {
        food_times[cur_idx]--;
        while (true) {
            if (food_times.reduce((acc, x) => acc + x, 0) === 0) return -1;
            cur_idx = (cur_idx + 1) % food_times.length;
            if (food_times[cur_idx] > 0) break;
        }
    }
    return cur_idx + 1;
}

console.log(solution([3, 2, 2, 3], 8));

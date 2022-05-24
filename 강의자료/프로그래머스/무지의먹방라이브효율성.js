// k 는 인덱스가 움직이는 횟수
function solution(food_times, k) {
    for (let i = 0; i < food_times.length; i++) {
        food_times[i] = [food_times[i], i + 1];
    }

    function myFunc(food_times, k) {
        if (food_times.length === 0) return -1;
        let cycle = Math.floor(k / food_times.length);
        let remain = k - food_times.length * cycle;
        let done = food_times.map((x) => [x[0] - cycle, x[1]]);

        if (cycle === 0) {
            return food_times[remain][1];
        }
        //return cur_idx + 1;
        for (let i = 0; i < done.length; i++) {
            if (done[i][0] < 0) remain += -1 * done[i][0];
        }
        done = done.filter((x) => x[0] > 0);
        return myFunc([...done], remain);
    }

    return myFunc(food_times, k);
}

console.log(solution([3, 1, 2], 5));

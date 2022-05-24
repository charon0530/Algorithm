function solution(coni_pos, brown_pos) {
    //BFS
    const queue = [];
    queue.push([coni_pos, brown_pos, 0]);

    while (queue) {
        const [cur_C, cur_B, time] = queue.shift();

        if (cur_C === cur_B) return time;

        const nexts = [cur_B - 1, cur_B + 1, 2 * cur_B];
        for (let next of nexts) {
            if (next < 0 || next > 200000) continue;

            queue.push([cur_C + (time + 1), next, time + 1]);
        }
    }
    return -1;
}
console.log(solution(11, 1));

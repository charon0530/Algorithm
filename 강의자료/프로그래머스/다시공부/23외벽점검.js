function solution(n, weak = [], dist = []) {
    let answer = 9;
    //친구를 선택하는 순서는 값이 큰것부터! X => 모든 경우의 수
    const dist_pt = [];

    let box = new Array(dist.length).fill(0);
    let ch_list = new Array(dist.length).fill(0);
    function DFS(box_idx) {
        if (box_idx === box.length) {
            dist_pt.push([...box]);
        } else {
            for (let i = 0; i < dist.length; i++) {
                if (ch_list[i] === 1) continue;
                ch_list[i] = 1;
                box[box_idx] = dist[i];
                DFS(box_idx + 1);
                ch_list[i] = 0;
            }
        }
    }
    DFS(0);
    console.log(dist_pt);

    //취약점 선택은 모든 경우의 수

    const weak_list = [];
    weak_list.push([...weak]);
    for (let i = 0; i < weak.length - 1; i++) {
        const shift_val = weak.shift();
        weak.push(shift_val + n);
        weak_list.push([...weak]);
    }

    console.log(weak_list);

    for (let cur_weak of weak_list) {
        for (let cur_dist_pt of dist_pt) {
            let temp_weak = [...cur_weak];
            for (let i = 0; i < cur_dist_pt.length; i++) {
                let cur_dist = cur_dist_pt[i];

                let start = temp_weak[0];
                let end = start + cur_dist;

                temp_weak = temp_weak.filter((x) => x > end);

                if (temp_weak.length === 0) {
                    answer = Math.min(answer, i);
                    break;
                }
            }
        }
    }
    if (answer === 9) return -1;
    return answer;
}

console.log(solution(12, [1, 3, 4, 9, 10], [3, 5, 7]));

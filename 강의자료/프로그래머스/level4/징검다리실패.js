function DFS(rocks = [], box = [], rock_idx = -1, box_idx = -1, result = []) {
    if (box_idx === box.length) {
        result.push([...box]);
    } else {
        for (let i = rock_idx; i < rocks.length; i++) {
            box[box_idx] = rocks[i];
            DFS(rocks, [...box], i + 1, box_idx + 1, result);
        }
    }
}
function isPossible(rock_list, distance, num) {
    let temp_rock_list = [0, ...rock_list].push(distance);
    for (let i = 1; i < temp_rock_list.length; i++) {
        if (temp_rock_list[i] - temp_rock_list[i - 1] > num) {
        }
    }
    return true;
}
function solution(distance, rocks, n) {
    var answer = 0;
    rocks.sort((a, b) => a - b);
    let lt = 1;
    let rt = 1000000000;
    let rock_lists = [];
    let box = new Array(rocks.length - n).fill(0);
    DFS(rocks, box, 0, 0, rock_lists);
    console.log(rock_lists);

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (isPossible(mid)) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    return answer;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));

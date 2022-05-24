function solution(n, info) {
    var answer = [];
    let result = [];
    function DFS(info_idx, arrow, temp = []) {
        if (arrow < 0) return;
        if (info_idx === info.length) {
            temp[temp.length - 1] += arrow;
            answer.push([...temp]);
        } else {
            temp.push(info[info_idx] + 1);
            DFS(info_idx + 1, arrow - info[info_idx] - 1, [...temp]);
            temp.pop();
            temp.push(0);
            DFS(info_idx + 1, arrow, [...temp]);
        }
    }
    DFS(0, n, []);
    //cal score
    let max_score_gap = 0;
    for (let i = 0; i < answer.length; i++) {
        let temp_max_score_gap = 0;
        const temp_result = answer[i];
        for (let j = 0; j < temp_result.length; j++) {
            if (info[j] === 0 && temp_result[j] === 0) continue;
            if (temp_result[j] > info[j]) temp_max_score_gap += 10 - j;
            else temp_max_score_gap -= 10 - j;
        }
        if (temp_max_score_gap > max_score_gap) {
            result = [temp_result];
            max_score_gap = temp_max_score_gap;
        } else if (temp_max_score_gap === max_score_gap) {
            result.push(temp_result);
        }
    }
    if (max_score_gap <= 0) return [-1];
    result.sort((a, b) => {
        for (let i = 10; i >= 0; i--) {
            if (a[i] !== b[i]) return b[i] - a[i];
        }
    });
    return result[0];
}

console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));

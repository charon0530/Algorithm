function solution(n, k) {
    var answer = [];
    const box = new Array(n).fill(0);
    const ch = new Array(n + 1).fill(0);
    function permutation(box_idx) {
        if (box_idx === n) {
            answer.push([...box]);
            return;
        } else {
            for (let i = 1; i <= n; i++) {
                if (ch[i] === 1) continue;

                ch[i] = 1;
                box[box_idx] = i;
                permutation(box_idx + 1);
                ch[i] = 0;
            }
        }
    }
    permutation(0);
    return answer[k - 1];
}

console.log(solution(3, 5, [3, 1, 2]));

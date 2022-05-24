function solution(n, arr) {
    let answer = 0;
    let gragh = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));
    for (let [a, b] of arr) {
        gragh[a][b] = 1;
    }
    let chlist = new Array(n + 1).fill(0);
    let stack = [];

    stack.push([1, 0]);

    while (stack.length !== 0) {
        let [node, dep] = stack.pop();

        if (chlist[node] === 1) continue;
        chlist[node] = 1;
        console.log(node, dep);
        let count = 0;
        for (let i = 1; i <= n; i++) {
            if (gragh[node][i] === 1 && chlist[i] !== 1) {
                stack.push([i, dep + 1]);
                count++;
            }
        }
    }

    return answer;
}

let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];
console.log(solution(5, arr));

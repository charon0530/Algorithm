function solution(k, dungeons) {
    let answer = 0;
    var result = [];
    let temp = new Array(dungeons.length);
    let visited = new Array(dungeons.length).fill(0);
    function DFS(start_idx) {
        if (start_idx === dungeons.length) {
            result.push([...temp]);
        } else {
            for (let i = 0; i < dungeons.length; i++) {
                if (visited[i] === 1) continue;

                visited[i] = 1;
                temp[start_idx] = [...dungeons[i]];
                DFS(start_idx + 1);
                visited[i] = 0;
            }
        }
    }
    DFS(0);
    for (let i = 0; i < result.length; i++) {
        let temp_k = k;
        let times = 0;
        for (let j = 0; j < result[0].length; j++) {
            if (result[i][j][0] <= temp_k) {
                temp_k = temp_k - result[i][j][1];
                times += 1;
            } else break;
        }
        answer = Math.max(answer, times);
    }
    return answer;
}

console.log(
    solution(80, [
        [80, 20],
        [50, 40],
        [30, 10],
    ])
);

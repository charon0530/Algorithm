function solution(places) {
    let answer = [];
    places.forEach((place) => {
        place = place.map((line) => line.split(""));
        let flag = 1;

        for (let i = 0; i < place.length; i++) {
            for (let j = 0; j < place[0].length; j++) {
                if (place[i][j] !== "P") continue;
                //UP RIGHT DOWN LEFT
                let dy = [-1, 0, 1, 0];
                let dx = [0, 1, 0, -1];

                const visited = Array.from({ length: place.length }, () =>
                    new Array(place[0].length).fill(0)
                );

                function DFS(row, col, dis) {
                    if (flag === 0) return;
                    if (dis >= 3) return;
                    if (dis >= 1 && dis <= 2 && place[row][col] === "P") {
                        flag = 0;
                        //console.log(i, j, row, col);
                        return;
                    } else {
                        for (let k = 0; k < 4; k++) {
                            const nr = row + dy[k];
                            const nc = col + dx[k];

                            if (
                                nr < 0 ||
                                nc < 0 ||
                                nr >= place.length ||
                                nc >= place[0].length
                            )
                                continue;
                            if (visited[nr][nc] === 1) continue;
                            if (place[nr][nc] === "X") continue;

                            visited[nr][nc] = 1;
                            DFS(nr, nc, dis + 1);
                            visited[nr][nc] = 0; // => 여기 부분을 추가해줘야한다.
                            // P O
                            // O O
                            // 위와 같을 때, 오른쪽 아래 왼쪽으로 한번 이동하면, 시작점에서 바로 아래로 이동할 수가 없기에 풀어줘야 한다.
                        }
                    }
                }
                visited[i][j] = 1;
                DFS(i, j, 0);
            }
        }
        answer.push(flag);
    });
    return answer;
}

console.log(
    solution([
        ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
        ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
        ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
        ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
        ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
    ])
);

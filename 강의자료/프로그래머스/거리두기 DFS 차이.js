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

                let visited = Array.from({ length: place.length }, () =>
                    new Array(place[0].length).fill(0)
                );

                function DFS(row, col, dis) {
                    if (flag === 0) return;
                    if (dis >= 3) return;
                    if (dis >= 1 && dis <= 2 && place[row][col] === "P") {
                        flag = 0;
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
                            if (dis === 2) continue; //////////////////////////////////////이부분이 차이남
                            visited[nr][nc] = 1;
                            DFS(nr, nc, dis + 1);
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

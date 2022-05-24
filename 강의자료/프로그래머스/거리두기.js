function solution(places) {
    let answer = [];
    places.forEach((place) => {
        place = place.map((line) => line.split(""));

        for (let i = 0; i < place.length; i++) {
            for (let j = 0; j < place[0].length; j++) {
                if (place[i][j] !== "P") continue;
                //UP RIGHT DOWN LEFT
                let dy = [-1, 0, 1, 0];
                let dx = [0, 1, 0, -1];
                let stack = [];
                let visited = Array.from({ length: place.length }, () =>
                    new Array(place[0].length).fill(0)
                );
                stack.push([i, j, 0]);
                visited[i][j] = 1;

                while (stack.length) {
                    let [cur_row, cur_col, cur_dis] = stack.pop();

                    if (cur_dis >= 3) continue;
                    if (
                        cur_dis >= 1 &&
                        cur_dis <= 2 &&
                        place[cur_row][cur_col] === "P"
                    ) {
                        answer.push(0);
                        return;
                    }

                    for (let k = 0; k < 4; k++) {
                        let n_r = cur_row + dy[k];
                        let n_c = cur_col + dx[k];

                        if (
                            n_r < 0 ||
                            n_r >= place.length ||
                            n_c < 0 ||
                            n_c >= place[0].length
                        )
                            continue;
                        if (visited[n_r][n_c] === 1) continue;
                        if (place[n_r][n_c] === "X") continue;

                        visited[n_r][n_c] = 1;
                        stack.push([n_r, n_c, cur_dis + 1]);
                    }
                }
            }
        }
        answer.push(1);
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

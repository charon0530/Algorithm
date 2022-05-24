function solution(places) {
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];
    const answer = places.map((place) => {
        place = place.map((str) => str.split(""));

        for (let i = 0; i < place.length; i++) {
            for (let j = 0; j < place[0].length; j++) {
                if (place[i][j] !== "P") continue;

                const queue = [];
                const visited = Array.from({ length: place.length }, () =>
                    new Array(place[0].length).fill(0)
                );
                visited[i][j] = 1;

                queue.push([i, j, 0]);
                while (queue.length) {
                    const [cur_y, cur_x, dist] = queue.shift();

                    for (let i = 0; i < 4; i++) {
                        const ny = cur_y + dy[i];
                        const nx = cur_x + dx[i];

                        if (
                            ny < 0 ||
                            ny >= place.length ||
                            nx < 0 ||
                            nx >= place[0].length
                        )
                            continue;
                        if (place[ny][nx] === "X") continue;
                        if (visited[ny][nx] === 1) continue;

                        visited[ny][nx] = 1;

                        if (dist + 1 <= 2 && place[ny][nx] === "P") {
                            return 0;
                        }
                        queue.push([ny, nx, dist + 1]);
                    }
                }
            }
        }
        return 1;
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

function solution(routes) {
    let answer = 0;
    while (routes.length) {
        answer++;
        const time_line = new Array(60002).fill(0);

        for (let i = 0; i < routes.length; i++) {
            const cur_route = routes[i];

            const [s, e] = cur_route;

            time_line[s + 30000] += 1;
            time_line[e + 30001] -= 1;
        }

        for (let i = 1; i < time_line.length; i++) {
            time_line[i] += time_line[i - 1];
        }

        let time = 0;
        let maxCount = 0;
        for (let i = 0; i < time_line.length; i++) {
            if (maxCount < time_line[i]) {
                time = i;
                maxCount = time_line[i];
            }
        }

        time = time - 30000;
        routes = routes.filter((x) => !(x[0] <= time && x[1] >= time));
    }
    return answer;
}

console.log(
    solution([
        [-20, -15],
        [-14, -5],
        [-18, -13],
        [-5, -3],
    ])
);

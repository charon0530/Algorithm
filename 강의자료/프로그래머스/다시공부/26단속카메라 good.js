function solution(routes = [[]]) {
    let c_pos = -30001;
    let c_count = 0;
    routes.sort((a, b) => a[1] - b[1]);
    routes.forEach((x) => {
        if (c_pos < x[0]) {
            c_count++;
            c_pos = x[1];
        }
    });
    return c_count;
}

console.log(
    solution([
        [-20, -15],
        [-14, -5],
        [-18, -13],
        [-5, -3],
    ])
);

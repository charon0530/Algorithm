var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [W, H, X, Y, P] = input[0].split(" ").map((x) => Number(x));
    let count = 0;
    for (let i = 1; i <= P; i++) {
        const [px, py] = input[i].split(" ").map((x) => Number(x));
        //네모 안
        if (px >= X && px <= X + W && py >= Y && py <= Y + H) count++;
        //왼쪽 반원 안
        else if (px <= X) {
            const dist = Math.sqrt(
                Math.pow(Math.abs(px - X), 2) +
                    Math.pow(Math.abs(py - (Y + H / 2)), 2)
            );
            if (dist <= H / 2) count++;
        } else if (px >= X + W) {
            //오른쪽 반원 안
            const dist = Math.sqrt(
                Math.pow(Math.abs(px - (X + W)), 2) +
                    Math.pow(Math.abs(py - (Y + H / 2)), 2)
            );
            if (dist <= H / 2) count++;
        }
    }
    console.log(count);
}

solution(param);

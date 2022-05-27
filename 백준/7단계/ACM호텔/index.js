var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const times = Number(input[0]);
    for (let i = 1; i <= times; i++) {
        const [H, W, N] = input[i].split(" ").map((x) => Number(x));
        const mok = parseInt(N / H);
        const rest = N - mok * H;
        if (rest === 0) {
            let xx = String(mok).length >= 2 ? String(mok) : "0" + String(mok);
            console.log(String(H) + xx);
        } else {
            let xx =
                String(mok + 1).length >= 2
                    ? String(mok + 1)
                    : "0" + String(mok + 1);
            let yy = String(rest);

            console.log(yy + xx);
        }
    }
}

soltuion(param);

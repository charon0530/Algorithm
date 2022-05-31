var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N] = input[0].split(" ").map((x) => Number(x));

    const std = [0, 0];
    let xMax = 0;
    let xMin = 0;
    let yMax = 0;
    let yMin = 0;
    const points = [];
    for (let i = 1; i <= 6; i++) {
        const [dir, distance] = input[i].split(" ").map((x) => Number(x));
        if (dir === 1) {
            std[0] += distance;
            xMax = Math.max(xMax, std[0]);
        } else if (dir === 2) {
            std[0] -= distance;
            xMin = Math.min(xMin, std[0]);
        } else if (dir === 3) {
            std[1] -= distance;
            yMin = Math.min(yMin, std[1]);
        } else {
            std[1] += distance;
            yMax = Math.max(yMax, std[1]);
        }
        points.push([...std]);
    }

    const rectPoints = [
        [xMax, yMax],
        [xMax, yMin],
        [xMin, yMax],
        [xMin, yMin],
    ];
    let blank = null;
    for (let i = 0; i < rectPoints.length; i++) {
        const [curX, curY] = rectPoints[i];
        if (points.some((el) => el[0] === curX && el[1] === curY)) continue;

        blank = [curX, curY];
    }
    // console.log(points);
    // console.log(blank);

    const mid = points.filter(
        (el) =>
            el[0] !== xMax && el[0] !== xMin && el[1] !== yMax && el[1] !== yMin
    )[0];
    //console.log(mid);
    const area =
        (xMax - xMin) * (yMax - yMin) -
        Math.abs(mid[0] - blank[0]) * Math.abs(mid[1] - blank[1]);
    return area * N;
}

console.log(solution(param));

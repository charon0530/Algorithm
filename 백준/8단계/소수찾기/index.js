var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function soltuion(input) {
    let answer = 0;
    const N = Number(input[0]);
    const numList = input[1].split(" ").map((x) => Number(x));
    for (let i = 0; i < N; i++) {
        if (isPrime(numList[i])) answer++;
    }
    return answer;
}

console.log(soltuion(param));

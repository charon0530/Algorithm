var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const isPrimeList = new Array(N + 1).fill(true);
    isPrimeList[0] = false;
    isPrimeList[1] = false;
    for (let i = 2; i * i <= N; i++) {
        for (let j = i * i; j <= N; j += i) {
            isPrimeList[j] = false;
        }
    }
    const primeList = isPrimeList
        .map((x, idx) => (x ? idx : -1))
        .filter((x) => x !== -1);

    //console.log(primeList);
    let answer = 0;
    let sum = 0;
    let lt = 0;
    for (let rt = 0; rt < primeList.length; rt++) {
        sum += primeList[rt];
        while (sum >= N) {
            if (sum === N) answer++;
            sum -= primeList[lt];
            lt++;
        }
    }
    console.log(answer);
}

solution(param);

//Meet In Middle 이라는 알고리즘 써야함
//https://wch18735.github.io/algorithm/Meet_in_the_Middle/
//https://ca.ramel.be/100

var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, C] = input[0].split(" ").map(Number);
    const numList = input[1].split(" ").slice(0, N).map(Number);
    let answer = 0;
    function DFS(sourceIdx, sum) {
        if (sum > C) return;
        if (sourceIdx === numList.length) {
            if (sum <= C) answer++;
        } else {
            DFS(sourceIdx + 1, sum + numList[sourceIdx]);
            DFS(sourceIdx + 1, sum);
        }
    }
    DFS(0, 0);
    console.log(answer);
}

solution(param);

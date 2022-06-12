//https://rebro.kr/33
//https://chanhuiseok.github.io/posts/algo-49/
var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = [];
    const strList = input[1].split(" ");
    for (let i = 0; i < N; i++) {
        numList.push(Number(strList[i]));
    }
    //console.log(numList);
    let answer = 0;
    let answerList = [];
    function DFS(sourceIdx, temp) {
        if (sourceIdx === numList.length) {
            answerList.push([...temp]);
            if (answer < temp.length) {
                answer = temp.length;
            }
            return;
        } else {
            if (numList[sourceIdx] <= temp[temp.length - 1]) {
                DFS(sourceIdx + 1, [...temp]);
            } else {
                DFS(sourceIdx + 1, [...temp, numList[sourceIdx]]);
                DFS(sourceIdx + 1, [...temp]);
            }
        }
    }
    DFS(0, [-1]);
    console.log(answerList);

    console.log(answer - 1);
}

solution(param);

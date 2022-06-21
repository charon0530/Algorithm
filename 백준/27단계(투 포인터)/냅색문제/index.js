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
    const listA = [];
    const listB = [];
    for (let i = 0; i <= N / 2; i++) {
        listA.push(numList[i]);
    }
    for (let i = Math.floor(N / 2) + 1; i < N; i++) {
        listB.push(numList[i]);
    }
    //console.log(listA, listB);

    function DFS(source, sourceIdx, targetList, sum) {
        if (sourceIdx >= source.length) {
            targetList.push(sum);
        } else {
            DFS(source, sourceIdx + 1, targetList, sum + source[sourceIdx]);
            DFS(source, sourceIdx + 1, targetList, sum);
        }
    }
    const subsetA = [];
    const subsetB = [];
    DFS(listA, 0, subsetA, 0);
    DFS(listB, 0, subsetB, 0);

    subsetA.sort((a, b) => a - b);
    let answer = 0;
    for (let val of subsetB) {
        if (val > C) continue;

        let tempResult = 0;
        let lt = 0;
        let rt = subsetA.length - 1;

        while (lt <= rt) {
            const mid = Math.floor((lt + rt) / 2);

            if (subsetA[mid] <= C - val) {
                tempResult = mid;
                lt = mid + 1;
            } else {
                rt = mid - 1;
            }
        }
        answer += tempResult + 1;
    }
    console.log(answer);
}

solution(param);

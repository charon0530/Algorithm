var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const loadLenList = input[1].split(" ").map(BigInt);
    const costList = input[2].split(" ").map(BigInt);
    if (costList.every((x) => x === 1n))
        return String(loadLenList.reduce((acc, val) => acc + val, 0n));
    let answer = 0n;
    let curNode = N - 1;

    while (true) {
        if (curNode === 0) break;

        //현 노드를 제외한 왼쪽 cost리스트에서 가장 작은값을 구하고 그 노드까지 가는데 거리를 구한다음 더한다.
        costList.pop();
        let min = 1000000001n;

        for (let i = 0; i < costList.length; i++) {
            if (min > costList[i]) {
                min = costList[i];
            }
        }

        let subSum = 0n;
        for (let i = curNode; i >= 0; i--) {
            if (costList[i] === min) {
                curNode = i;
                break;
            }
            subSum += loadLenList[i - 1];
        }
        answer += subSum * min;
    }
    return String(answer);
}

console.log(solution(param));

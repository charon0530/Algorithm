var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const inputNumList = input[1].split(" ").map(Number);
    const numList = [];
    for (let i = 0; i < N; i++) {
        numList.push(inputNumList[i]);
    }
    //console.log(numList);
    const accList = [numList[0]];
    for (let i = 1; i < numList.length; i++) {
        accList[i] = accList[i - 1] + numList[i];
    }
    //console.log(accList);
    let idx = 2;
    let str = "";
    for (let i = 0; i < M; i++) {
        const [start, end] = input[idx++].split(" ").map(Number);
        const sum =
            start - 2 >= 0
                ? accList[end - 1] - accList[start - 2]
                : accList[end - 1];
        str += String(sum) + "\n";
    }
    console.log(str);
}

solution(param);

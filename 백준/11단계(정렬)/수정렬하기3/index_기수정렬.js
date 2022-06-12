var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let inputList = [];
    const bucketList = Array.from({ length: 10 }, () => new Array());

    let man_count = 0;
    for (let i = 1; i <= N; i++) {
        if (Number(input[i]) === 10000) {
            man_count++;
            continue;
        }
        inputList.push(String(input[i]).padStart(4, "0"));
    }
    //console.log(inputList);
    let outputList = [];
    for (let i = 3; i >= 0; i--) {
        for (let j = 0; j < inputList.length; j++) {
            bucketList[Number(inputList[j][i])].push(inputList[j]);
        }
        for (let j = 0; j <= 9; j++) {
            outputList.push(...bucketList[j]);
        }

        for (let j = 0; j <= 9; j++) {
            bucketList[j] = [];
        }
        //console.log(i, outputList);
        inputList = outputList;
        outputList = [];
    }

    let str = "";
    for (let i = 0; i < inputList.length; i++) {
        str += String(Number(inputList[i])) + "\n";
    }
    for (let i = 0; i < man_count; i++) {
        str += "10000\n";
    }
    console.log(str);
}

solution(param);

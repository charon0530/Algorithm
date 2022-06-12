var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin" or 0
    .toString()
    .split("\n");

function soltuion(input = ["", ""]) {
    const inputList = input.map((str) => str.split(" ").map((x) => Number(x)));

    for (let i = 0; i < inputList.length; i++) {
        console.log(inputList[i][0] + inputList[i][1]);
    }
}

soltuion(param);

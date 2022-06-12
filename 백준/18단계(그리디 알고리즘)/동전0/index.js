var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    let curMoney = M;
    let answer = 0;
    const coinList = [];
    for (let i = 1; i <= N; i++) {
        coinList.push(Number(input[i]));
    }
    coinList.sort((a, b) => b - a);
    console.log(coinList);

    for (let i = 0; i < coinList.length; i++) {
        if (curMoney === 0) break;
        const curCoin = coinList[i];

        const coinNum = parseInt(curMoney / curCoin);
        answer += coinNum;
        curMoney -= coinNum * curCoin;
    }
    console.log(answer);
}

solution(param);

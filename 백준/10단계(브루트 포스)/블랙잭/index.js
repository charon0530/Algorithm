var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map((x) => Number(x));
    const cardList = input[1].split(" ").map((x) => Number(x));
    let answer = Number.MAX_SAFE_INTEGER;

    const box = new Array(3).fill(-1);
    const ch = new Array(cardList.length).fill(0);
    const resultList = [];
    function DFS(boxIndex, sum) {
        if (sum > M) return;
        if (boxIndex === box.length) {
            if (Math.abs(answer - M) > Math.abs(sum - M)) {
                answer = sum;
                resultList.push([...box]);
            }
        } else {
            for (let i = 0; i < cardList.length; i++) {
                if (ch[i] === 1) continue;
                ch[i] = 1;
                box[boxIndex] = cardList[i];
                DFS(boxIndex + 1, sum + cardList[i]);
                ch[i] = 0;
            }
        }
    }
    DFS(0, 0);
    console.log(answer);
    // console.log(resultList);
}

solution(param);

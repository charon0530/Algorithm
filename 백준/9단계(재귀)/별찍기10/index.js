// 큰 배열에 작은 배열들을 옮길 때에는 오프셋을 이용하자!

var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const N = Number(input[0]);

    function recursive(num) {
        if (num === 3) {
            const result = new Array(3).fill("");
            result[0] = ["*", "*", "*"];
            result[1] = ["*", " ", "*"];
            result[2] = ["*", "*", "*"];
            return result;
        } else {
            const partList = new Array(9).fill(null);
            partList[0] = recursive(num / 3);
            partList[1] = recursive(num / 3);
            partList[2] = recursive(num / 3);
            //num/3 by num/3 빈공간
            partList[3] = recursive(num / 3);
            const copy = partList[0].map((line) =>
                new Array(line.length).fill(" ")
            );
            partList[4] = copy;
            partList[5] = recursive(num / 3);

            partList[6] = recursive(num / 3);
            partList[7] = recursive(num / 3);
            partList[8] = recursive(num / 3);

            const result = Array.from({ length: num }, () =>
                new Array(num).fill(-1)
            );
            for (let i = 0; i < 9; i++) {
                const cur = partList[i];
                const offsetCol = (i % 3) * partList[i].length;
                const offsetRow = parseInt(i / 3) * partList[i].length;
                for (let r = 0; r < cur.length; r++) {
                    for (let c = 0; c < cur.length; c++) {
                        result[offsetRow + r][offsetCol + c] = cur[r][c];
                    }
                }
            }
            return result;
        }
    }
    const answer = recursive(N);
    for (let i = 0; i < answer.length; i++) {
        console.log(answer[i].join(""));
    }
}

soltuion(param);

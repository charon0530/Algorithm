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
            const partList = recursive(num / 3);
            const blank = partList.map((line) =>
                new Array(line.length).fill(" ")
            );
            const result = Array.from({ length: num }, () =>
                new Array(num).fill(-1)
            );
            for (let i = 0; i < 9; i++) {
                const cur = partList;
                const offsetCol = (i % 3) * partList.length;
                const offsetRow = parseInt(i / 3) * partList.length;
                if (i === 4) {
                    for (let r = 0; r < blank.length; r++) {
                        for (let c = 0; c < blank.length; c++) {
                            result[offsetRow + r][offsetCol + c] = blank[r][c];
                        }
                    }
                } else {
                    for (let r = 0; r < cur.length; r++) {
                        for (let c = 0; c < cur.length; c++) {
                            result[offsetRow + r][offsetCol + c] = cur[r][c];
                        }
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

var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const str = input[0];
    const num = Number(input[1]);

    const accList = Array.from({ length: 26 }, () =>
        new Array(str.length).fill(0)
    );

    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[j].charCodeAt() - "a".charCodeAt() === i) {
                accList[i][j] += 1;
            }
        }
    }

    for (let i = 0; i < 26; i++) {
        for (let j = 1; j < accList[0].length; j++) {
            accList[i][j] += accList[i][j - 1];
        }
    }
    //console.table(accList);

    let result = "";
    let lineIdx = 2;
    for (let i = 0; i < num; i++) {
        let [alpha, start, end] = input[lineIdx++].split(" ");
        alpha = String(alpha);
        start = Number(start);
        end = Number(end);

        const tempResult =
            start - 1 >= 0
                ? accList[alpha.charCodeAt() - "a".charCodeAt()][end] -
                  accList[alpha.charCodeAt() - "a".charCodeAt()][start - 1]
                : accList[alpha.charCodeAt() - "a".charCodeAt()][end];
        result += tempResult + "\n";
    }
    console.log(result);
}

solution(param);

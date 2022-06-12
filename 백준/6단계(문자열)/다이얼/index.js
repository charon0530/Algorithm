var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function getTime(char) {
    if (char === "A" || char === "B" || char === "C") return 3;
    if (char === "D" || char === "E" || char === "F") return 4;
    if (char === "G" || char === "H" || char === "I") return 5;
    if (char === "J" || char === "K" || char === "L") return 6;
    if (char === "M" || char === "N" || char === "O") return 7;
    if (char === "P" || char === "Q" || char === "R" || char === "S") return 8;
    if (char === "T" || char === "U" || char === "V") return 9;
    if (char === "W" || char === "X" || char === "Y" || char === "Z") return 10;
}
function soltuion(input) {
    const str = String(input[0]);
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result += getTime(str[i]);
    }
    console.log(result);
}

console.log(soltuion(param));

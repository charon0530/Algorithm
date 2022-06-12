var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    let count = 0;
    const arr = new Array(10001).fill(false);
    function d(n) {
        count++;

        const str = String(n);
        let sum = n;
        for (let i = 0; i < str.length; i++) {
            sum += Number(str[i]);
        }
        if (sum > 10000) return;
        else {
            if (arr[sum]) return;
            else {
                arr[sum] = true;
                d(sum);
            }
        }
    }
    for (let i = 1; i < 10000; i++) {
        d(i);
    }
    for (let i = 1; i < arr.length; i++) {
        if (!arr[i]) console.log(i);
    }
}

console.log(soltuion(param));

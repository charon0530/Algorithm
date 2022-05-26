var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    let str = String(input[0]);
    const list = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

    for (let i = 0; i < list.length; i++) {
        const target = list[i];
        const reg = new RegExp(target, "g");
        str = str.replace(reg, "*");
    }
    return str.length;
}

console.log(soltuion(param));

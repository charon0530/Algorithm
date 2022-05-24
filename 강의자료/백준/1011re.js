// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let count = input[0];
// let numbers = [];

// for (let i = 1; i <= count; i++) {
//     numbers.push(input[i].split(" "));
// }

// for (let i = 0; i < numbers.length; i++) {
let a = 45; //Number(numbers[i][0]);
let b = 50; //Number(numbers[i][1]);
let dist = b - a;

let times = 1;
while (true) {
    let moc = parseInt(times / 2);
    let plus_num = moc + 1;
    let temp_sum = moc * (moc + 1);

    if (moc === times / 2) {
        // 짝수 번 일 때
        if (temp_sum >= dist) {
            console.log(times);
            break;
        }
    } else {
        if (temp_sum + plus_num >= dist) {
            // 홀수 번 일 때
            console.log(times);
            break;
        }
    }
    times++;
}
// }

function solution(a, b) {
    let dist = b - a;
    let times = 0;
    let inc_num = 1;
    let temp_sum = 0;
    while (true) {
        times++;
        if (times % 2 === 1) {
            temp_sum += inc_num;

            inc_num++;

            if (temp_sum * 2 >= dist) return parseInt((times + 1) / 2) * 2;
        } else {
            if (temp_sum * 2 + inc_num >= dist)
                return parseInt(times / 2) * 2 + 1;
        }
    }
}

console.log(solution(45, 50));

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let count = input[0];
// let numbers = [];

// for (let i = 1; i < input.length; i++) {
//     if (input[i] !== "") {
//         numbers.push(input[i].split(" "));
//     }
// }

// for (let i = 0; i < numbers.length; i++) {
let a = Number(numbers[i][0]);
let b = Number(numbers[i][1]);

let dist = b - a;
let times = 0;
let inc_num = 1;
let temp_sum = 0;

while (true) {
    times++;
    if (times % 2 === 1) {
        temp_sum += inc_num;

        inc_num++;

        if (temp_sum * 2 >= dist) {
            console.log(parseInt((times + 1) / 2) * 2);
            break;
        }
    } else {
        if (temp_sum * 2 + inc_num >= dist) {
            console.log(parseInt(times / 2) * 2 + 1);
            break;
        }
    }
}
// }

// /////////////////

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let count = input[0];
// let numbers = [];

// for (let i = 0; i < count; i++) {
//         numbers.push(input[i].split(" "));
// }

// for (let i = 0; i < numbers.length; i++) {
//     let a = Number(numbers[i][0]);
//     let b = Number(numbers[i][1]);

//     let dist = b - a;
//     let max = parseInt(Math.sqrt(dist));

//     if (max === Math.sqrt(dist)) {
//         console.log(max * 2 - 1);
//     } else if (dist <= max * max + max) {
//         console, log(max * 2);
//     } else {
//         console.log(max * 2 + 1);
//     }
// }

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = input[0];
let numbers = [];

for (let i = 1; i <= count; i++) {
    numbers.push(input[i].split(" "));
}

for (let i = 0; i < numbers.length; i++) {
    let a = Number(numbers[i][0]);
    let b = Number(numbers[i][1]);

    let dist = b - a;
    let max = parseInt(Math.sqrt(dist));

    if (max === Math.sqrt(dist)) {
        console.log(max * 2 - 1);
    } else if (dist <= max * max + max) {
        console.log(max * 2);
    } else {
        console.log(max * 2 + 1);
    }
}

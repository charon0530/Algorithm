"use strict";
function solution(sticker) {
    if (sticer.length === 1) return sticker[0];
    let dp_o = new Array(sticker.length);
    let dp_x = new Array(sticker.length);

    dp_o[0] = sticker[0];
    dp_o[1] = sticker[0];

    dp_x[0] = 0;
    dp_x[1] = sticker[1];

    for (let i = 2; i < sticker.length - 1; i++) {
        dp_o[i] = Math.max(dp_o[i - 2] + sticker[i], dp_o[i - 1]);
    }
    for (let i = 2; i < sticker.length; i++) {
        dp_x[i] = Math.max(dp_x[i - 2] + sticker[i], dp_x[i - 1]);
    }
    return Math.max(dp_o[sticker.length - 2], dp_x[sticker.length - 1]);
}

console.log(solution([1, 3, 2, 5, 4]));

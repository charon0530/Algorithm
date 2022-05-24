"use strict";
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let answer = 0;
    let start = -1;
    let end = -1;
    if (s.length === 1) return s;

    for (let i = 0; i < s.length; i++) {
        let even = 0;
        let even_left_idx = i;
        let even_right_idx = i + 1;
        if (s[i] === s[i + 1]) {
            even = 2;
            while (true) {
                even_left_idx--;
                even_right_idx++;
                if (even_left_idx < 0) break;
                if (even_right_idx >= s.length) break;

                if (s[even_left_idx] === s[even_right_idx]) even += 2;
                else break;
            }
        }

        let odd = 1;
        let odd_left_idx = i;
        let odd_right_idx = i;

        while (true) {
            odd_left_idx--;
            odd_right_idx++;

            if (odd_left_idx < 0) break;
            if (odd_right_idx >= s.length) break;

            if (s[odd_left_idx] === s[odd_right_idx]) odd += 2;
            else break;
        }
        if (even > answer && even > odd) {
            answer = even;
            start = even_left_idx + 1;
            end = even_right_idx - 1;
        }
        if (odd > answer && odd > even) {
            answer = odd;
            start = odd_left_idx + 1;
            end = odd_right_idx - 1;
        }
    }
    return s.slice(start, end + 1);
};

console.log(longestPalindrome("a"));

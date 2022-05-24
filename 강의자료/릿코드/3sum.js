"use strict";

var threeSum = function (nums) {
    let answer = [];
    if (nums.length < 3) return [];

    nums.sort((a, b) => a - b);

    for (let left = 0; left < nums.length; left++) {
        if (left === 0 || nums[left] !== nums[left - 1]) {
            let mid = left + 1;
            let right = nums.length - 1;

            while (mid < right) {
                if (nums[left] + nums[mid] + nums[right] === 0) {
                    answer.push([nums[left], nums[mid], nums[right]]);
                    mid++;
                    right--;
                    while (mid < nums.length && nums[mid] === nums[mid - 1])
                        mid++;
                    while (right > 0 && nums[right] === nums[right + 1])
                        right--;
                } else if (nums[left] + nums[mid] + nums[right] > 0) {
                    right--;
                } else {
                    mid++;
                }
            }
        }
    }
    return answer;
};

console.log(threeSum([1, 2, -2, -1]));

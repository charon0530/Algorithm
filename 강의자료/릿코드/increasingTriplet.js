"use strict";
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    if (nums.length < 3) return false;
    let i = Number.MAX_SAFE_INTEGER;
    let j = Number.MAX_SAFE_INTEGER;
    let k = Number.MAX_SAFE_INTEGER;

    for (let idx = 0; idx < nums.length; idx++) {
        if (i <= nums[idx]) {
            i = nums[idx];
        } else if (j <= nums[idx]) {
            j = nums[idx];
        } else {
            return true;
        }
    }
    return false;
};

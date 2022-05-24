/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let result = 0;
    let map = new Map();
    let lt = 0;
    for (let rt = 0; rt < s.length; rt++) {
        if (map.has(s[rt])) {
            while (s[lt] !== s[rt]) {
                map.delete(s[lt]);
                lt++;
            }
            lt++;
        } else {
            map.set(s[rt], 1);
        }
        result = Math.max(result, map.size);
        console.log(map);
    }
    return result;
};

console.log(lengthOfLongestSubstring("aab"));

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let result = [];
    let ch = new Array(strs.length).fill(0);
    let dict_list = [];
    for (let i = 0; i < strs.length; i++) {
        let obj = strs[i].split("").reduce((acc, val) => {
            acc[val] = acc[val] + 1 || 1;
            return acc;
        }, {});
        dict_list.push(obj);
    }

    console.log(dict_list);
    for (let i = 0; i < strs.length; i++) {
        if (ch[i] === 1) continue;

        let temp = [strs[i]];
        ch[i] = 1;

        for (let j = i + 1; j < strs.length; j++) {
            if (ch[j] === 1) continue;
            if (strs[i].length !== strs[j].length) continue;

            let flag = true;
            for (let [key, val] of Object.entries(dict_list[i])) {
                if (dict_list[j][key] !== val) flag = false;
            }
            if (flag) {
                temp.push(strs[j]);
                ch[j] = 1;
            }
        }
        result.push(temp);
    }
    return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

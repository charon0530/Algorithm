function solution(begin, target, words) {
    let queue = [];
    let ch = words.reduce((obj, val) => {
        obj[val] = 0;
        return obj;
    }, {});
    let level = words.reduce((obj, val) => {
        obj[val] = 0;
        return obj;
    }, {});
    function getList(std, sources) {
        let temp = [];
        for (let source of sources) {
            let count = 0;
            for (let i = 0; i < std.length; i++) {
                if (std[i] !== source[i]) count++;
            }
            if (count === 1) temp.push(source);
        }
        return temp;
    }
    ch[begin] = 1;
    level[begin] = 0;
    queue.push(begin);
    while (queue.length) {
        let cur_node = queue.shift();

        for (let next of getList(cur_node, words)) {
            if (ch[next] === 1) continue;
            if (next === target) return level[cur_node] + 1;

            ch[next] = 1;
            level[next] = level[cur_node] + 1;
            queue.push(next);
        }
    }
    return 0;
}

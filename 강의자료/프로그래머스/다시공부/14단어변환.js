function OneDiff(target = "", words = []) {
    let result = words.filter((word) => {
        let diff_count = 0;
        for (let i = 0; i < target.length; i++) {
            if (word[i] !== target[i]) diff_count++;
        }
        return diff_count === 1;
    });
    return result;
}

function solution(begin, target, words) {
    //BFS
    let dis = {};
    words.forEach((word) => {
        dis[word] = 0;
    });
    const visited = words.reduce((acc, val) => {
        acc[val] = 0;
        return acc;
    }, {});
    const queue = [begin];
    visited[begin] = 1;
    dis[begin] = 0;
    while (queue.length) {
        const cur = queue.shift();

        if (cur === target) return dis[cur];

        for (let next of OneDiff(cur, words)) {
            if (visited[next] === 1) continue;
            queue.push(next);
            dis[next] = dis[cur] + 1;
            visited[next] = 1;
        }
    }
    return 0;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));

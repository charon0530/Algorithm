function solution(word) {
    let answer = 0;
    const branch = [0, "A", "E", "I", "O", "U"];
    let count = 0;
    function DFS(str, last) {
        if (str === word) {
            answer = count;
        }
        if (str.length === 5) {
            return;
        } else {
            if (last === 0) return;
            for (let i = 0; i < branch.length; i++) {
                if (branch[i] !== 0) count++;
                DFS(str.concat(branch[i]), branch[i]);
            }
        }
    }
    DFS("", "");
    return answer;
}

console.log(solution("AAAE"));

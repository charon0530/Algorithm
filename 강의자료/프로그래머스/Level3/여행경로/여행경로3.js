//DFS 또 다른 형태

function solution(tickets) {
    var answer = [];
    function DFS(t, node, path) {
        if (path.length === tickets.length + 1) {
            answer.push([...path]);
        } else {
            for (let i = 0; i < t.length; i++) {
                const [start, end] = t[i];
                if (start !== node) continue;
                let temp_t = [...t];
                temp_t.splice(i, 1);
                let temp_path = [...path];
                temp_path.push(end);
                DFS(temp_t, end, temp_path);
            }
        }
    }
    DFS(tickets, "ICN", ["ICN"]);
    return answer.sort()[0];
}

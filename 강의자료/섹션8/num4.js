function solution(N) {
    function DFS(arr, start) {
        if (start === N + 1) {
            if (arr.length > 0) {
                console.log(arr);
            }
        } else {
            arr.push(start);
            DFS(arr, start + 1);
            arr.pop();
            DFS(arr, start + 1);
        }
    }
    DFS([], 1);
}

console.log(solution(3));

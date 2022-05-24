function solution(n, r, source, val) {
    let answer = [];
    //ㅁㅁ... r개
    let tempArr = new Array(r).fill(0);
    //조합구하는 함수
    function DFS(list, pick_idx) {
        if (list.length > r) return;
        if (pick_idx === source.length) {
            if (list.length !== r) return;
            if (list.reduce((acc, v) => acc + v, 0) % val === 0)
                answer.push([...list]);
        } else {
            list.push(source[pick_idx]);
            DFS([...list], pick_idx + 1);
            list.pop();
            DFS([...list], pick_idx + 1);
        }
    }
    DFS([], 0);
    //console.log(tempArr);
    return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));

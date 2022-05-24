function solution(n, r, source, val) {
    let answer = 0;
    //ㅁㅁ... r개
    let tempArr2 = new Array(r).fill(0);
    //조합구하는 함수
    function DFS(start_idx, start_val_idx, sum, tempArr) {
        if (start_idx === r) {
            // 무한히 뻗어나가는 것을 막음
            if (sum % val === 0) {
                answer++;
                console.log(tempArr);
            }
        } else {
            for (let i = start_val_idx; i < source.length; i++) {
                tempArr[start_idx] = source[i];
                DFS(start_idx + 1, i + 1, sum + source[i], tempArr);
            }
        }
    }
    DFS(0, 0, 0, tempArr2);

    return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));

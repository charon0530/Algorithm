//start_idx === box_idx // start_val_idx === source_idx
function solution(n, r, source, val) {
    let answer = 0;
    //ㅁㅁ... r개
    let tempArr = new Array(r).fill(0);
    //조합구하는 함수
    function DFS(start_idx, start_val_idx, sum) {
        if (start_idx === r) {
            if (sum % val === 0) {
                answer++;
                console.log(tempArr);
            }
        } else {
            for (let i = start_val_idx; i < source.length; i++) {
                tempArr[start_idx] = source[i];
                DFS(start_idx + 1, i + 1, sum + source[i]);
            }
        }
    }
    DFS(0, 0, 0);
    //console.log(tempArr);
    return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));

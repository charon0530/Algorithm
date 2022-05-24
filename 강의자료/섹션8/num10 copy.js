function solution(count, arr) {
    let result = [];
    let chlist = new Array(arr.length).fill(0);
    function DFS(tempArr, start_idx) {
        if (start_idx === count) {
            result.push([...tempArr]);
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (chlist[i] === 0) {
                    chlist[i] = 1;
                    tempArr[start_idx] = arr[i];
                    DFS(tempArr, start_idx + 1);
                    chlist[i] = 0;
                }
            }
        }
    }
    DFS([0, 0], 0);
    return result;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));

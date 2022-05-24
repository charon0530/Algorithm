function solution(MAX_WEIGHT, ARR) {
    let cur_wieght = 0;
    let tempArr = [];
    function DFS(start) {
        if (tempArr.reduce((a, b) => a + b, 0) > MAX_WEIGHT) return;
        if (start === ARR.length) {
            let tempWeight = tempArr.reduce((a, b) => a + b, 0);
            if (tempWeight < MAX_WEIGHT) {
                cur_wieght = Math.max(cur_wieght, tempWeight);
                console.log(tempArr);
            }
        } else {
            tempArr.push(ARR[start]);
            DFS(start + 1);
            tempArr.pop();
            DFS(start + 1);
        }
    }
    DFS(0);
    return cur_wieght;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));

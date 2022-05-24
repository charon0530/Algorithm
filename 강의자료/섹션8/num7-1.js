function solution(m, ps, pt){
    let maxSum  = 0;
    function DFS(start_idx, sum, time){
        if(time>m) return;
        if(start_idx === pt.length){
            maxSum = Math.max(maxSum, sum);
        }
        else{
            DFS(start_idx+1, sum+ps[start_idx], time+ pt[start_idx]);
            DFS(start_idx+1, sum, time);
        }
    }
    DFS(0,0,0);
    return maxSum;
}
let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]
console.log(solution(24, ps, pt));
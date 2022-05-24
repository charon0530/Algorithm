function solution(TIMELIMIT, TIMELINE, SCORES){
    // 부분집합에서 제한시간내에 풀 수 있는 문제들의 합을 구해서 최댓값을 구한다.
    let chArr = Array.from({length:TIMELINE.length}).fill(0);
    let sum = 0 ;
    function DFS(start_idx){
        if(start_idx === TIMELINE.length){
            let tempsum=0;
            let sumTime=0;
            
            for (let i = 0; i<chArr.length; i++){
                if (chArr[i]===1){
                    tempsum += SCORES[i];
                    sumTime += TIMELINE[i];
                }
            }
            
            if (sumTime <= TIMELIMIT)
                sum = Math.max(sum, tempsum);
        }
        else{
            chArr[start_idx] = 1;
            DFS(start_idx+1);
            chArr[start_idx] = 0;
            DFS(start_idx+1);
        }
    }
    DFS(0);
    return sum;
}

let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]
console.log(solution(20, pt, ps));
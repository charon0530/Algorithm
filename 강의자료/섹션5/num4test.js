function solution(m, arr){
    let answer=0, sum=0, lt=0;
    for(let rt=0; rt<arr.length; rt++){
        sum+=arr[rt];
        if (sum<= m) answer++;
        while(sum>=m){
            sum-=arr[lt++];
            if (sum<=m){
                answer++;
            }
        }
        
    }               
    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));
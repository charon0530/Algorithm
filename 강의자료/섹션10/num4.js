function solution(sum,kinds){
    let dy = new Array(sum+1).fill(sum+1);
    for(let x of kinds){
        dy[x] = 1;
    }

    for(let i = 1; i<=sum; i++){
        for(let k of kinds){
            if (i+k <= sum)
                dy[i+k] = Math.min(dy[i]+1,dy[i+k]);
        }
    }
    return dy[sum];
}

let arr=[1, 2, 5];
console.log(solution(15, arr));
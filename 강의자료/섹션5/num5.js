function solution(days,arr){
    let maxSum = 0;
    for(let i =0 ; i< arr.length-(days-1); i++){
        let sum=0;
        for(let d= 0;d<days; d++){
            sum+=arr[i+d];
        }
        console.log(i,sum)
        if (sum>maxSum) maxSum = sum;
    }

    return maxSum
}
let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15,80];
console.log(solution(4, a));
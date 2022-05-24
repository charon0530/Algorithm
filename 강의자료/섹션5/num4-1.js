function solution(m, arr){
    let answer=0, sum=0, lt=0;
    for(let rt=0; rt<arr.length; rt++){
        sum+=arr[rt];
        while(sum>m){
            sum-=arr[lt++];
        }
        for (let i=rt; i>=lt; i--){
            console.log(arr.slice(i,rt+1));
        }
        answer+=(rt-lt+1);
    }               
    return answer;
}

//let a=[1, 3, 1, 2, 3];
let a = [7,1,1,2,3]
console.log(solution(5, a));
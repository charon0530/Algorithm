function solution(targetSum, arr){
    let answer=0;
    let lp = rp = 0;
    let sum = arr[0];
    while(lp < arr.length && rp<arr.length){
        if (sum<targetSum){
            rp++;
            sum += arr[rp];
            console.log(sum);

        }
        else if (sum>targetSum){
            sum -= arr[lp];
            lp++;
        }
        else{
            //console.log(arr.slice(lp,rp+1));
            answer++;
            rp++;
            sum += arr[rp];
        }
    }
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2 ,6, 3, 3,1,1,1,1,1,1,1,1,1];
console.log(solution(10, a));
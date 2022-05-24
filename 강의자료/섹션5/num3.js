function solution(targetSum, arr){
    let answer=0;
    for (let i =0;i<arr.length; i++){
        let endPoint = i;
        let sum=0;
        let tempArr = arr.slice();
        while(sum<targetSum && endPoint < arr.length){
            sum+=arr[endPoint];
            endPoint++;
        }
        if(sum===targetSum){
            console.log(tempArr.slice(i,endPoint))
            answer++;
        }
        
    }
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2 ,6, 3, 3,1,1,1,1,1];
console.log(solution(6, a));
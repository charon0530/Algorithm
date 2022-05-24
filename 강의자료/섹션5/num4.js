function solution(targetNum, arr){
    let answer =  [];
    let result = [];
    for (let i =0; i<arr.length; i++){
        let sum = arr[i];
        let endPoint = i;
        
        while(endPoint < arr.length && sum<=targetNum){
            result.push(arr.slice(i,endPoint+1));
            endPoint++;
            sum+=arr[endPoint];
        }
    }
    return result;
}

let a=[1, 3, 1, 2, 3];
//let a = [7,1,1,2,3]
console.log(solution(5, a));
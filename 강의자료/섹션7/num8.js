function solution(arr){
    let answer=[];
    arr.sort((a,b)=>{
        if (a[1]===b[1]){
            return a[0]-b[0];
        }
        else return a[1]-b[1];
    });
    answer.push(arr[0]);
    let et = arr[0][1];
    for(let i = 1; i<arr.length; i++){
        if(arr[i][0] < et) continue;
        else{
            answer.push(arr[i]);
            et = arr[i][1];
        }
    }
    return answer;
}

let arr=[[3,3],[1,3],[2,3]];
console.log(solution(arr));
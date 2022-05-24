function solution(arr){         
    let answer = 0;
    let count=0;
    for (let i =0;i<arr.length;i++){
        if (arr[i]===0) {
            count = 0;
        }
        else {
            count++;
            answer+=count;
        }
    }
    return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
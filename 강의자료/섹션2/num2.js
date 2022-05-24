function solution(arr){         
    let answer=0;
    let stdValue=arr[0];
    answer++;
    for (let x of arr){
        if (x>stdValue) {
            answer++
            stdValue=x;
        }
    }
    return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
function solution(n, arr){
    let answer;
    let maxSum = Number.MIN_SAFE_INTEGER;
    let maxNum = -1;
    for (let x of arr){
        let sum=0;
        let temp = x;

        while(temp!==0){
            sum += temp %10;
            temp = Math.floor(temp/10)
        }
        if (sum >= maxSum && x>maxNum) {
            maxSum = sum;
            maxNum=x;
        }
    }

    answer=maxNum;
    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
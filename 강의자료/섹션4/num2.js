function isPrime(num){
    if (num===1) return false;
    let flag = true;
    for (let i=2; i<num; i++){
        if(num/i === parseInt(num/i)) flag=false
    }
    return flag;
}

function solution(arr){
    let answer=[];
    for (x of arr){
        let reversedNum = Number(x.toString().split("").reverse().join(""));
        if (isPrime(reversedNum)) answer.push(reversedNum);
    }

    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
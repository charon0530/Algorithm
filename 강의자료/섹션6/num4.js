function solution(str){
    let answer = 0;
    let stack = [];
    for (let char of str){
        if (!isNaN(char)) stack.push(Number(char));
        else{
            let right = stack.pop();
            let left = stack.pop();
            if (char === '+') stack.push(left + right);
            else if (char === '-') stack.push(left - right);
            else if (char === '*') stack.push(left * right);
            else if (char === '/') stack.push(left / right);
        }
    }
    return answer = stack.pop();
}

let str="352+*9-";
console.log(solution(str));
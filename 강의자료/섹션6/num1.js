function solution(str){
    let stack = [];
    for (let i =0; i<str.length; i++){
        stack.push(str[i]);
        if(stack.length >= 2 && str[i] === ')'){
            //2개 이상이고 닫는괄호면 비교
            if(stack[stack.length-2]==='(') {
                stack.pop();
                stack.pop();
            }
        }
    }
    
    console.log(stack);
    if (stack.length!==0) return false;
    return true;
}

let a="(()(()))()";
console.log(solution(a));
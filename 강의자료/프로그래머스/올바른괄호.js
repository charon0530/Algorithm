function solution(s){
    var answer = true;

    let stack = [];

    for (let i = 0; i<s.length; i++){
        if (s[i]===')'){
            if (stack[stack.length-1] === '(') stack.pop();
            else stack.push(s[i]);
        }
        else{
            stack.push(s[i]);
        }
    }
    if (stack.length === 0) return true;
    else return false;
}
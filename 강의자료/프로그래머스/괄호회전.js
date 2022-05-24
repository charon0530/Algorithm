
function isCorrect(list){
    let stack = [];
    for (let i = 0; i<list.length; i++){
        if (list[i]===']'){
            if (stack[stack.length-1]==='[') stack.pop();
            else stack.push(list[i]);
        }
        else if (list[i]==='}'){
            if (stack[stack.length-1]==='{') stack.pop();
            else stack.push(list[i]);
        }
        else if (list[i]===')'){
            console.log('hh',stack[stack.length-1])
            if (stack[stack.length-1]==='(') stack.pop();
            else stack.push(list[i]);
        }
        else{
            stack.push(list[i]);
        }
    }
    if (stack.length === 0) return true;
    else return false;
}

function solution(s) {
    let s_list = s.split("");
    var answer = 0;
    // 0 times
    if (isCorrect(s_list)) answer++;
    for(let i = 1; i<s.length; i++){
        //1~s-1 times
        let temp = s_list.shift();
        s_list.push(temp);
        if(isCorrect(s_list)) answer++;
    }
    return answer;
}

console.log(solution("}]()[{"))
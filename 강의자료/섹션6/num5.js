function solution(str){
    let razerCount = 0;
    let answer = 0;
    let stack =[];
    for (let i = 0; i< str.length; i++){
        if (str[i]==='(') {stack.push(str[i]);}
        else{ // )라면
            stack.pop();
            if(str[i-1] === '('){
                answer += stack.length
            }
            else{
                //레이저가 아니라면 === 막대가 끝나는점
                answer++;
            }
        }
        
    }
    return answer;
}

let a="((()())(())())";
console.log(solution(a));
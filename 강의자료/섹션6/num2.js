function solution(str){
    // 스택에 넣는다
    //) 빼고는 다 넣는다
    // ) 가 들어왓을 때 (일때까지 포함하여 pop한다
    let stack = [];
    for (let x of str){
        if(x!==')'){
            stack.push(x);
            
        }
        else{
            // while을 끝내고나면 (가 남는다
            while(stack[stack.length-1]!=='(') {
                stack.pop();
            }
            stack.pop(); // 남은 (를 제거한다
        }
        
    }
    return stack.join("");
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
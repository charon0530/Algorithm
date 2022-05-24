function solution(expression) {
    var answer = 0;
    let numList_original = [];
    let opList_origianl = [];
    
    numList_original = expression.split(/[-+*]/).map((x)=>Number(x));
    opList_origianl = expression.split(/[0-9]/).filter((x)=>x);
 
    let cases = [
        ["+", "-", "*"],
        ["+", "*", "-"],
        ["-", "+", "*"],
        ["-", "*", "+"],
        ["*", "+", "-"],
        ["*", "-", "+"]
    ];

    cases.forEach((op_list)=>{
        let numList = [...numList_original];
        let opList = [...opList_origianl];
        for (let i = 0; i <3; i++){
            let op = op_list[i];
        
            while(true){
                let idx = opList.indexOf(op)
                if (idx===-1){
                    break;
                }
                else{
                    opList.splice(idx,1);
                    if (op==="*"){
                        let tempNum = numList[idx] * numList[idx+1];
                        numList.splice(idx,2,tempNum);
                    }
                    else if (op === "+"){
                        let tempNum = numList[idx] + numList[idx+1];
                        numList.splice(idx,2,tempNum);
                    }
                    else if (op === "-"){
                        let tempNum = numList[idx] - numList[idx+1];
                        numList.splice(idx,2,tempNum);
                    }
                }
            }
        }
        answer = Math.max(answer, Math.abs(numList[0]));
    });
    return answer;
}

console.log(solution("100-200*300-500+20"));
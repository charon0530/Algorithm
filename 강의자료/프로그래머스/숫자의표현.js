//TWO POINTER IS "IF WHILE"  ==  CHECK AND PULL

function solution(n) {
    let answer = 0;
    let list = [];
    for(let i = 1; i<=n; i++){
        list.push(i);
    }
    //SESTTING
    let lt = 0;
    let sum = 0;
    for (let rt = 0; rt < list.length; rt++){
        //ADD
        sum += list[rt];
        //CHECK SUM
        if(sum===n) {
            answer++;
            console.log(sum,lt+1,rt+1);
        }
        //PULL lt
        while(sum>=n){
            sum-=list[lt];
            lt++;
            if(sum===n) {
                answer++;
                console.log(sum,lt+1,rt+1);
            }
        }
    }
    return answer;
}

console.log(solution(15));
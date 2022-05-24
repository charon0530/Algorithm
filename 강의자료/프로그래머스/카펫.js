function solution(brown, yellow) {
    var answer = [];

    function GetDivisor(num){
        let list = [];
        for(let i = num; i >=0; i--){
            if (i < Math.sqrt(num)) break;
            if (num%i === 0) list.push(i);
        }
        return list;
    }
    let caseList = GetDivisor(yellow);
    for (let i = 0; i < caseList.length; i++){
        let y_col = caseList[i];
        let y_row = yellow / y_col;
        let b_count = 0;
        b_count = (y_row*2) + 2*(y_col+2);
        if (b_count === brown) {
            answer.push(y_col+2,y_row+2);
            break;
        }
    }
    return answer;
}

console.log(solution(24,24));

function solution(n, t, m, p) {
    var answer = '';
    let count = 0;
    let num_string = '';
    let tube_idx = p-1;
    while(answer.length !== t){
        while (num_string[tube_idx] === undefined){
            num_string += count.toString(n).toUpperCase();
            count++;
        }
        answer += num_string[tube_idx];
        tube_idx += m
    }
    return answer;
}

console.log(solution(16,16,2,1));
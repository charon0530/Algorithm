function solution(a, b, c){
    let answer;
    answer = (a < b ? a : b ) < c ? (a < b ? a : b ) : c 
    return answer;
}

console.log(solution(6,5,11));
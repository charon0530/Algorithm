//TIP! : 재귀 함수를 만들 때 가장 끝부분을 생각한다!
//아래 예시에선 1개를 옮길 때와 2개를 옮길 때의 상관관계를 생각한다!

function solution(n) {
    var answer = [];
    function H(num, start, mid, end) {
        if (num === 1) {
            answer.push([start, end]);
        } else {
            H(num - 1, start, end, mid);
            answer.push([start, end]);
            H(num - 1, mid, start, end);
        }
    }
    H(n, 1, 2, 3);
    return answer;
}

console.log(solution(2));

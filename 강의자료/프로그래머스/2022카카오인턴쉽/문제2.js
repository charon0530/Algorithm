//합 관련 문제는 일부와 나머지로 보는 방법이 있다.

function solution(queue1, queue2) {
    let answer = 0;
    const list = [...queue1, ...queue2];
    let lt = 0;
    let rt = queue1.length - 1;
    const totalSum = list.reduce((acc, val) => acc + val, 0);
    let subSum = queue1.reduce((acc, val) => acc + val, 0);

    while (lt <= rt) {
        if (totalSum - subSum === subSum) return answer;
        if (subSum < totalSum - subSum) {
            rt++;
            subSum += list[rt];
            answer++
        }
        else {
            subSum -= list[lt];
            lt++;
            answer++

        }
    }
    return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
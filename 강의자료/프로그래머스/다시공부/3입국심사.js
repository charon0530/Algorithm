// 숫자가 크면 거의 이분 탐색
// 이분 탐색일 경우 결정 알고리즘은 단순하게 생각하면 풀린다!

function solution(n, times = []) {
    let answer = Number.MAX_SAFE_INTEGER;

    function isPossible(time) {
        let capacity = 0;

        times.forEach((t) => {
            capacity += parseInt(time / t);
        });

        return capacity >= n;
    }

    let lt = 0;
    let rt = Number.MAX_SAFE_INTEGER;

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);

        if (isPossible(mid)) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }
    return answer;
}

console.log(solution(6, [7, 10]));

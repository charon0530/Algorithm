function solution(n, times) {
    var answer = 0;
    let p = times.length;

    function isPossible(time) {
        let count = 0;
        for (let i = 0; i < times.length; i++) {
            count += parseInt(time / times[i]);
        }
        return count >= n ? true : false;
    }
    let lt = 0;
    let rt = Math.max(...times) * (n + 1);
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

// TIP 처음에는 이분탐색과 결정함수를 이용한 결정 알고리즘을 사용하였다.
// 결정함수를 만드는 과정에서 이분탐색이 필요 없다는 것을 깨닫고 수정하였다. (바로 최솟값을 구할 수 있음)
function solution(n, stations, w) {
    const need_cover = new Array(n + 1).fill(1);
    need_cover[0] = 0;

    const bunches = [];
    let start = 1;
    let sta_end = 0;
    for (let i = 0; i < stations.length; i++) {
        let sta_start = stations[i] - w;
        sta_end = stations[i] + w;
        if (start < sta_start) {
            bunches.push(sta_start - start);
        }
        start = sta_end + 1;
    }
    if (sta_end < n) bunches.push(n - sta_end);

    let count = 0;
    bunches.forEach((x) => {
        count += parseInt(x / (2 * w + 1));
        if (x % (2 * w + 1) !== 0) count++;
    });

    return count;
}

console.log(solution(11, [4, 11], 1));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution(n, stations, w) {
    var answer = Number.MAX_SAFE_INTEGER;
    const need_cover = new Array(n + 1).fill(1);
    need_cover[0] = 0;

    stations.forEach((station) => {
        for (let i = station - w; i <= station + w; i++) {
            if (i < 0 || i >= need_cover.length) continue;
            need_cover[i] = 0;
        }
    });

    const bunches = need_cover
        .join()
        .replace(/,/g, "")
        .split(0)
        .filter((x) => x)
        .map((x) => x.length);

    let lt = 0;
    let rt = n;
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);

        if (isValid(mid)) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }

    function isValid(num) {
        let temp_bunches = bunches.slice();
        let count = 0;
        temp_bunches.forEach((x) => {
            count += parseInt(x / (2 * w + 1));
            if (x % (2 * w + 1) !== 0) count++;
            if (count > num) return false;
        });

        return count <= num;
    }

    return answer;
}

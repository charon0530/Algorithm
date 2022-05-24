// greedy
function solution(n, works) {
    let sum = works.reduce((a, b) => a + b, 0);
    if (n >= sum) return 0;

    works.sort((a, b) => a - b);
    let dic = new Map();
    for (let i = 0; i <= works[works.length - 1]; i++) {
        dic.set(i, 0);
    }
    works.forEach((x) => dic.set(x, dic.get(x) + 1));

    const key_list = [];
    dic.forEach((value, key) => {
        key_list.push([key, value]);
    });

    for (let i = 0; i < n; i++) {
        const idx = key_list.length - 1;
        key_list[idx][1]--;
        key_list[idx - 1][1]++;
        if (key_list[idx][1] === 0) {
            key_list.pop();
        }
    }
    let result = key_list.reduce((acc, x) => (acc += x[0] * x[0] * x[1]), 0);
    return result;
}

console.log(solution(10, [4, 3, 3]));

//시간비교해보기
function solution(n, works) {
    if (works.reduce((a, b) => a + b) <= n) return 0;

    let sorted = works.sort((a, b) => a - b);
    const len = works.length;

    while (n) {
        const max = sorted[len - 1];

        for (let i = len - 1; i >= 0; i--) {
            if (sorted[i] >= max) {
                sorted[i]--;
                n--;
            }
            if (!n) break;
        }
    }

    return sorted.reduce((a, b) => a + Math.pow(b, 2), 0);
}

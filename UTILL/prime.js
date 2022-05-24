function solution(n) {
    let arr = Array(n + 1)
        .fill(true)
        .fill(false, 0, 2);
    //i의 제곱이 n보다 작을 때 까지
    for (let i = 2; i * i <= n; i++) {
        if (arr[i]) {
            //j는 i의 제곱
            //j(i*i)가 n보다 작을 때까지
            //j+i씩 증가
            //i가 2일경우 4, 6, 8, 10 ... 100
            //i가 3일경우 9, 12, 15, 18 ... 99
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }

    return arr.map((v, i) => {
        if (v) return i;
        return 0;
    });
}

function solution2(n) {
    let arr = [];
    // 1은 소수가 아니고, 2부터 소수가 될 수 있으므로, 2부터 구하고자 하는 값까지의 배열을 만든다.
    for (let i = 2; i <= n; i++) {
        arr[i] = i;
    }
    // 2부터 시작해서 2배수 이상의 숫자를 모두 지우되, 이미 지워진 숫자는 건너 뛴다.
    for (let i = 2; i * i <= n; i++) {
        for (let j = i * i; j <= n; j += i) {
            if (arr[j] === 0) {
                continue;
            }
            arr[j] = 0;
        }
    }
    return arr.filter((item) => item !== 0);
}

console.log(solution2(100));

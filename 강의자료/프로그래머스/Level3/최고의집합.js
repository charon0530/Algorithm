function solution(n, s) {
    const quotient = parseInt(s / n);
    if (quotient === 0) return [-1];

    const remainer = s % n;
    const result = new Array(n).fill(quotient);
    for (let i = 0; i < remainer; i++) {
        const idx = i % n;
        result[idx]++;
    }
    return result.sort((a, b) => a - b);
}

console.log(solution(2, 8));

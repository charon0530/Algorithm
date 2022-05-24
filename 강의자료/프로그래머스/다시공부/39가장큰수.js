function solution(numbers) {
    return numbers
        .map((x) => String(x))
        .sort((a, b) => Number(b + a) - Number(a + b));
}
console.log(solution([221, 2, 223]));

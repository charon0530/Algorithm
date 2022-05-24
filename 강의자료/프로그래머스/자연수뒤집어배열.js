function solution(n) {
    return (n+"").split('').reverse().map((x)=>parseInt(x));
}

console.log(solution(12345))
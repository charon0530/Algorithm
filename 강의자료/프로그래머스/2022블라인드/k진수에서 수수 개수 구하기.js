//에라토스테네스의 체 라는 것도 있음!
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function solution(n, k) {
    var answer = 0;
    const bin_str = n.toString(k);
    const num_list = bin_str.split("0");
    for (let num of num_list) {
        if (isPrime(num)) answer++;
    }
    return answer;
}

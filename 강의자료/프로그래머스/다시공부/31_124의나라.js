function solution(n) {
    const list = ["4", "1", "2"];
    let answer = [];
    while (true) {
        mock = parseInt(n / 3);
        const na = n % 3;

        if (mock === 0 && na === 0) break;

        answer.push(list[na]);

        if (na === 0) {
            n = parseInt(n / 3) - 1;
        } else {
            n = parseInt(n / 3);
        }
    }
    return answer.reverse().join("");
}

function solution(n) {
    let result = [];
    function myfunc(num) {
        if (num <= 3) {
            if (num === 3) {
                result.push(4);
                return;
            }
            result.push(num);
            return;
        }
        let mok = parseInt(num / 3);
        const rest = num - mok * 3;

        if (rest === 0) {
            result.push(4);
            mok--;
            myfunc(mok);
        } else {
            result.push(rest);
            myfunc(mok);
        }
    }
    myfunc(n);

    return result.reverse().join("");
}
console.log(solution(7));

function CheckCorrect(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ")" && stack[stack.length - 1] === "(") stack.pop();
        else stack.push(s[i]);
    }
    return stack.length === 0;
}
function Toggle(u) {
    let result = "";
    for (let i = 0; i < u.length; i++) {
        if (u[i] === "(") result += ")";
        else result += "(";
    }
    return result;
}
function solution(p) {
    if (CheckCorrect(p)) return p;
    if (p === "") return "";

    let lc = 0;
    let rc = 0;

    let u = "";
    let v = "";
    let i = 0;
    for (; i < p.length; i++) {
        if (lc === rc && lc != 0) break;
        if (p[i] === "(") {
            lc++;
            u += "(";
        } else {
            rc++;
            u += ")";
        }
    }
    for (; i < p.length; i++) {
        v += p[i];
    }
    if (CheckCorrect(u)) return u + solution(v);
    else {
        let temp = "(";
        temp += solution(v);
        temp += ")";
        u = u.slice(1, u.length - 1);
        temp += Toggle(u);

        return temp;
    }
}

console.log(solution(")("));

function solution(s) {
    let answer = s;
    const dict = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };

    for (let [key, val] of Object.entries(dict)) {
        const reg = new RegExp(key, "g");
        answer = answer.replace(reg, val);
    }
    return parseInt(answer);
}

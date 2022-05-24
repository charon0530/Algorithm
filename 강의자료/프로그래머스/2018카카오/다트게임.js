function solution(dartResult) {
    dartResult = dartResult.split("");
    for (let i = dartResult.length - 1; i--; i >= 0) {
        if (
            dartResult[i] === "S" ||
            dartResult[i] === "D" ||
            dartResult[i] === "T"
        ) {
            if (dartResult[i + 1] !== "*" && dartResult[i + 1] !== "#") {
                dartResult.splice(i + 1, 0, "-");
            }
        }
    }

    console.log(dartResult.join(""));

    const score_list = dartResult
        .join("")
        .split(/[DST#*-]/)
        .filter((x) => x)
        .map((x) => Number(x));

    const bonus_list = dartResult.filter(
        (x) => x === "S" || x === "D" || x === "T"
    );
    const option_list = dartResult.filter(
        (x) => x === "#" || x === "-" || x === "*"
    );
    console.log(score_list);
    console.log(bonus_list);
    console.log(option_list);
    const bonus_dic = { S: 1, D: 2, T: 3 };

    const result = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
        result[i] = Math.pow(score_list[i], bonus_dic[bonus_list[i]]);
        if (option_list[i] === "#") {
            result[i] *= -1;
        } else if (option_list[i] === "*") {
            if (i === 0) {
                result[i] *= 2;
            } else {
                result[i] *= 2;
                result[i - 1] *= 2;
            }
        }
    }
    return result[0] + result[1] + result[2];
}

//console.log(solution("1D2S#10S"));
//console.log(solution("1D#2S*3S"));
console.log(solution("1D2S#10S*"));

function solution(s = "") {
    let answer = s.length;
    const N = s.length;
    for (let i = 1; i <= parseInt(N / 2); i++) {
        let temp_str = "";
        for (let j = 0; j < s.length; j++) {
            if (j % i === i - 1) temp_str += `${s[j]},`;
            else temp_str += s[j];
        }

        let splited_list = temp_str.split(",");

        splited_list = splited_list
            .map((x) => [x, 1])
            .reduce(
                (acc, val) => {
                    if (acc[acc.length - 1][0] === val[0]) {
                        acc[acc.length - 1][1]++;
                    } else {
                        acc.push([...val]);
                    }
                    return acc;
                },
                [["", 1]]
            )
            .filter((x) => x[0] !== "")
            .map((x) => {
                if (x[1] === 1) {
                    return x[0].length;
                } else {
                    return x[0].length + x[1].toString().length;
                }
            })
            .reduce((a, c) => a + c, 0);
        console.log(splited_list);
        answer = Math.min(answer, splited_list);
    }
    return answer;
}

console.log(solution("abcabcabcabcdededededede"));

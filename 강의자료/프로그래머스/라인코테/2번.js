function solution(sentences, n) {
    var answer = -1;
    const ok_shift_dict = {};
    const no_shift_dict = {};
    sentences.forEach((x) => {
        const cur_sen = x;
        for (let i = 0; i < cur_sen.length; i++) {
            if (cur_sen[i] === " ") continue;
            if (cur_sen[i].charCodeAt() < "a".charCodeAt()) continue;
            no_shift_dict[cur_sen[i]] = (no_shift_dict[cur_sen[i]] || 0) + 1;
        }
        for (let i = 0; i < cur_sen.length; i++) {
            if (cur_sen[i] === " ") continue;
            const key = cur_sen[i];
            if (key === key.toLowerCase()) {
                ok_shift_dict[key] = (ok_shift_dict[key] || 0) + 2;
            } else {
                ok_shift_dict[key.toLowerCase()] =
                    (ok_shift_dict[key.toLowerCase()] || 0) + 1;
            }
        }
    });

    let no_sorted = Object.entries(no_shift_dict)
        .sort((a, b) => b[1] - a[1])
        .slice(0, n)
        .map((x) => x[0]);
    let ok_sorted = Object.entries(ok_shift_dict)
        .sort((a, b) => b[1] - a[1])
        .slice(0, n - 1)
        .map((x) => x[0]);

    let lowerCase = ok_sorted.join("");
    let upperCase = lowerCase.toUpperCase();

    ok_sorted = [...ok_sorted, ...upperCase.split("")];

    console.log(no_sorted);
    console.log(ok_sorted);
    let no_score = 0;
    let ok_score = 0;

    let max = 0;
    for (let i = 0; i < sentences.length; i++) {
        let temp_score = 0;
        const cur_sen = sentences[i];
        for (let j = 0; j < cur_sen.length; j++) {
            if (no_sorted.includes(cur_sen[j]) || cur_sen[j] === " ")
                temp_score++;
            else {
                temp_score = 0;
                break;
            }
        }
        no_score += temp_score;
    }

    for (let i = 0; i < sentences.length; i++) {
        let temp_score = 0;
        const cur_sen = sentences[i];
        for (let j = 0; j < cur_sen.length; j++) {
            if (ok_sorted.includes(cur_sen[j]) || cur_sen[j] === " ") {
                if (
                    cur_sen[j] !== " " &&
                    cur_sen[j].charCodeAt() < "a".charCodeAt()
                ) {
                    temp_score += 2;
                } else temp_score++;
            } else {
                temp_score = 0;
                break;
            }
        }
        ok_score += temp_score;
    }

    return Math.max(no_score, ok_score);
}

//console.log(solution(["ABcD", "bdbc", "a", "Line neWs"], 7));
console.log(solution(["aaaabbbbccccccccc", "aabb"], 2));

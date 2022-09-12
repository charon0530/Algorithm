function solution(survey, choices) {
    var answer = '';
    const dict = {};
    dict["R"] = 0;
    dict["T"] = 0;
    dict["C"] = 0;
    dict["F"] = 0;
    dict["J"] = 0;
    dict["M"] = 0;
    dict["A"] = 0;
    dict["N"] = 0;



    for (let i = 0; i < survey.length; i++) {
        const [f, s] = survey[i].split("");
        const choiceNum = Number(choices[i]);
        if (choiceNum < 4) {
            dict[f] += 4 - choiceNum;
        }
        else {
            dict[s] += choiceNum - 4;
        }
    }
    if (dict["R"] >= dict["T"]) answer += "R"
    else answer += "T"

    if (dict["C"] >= dict["F"]) answer += "C"
    else answer += "F"

    if (dict["J"] >= dict["M"]) answer += "J"
    else answer += "M"

    if (dict["A"] >= dict["N"]) answer += "A"
    else answer += "N"

    return answer;
}
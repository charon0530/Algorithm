function solution(survey = [], choices = []) {
    var answer = "";
    const score_dict = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    for (let i = 0; i < choices.length; i++) {
        const cur_survey = survey[i];
        const cur_choice = Number(choices[i]);
        const [f, s] = cur_survey.split("");
        const gap = cur_choice - 4;

        if (gap === 0) continue;

        if (gap < 0) {
            score_dict[f] += Math.abs(gap);
        } else {
            score_dict[s] += Math.abs(gap);
        }
    }
    console.log(score_dict);
    //1번 지표
    if (score_dict.R >= score_dict.T) {
        answer += "R";
    } else {
        answer += "T";
    }
    //2번 지표
    if (score_dict.C >= score_dict.F) {
        answer += "C";
    } else {
        answer += "F";
    }

    if (score_dict.J >= score_dict.M) {
        answer += "J";
    } else {
        answer += "M";
    }

    if (score_dict.A >= score_dict.N) {
        answer += "A";
    } else {
        answer += "N";
    }
    return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));

function solution(scores) {
    let answer = [];
    for (let i = 0; i < scores.length; i++) {
        let self_score = scores[i][i];
        let max = -1;
        let min = 101;
        let get_scores = [];
        for (let j = 0; j < scores.length; j++) {
            get_scores.push(scores[j][i]);
            if (scores[j][i] >= max) {
                max = scores[j][i];
            }
            if (scores[j][i] <= min) {
                min = scores[j][i];
            }
        }
        let max_count = get_scores.filter((x) => x === max).length;
        let min_count = get_scores.filter((x) => x === min).length;
        let sum = 0;
        let people_count = scores.length;
        if (
            (max_count === 1 && max === self_score) ||
            (min_count === 1 && min === self_score)
        ) {
            sum = get_scores.reduce((a, b) => a + b) - self_score;
            people_count--;
        } else {
            sum = get_scores.reduce((a, b) => a + b);
        }
        let avg = sum / people_count;

        avg >= 90
            ? answer.push("A")
            : avg >= 80
            ? answer.push("B")
            : avg >= 70
            ? answer.push("C")
            : avg >= 50
            ? answer.push("D")
            : answer.push("F");
    }
    return answer.join("");
}

console.log(
    solution([
        [100, 90, 98, 88, 65],
        [50, 45, 99, 85, 77],
        [47, 88, 95, 80, 67],
        [61, 57, 100, 80, 65],
        [24, 90, 94, 75, 65],
    ])
);

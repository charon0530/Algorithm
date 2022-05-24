//TIP sort multi conditions
"use strict";
function solution(weights, head2head) {
    const info = {};
    const people = [];
    for (let i = 0; i < weights.length; i++) {
        people.push(i);
        const head2head_list = head2head[i].split("");
        const number = i;
        const weight = weights[i];
        const win_times = head2head_list.filter((x) => x === "W").length;
        const lose_times = head2head_list.filter((x) => x === "L").length;
        const none_times = head2head_list.filter((x) => x === "N").length;
        let big_win_times = 0;
        for (let j = 0; j < weights.length; j++) {
            if (head2head[i][j] === "W" && weight < weights[j]) big_win_times++;
        }

        info[i] = [
            number, //0
            weight, //1
            win_times, //2
            lose_times, //3
            none_times, //4
            big_win_times, //5
        ];
    }
    people.sort((a, b) => {
        const a_rate =
            info[a][2] + info[a][3] === 0
                ? 0
                : info[a][2] / (info[a][2] + info[a][3]);
        const b_rate =
            info[b][2] + info[b][3] === 0
                ? 0
                : info[b][2] / (info[b][2] + info[b][3]);

        return (
            b_rate - a_rate ||
            info[b][5] - info[a][5] ||
            info[b][1] - info[a][1] ||
            info[a][0] - info[b][0]
        );
    });
    return people.map((x) => x + 1);
}

console.log(solution([60, 70, 60], ["NNN", "NNN", "NNN"]));

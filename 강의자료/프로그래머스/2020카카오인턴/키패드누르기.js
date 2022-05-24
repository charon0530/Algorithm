function solution(numbers, hand) {
    const dict = {};
    for (let i = 0; i < 9; i++) {
        dict[i + 1] = [parseInt(i / 3), i % 3];
    }
    dict["*"] = [3, 0];
    dict[0] = [3, 1];
    dict["#"] = [3, 2];

    let cur_l = "*";
    let cur_r = "#";

    function getDistance(cur, target) {
        const [cur_r, cur_c] = dict[cur];
        const [next_r, next_c] = dict[target];
        return Math.abs(next_r - cur_r) + Math.abs(next_c - cur_c);
    }

    const answer = numbers.map((num) => {
        if (num === 1 || num === 4 || num === 7) {
            cur_l = num;
            return "L";
        } else if (num === 3 || num === 6 || num === 9) {
            cur_r = num;
            return "R";
        } else {
            const dist_l = getDistance(cur_l, num);
            const dist_r = getDistance(cur_r, num);

            if (dist_l > dist_r) {
                cur_r = num;
                return "R";
            } else if (dist_l < dist_r) {
                cur_l = num;
                return "L";
            } else {
                if (hand === "left") {
                    cur_l = num;
                    return "L";
                } else {
                    cur_r = num;
                    return "R";
                }
            }
        }
    });
    return answer.join("");
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));

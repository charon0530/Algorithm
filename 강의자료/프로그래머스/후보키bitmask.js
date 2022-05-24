"use strict";
function solution(relation) {
    let col_num = relation[0].length;
    let answer = [];
    function getPickedColNum(bit_mask = 0) {
        let result = 0;
        for (let i = 0; i < col_num; i++) {
            if ((1 << i) & bit_mask) result++;
        }
        return result;
    }

    //key 칼럼 개수
    for (let count = 1; count <= col_num; count++) {
        //bit mask
        for (let bit_mask = 1; bit_mask < 1 << col_num; bit_mask++) {
            if (getPickedColNum(bit_mask) !== count) continue;

            //최소성 체크
            let isMin = true;
            for (let i = 0; i < answer.length; i++) {
                if ((answer[i] | bit_mask) === bit_mask) {
                    isMin = false;
                    break;
                }
            }
            if (isMin === false) continue;

            //유일성 체크
            let temp_arr = [];
            relation.forEach((line) => {
                let temp_str = "";
                for (let i = 0; i < col_num; i++) {
                    if (bit_mask & (1 << i)) temp_str += line[i];
                }
                temp_arr.push(temp_str);
            });
            let isUnique = temp_arr.length === new Set(temp_arr).size;
            if (isUnique) answer.push(bit_mask);
        }
    }
    return answer;
}

console.log(
    solution([
        ["100", "ryan", "music", "2"],
        ["200", "apeach", "math", "2"],
        ["300", "tube", "computer", "3"],
        ["400", "con", "computer", "4"],
        ["500", "muzi", "music", "3"],
        ["600", "apeach", "music", "2"],
    ])
);

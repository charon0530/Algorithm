function solution(relation = [[]]) {
    const COL_NUM = relation[0].length;
    const can_list = [];
    const answer = [];
    function DFS(num, temp) {
        if (num === COL_NUM) {
            can_list.push([...temp]);
        } else {
            DFS(num + 1, [...temp, num]);
            DFS(num + 1, [...temp]);
        }
    }
    DFS(0, []);
    can_list.sort((a, b) => a.length - b.length);
    can_list.shift();

    outer: for (let i = 0; i < can_list.length; i++) {
        const cur_key = can_list[i];

        //최소성 체크
        inner: for (let key of answer) {
            if (key.every((x) => cur_key.includes(x))) {
                //최소성 불만족
                continue outer;
            }
        }

        //유일성 체크
        const pick_list = [];
        for (let row = 0; row < relation.length; row++) {
            let str = "";
            cur_key.forEach((x) => (str += relation[row][x]));
            pick_list.push(str);
        }
        if (pick_list.length === new Set(pick_list).size)
            answer.push([...cur_key]);
    }
    return answer.length;
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

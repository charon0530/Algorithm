function solution(relation) {
    const key_set = new Set();
    const arr = new Array(relation[0].length).fill(-1);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i;
    }
    const set = [];
    //부분집합을 구한다
    function DFS(start_idx, temp) {
        if (start_idx === arr.length) {
            set.push([...temp]);
        } else {
            DFS(start_idx + 1, [...temp]);
            DFS(start_idx + 1, [...temp, arr[start_idx]]);
        }
    }

    DFS(0, []);
    set.shift();
    set.sort((a, b) => {
        return a.length - b.length;
    });
    //console.log(set);
    for (let i = 0; i < set.length; i++) {
        const cur_key = set[i];
        let flag = true;
        //CHECK

        for (let val of key_set.values()) {
            let isMin = val.every((x) => cur_key.includes(x));
            if (isMin) {
                flag = false;
                break;
            }
        }
        if (flag === false) continue;

        const temp_set = [];
        for (let j = 0; j < relation.length; j++) {
            let str = "";
            cur_key.forEach((x) => {
                str += relation[j][x];
            });
            temp_set.push(str);
        }
        //console.log(temp_set);

        if (temp_set.length === new Set(temp_set).size) key_set.add(cur_key);
    }
    //console.log(key_set);
    return key_set;
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

CORENUM = 4;
DUPNUM = 2;
function solution(coreList) {
    const answer = [];
    const box = new Array(CORENUM);
    function DFS(boxIdx, startIdx) {
        if (boxIdx === box.length) {
            const set = new Set();
            const dict = {};
            for (let i = 0; i < box.length; i++) {
                if (set.has(box[i][0])) return;

                set.add(box[i][0]);

                for (let j = 0; j < box[i].length; j++) {
                    dict[box[i][j]] = (dict[box[i][j]] || 0) + 1;
                }
            }
            const dictKeys = Object.keys(dict);
            //if (!dictKeys.length === 6) return;
            if (!Object.values(dict).every((x) => x === DUPNUM)) return;
            answer.push([...box]);
        } else {
            for (let i = startIdx; i < coreList.length; i++) {
                box[boxIdx] = coreList[i];
                DFS(boxIdx + 1, i + 1);
            }
        }
    }
    DFS(0, 0);
    console.log(answer);
}

solution([
    ["메", "써", "크"],
    ["다", "써", "베"],
    ["암", "베", "크"],
    ["암", "크", "베"],
    ["암", "다", "메"],
    ["암", "크", "메"],
    ["암", "다", "베"],
    ["크", "베", "메"],
    ["써", "메", "암"],
    ["써", "암", "다"],
    ["써", "암", "베"],
    ["베", "크", "써"],
]);

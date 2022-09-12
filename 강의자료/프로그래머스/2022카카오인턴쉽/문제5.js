function solution(rc, operations) {

    let firstRowPointer = 0;
    const ROWNUM = rc.length;
    const COLNUM = rc[0].length;
    operations.push("_")
    const newOp = [];
    let curOp = "_";
    let count = 0;
    for (let i = 0; i < operations.length; i++) {
        const targetOp = operations[i];
        if (targetOp === "Rotate") {
            if (curOp === "Rotate") {
                count++
            } else {
                newOp.push([curOp, count]);
                curOp = "Rotate";
                count = 1;
            }
        }
        else if (targetOp === "ShiftRow") {
            if (curOp === "ShiftRow") {
                count++
            }
            else {
                newOp.push([curOp, count]);
                curOp = "ShiftRow";
                count = 1;
            }
        }
        else if (targetOp === "_") {
            newOp.push([curOp, count]);
            console.log("END")
        }
    }

    function RotateF(num) {
        if (num === COLNUM * 2 + (ROWNUM - 2) * 2) return;
        //첫번째행 idx = firstRowPointer
        //마지막행 idx = firstRowPointer-1 if -1 이면 ROWNUM-1
        const firstIDX = firstRowPointer;
        const lastIDX = (firstRowPointer - 1 + ROWNUM) % ROWNUM;
        const subList = [];
        for (let i = 0; i < COLNUM; i++) {
            subList.push(rc[firstIDX][i]);
        }
        for (let i = (firstIDX + 1) % ROWNUM; i !== lastIDX; i = (i + 1) % ROWNUM) {
            subList.push(rc[i][COLNUM - 1])
        }
        for (let i = COLNUM - 1; i >= 0; i--) {
            subList.push(rc[lastIDX][i]);
        }
        for (let i = (lastIDX - 1 + ROWNUM) % ROWNUM; i !== firstIDX; i = (i - 1 + ROWNUM) % ROWNUM) {
            subList.push(rc[i][0])
        }
        //console.log(subList)
        // console.log("BEFORE_ROTATE : ");
        // console.table(rc)


        //if (num === 0) return;
        let startIdx = num * (-1);
        const mok = Math.floor(num / subList.length);
        const na = num % subList.length;
        startIdx = (startIdx + (mok + 1) * subList.length) % subList.length
        // while (startIdx < 0) {
        //     startIdx += subList.length;
        // }
        // startIdx = startIdx % subList.length

        for (let i = 0; i < COLNUM; i++) {
            rc[firstIDX][i] = subList[(startIdx + subList.length) % subList.length];
            startIdx++;
        }
        for (let i = (firstIDX + 1) % ROWNUM; i !== lastIDX; i = (i + 1) % ROWNUM) {
            rc[i][COLNUM - 1] = subList[(startIdx + subList.length) % subList.length];
            startIdx++;
        }
        for (let i = COLNUM - 1; i >= 0; i--) {
            rc[lastIDX][i] = subList[(startIdx + subList.length) % subList.length];
            startIdx++;
        }
        for (let i = (lastIDX - 1 + ROWNUM) % ROWNUM; i !== firstIDX; i = (i - 1 + ROWNUM) % ROWNUM) {
            rc[i][0] = subList[(startIdx + subList.length) % subList.length];
            startIdx++;
        }
        // console.log("AFTER_ROTATE : ");
        // console.table(rc)

    }

    function ShiftRowF(num) {

        firstRowPointer -= num;
        const mok = Math.floor(num / ROWNUM);

        firstRowPointer = (firstRowPointer + (mok + 1) * ROWNUM) % ROWNUM
        // while (firstRowPointer < 0) {
        //     firstRowPointer += ROWNUM;
        // }
        // firstRowPointer = (firstRowPointer) % ROWNUM
    }
    const answer = [];
    for (let i = 1; i < newOp.length; i++) {
        const [targetOp, targetCount] = newOp[i];
        if (targetOp === "Rotate") {
            RotateF(targetCount);
        }
        else if (targetOp === "ShiftRow") {
            ShiftRowF(targetCount)
        }
    }
    let lineIdx = firstRowPointer;

    while (true) {
        answer.push(rc[lineIdx])
        lineIdx = (lineIdx + 1) % ROWNUM;
        if (lineIdx === firstRowPointer) break;
    }
    return answer;

}

console.log(solution([[1, 2], [3, 4]], ["Rotate", "Rotate"]))
function solution(list) {
    const newList = [];
    for (let i = 0; i < list.length; i++) {
        const curTarget = list[i];
        const NAME = curTarget[0];
        let GRADES = curTarget.slice(1);

        GRADES = GRADES.map((val, idx) => [val, idx]);

        GRADES.sort((a, b) => b[0] - a[0]);
        //console.log("sorted: ", GRADES);
        const gradeSTR = GRADES.reduce((acc, val) => {
            if (val[0] === 0) {
                acc += "_";
            } else {
                acc += String(String.fromCharCode(val[1] + "A".charCodeAt()));
            }
            return acc;
        }, "");
        //console.log("gradeSTR : ", gradeSTR);
        const finSTR = gradeSTR.replace(/_/g, gradeSTR[0]);
        //console.log("finSTR : ", finSTR);
        newList.push([NAME, finSTR]);
    }
    newList.sort((a, b) => a[1].localeCompare(b[1]));
    console.log(newList);
}

solution([
    ["사과", 2, 1, 0, 0],
    ["바나나", 3, 1, 0, 0],
]);

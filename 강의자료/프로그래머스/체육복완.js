function solution(n, lost, reserve) {
    var answer = 0;
    let lostList = new Array(n + 1).fill(0);
    let resList = new Array(n + 1).fill(0);
    //init
    lost.forEach((x) => {
        lostList[x] = 1;
    });
    reserve.forEach((x) => {
        resList[x] = 1;
    });

    //special case
    lost.forEach((x) => {
        if (resList[x] === 1) {
            resList[x] = 0;
            lostList[x] = 0;
        }
    });
    //
    for (let x = 1; x <= n; x++) {
        if (lostList[x - 1] === 1 && resList[x] === 1) {
            lostList[x - 1] = 0;
            resList[x] = 0;
        } else if (lostList[x + 1] === 1 && resList[x] === 1) {
            lostList[x + 1] = 0;
            resList[x] = 0;
        }
    }
    for (let i = 1; i <= n; i++) {
        if (lostList[i] === 0) {
            answer++;
        }
    }

    return answer;
}

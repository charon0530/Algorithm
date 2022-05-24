function solution(progresses, speeds) {
    let answer = [];
    while (progresses.length) {
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        let count = 0;
        while (progresses[0] >= 100) {
            count++;
            progresses.shift();
            speeds.shift();
        }
        if (count !== 0) answer.push(count);
    }
    return answer;
}
console.log(solution([93, 30, 55], [1, 30, 5]));

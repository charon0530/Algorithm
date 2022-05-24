function solution(abilities, k) {
    var answer = 0;
    abilities.sort((a, b) => b - a);
    if (abilities.length % 2 === 1) abilities.push(0);

    let list = [];
    for (let i = 1; i < abilities.length; i += 2) {
        list.push([abilities[i - 1], abilities[i]]);
    }
    list.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
    for (let i = 0; i < list.length; i++) {
        let [a, b] = list[i];
        if (k > 0) {
            answer += Math.max(a, b);
            k--;
        } else {
            answer += Math.min(a, b);
        }
    }

    return answer;
}

console.log(solution([2, 8, 3, 6, 1, 9, 1, 9], 2));

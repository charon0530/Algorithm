function solution(clothes) {
    var answer = 0;
    //clothes 는 옷이름 옷 종류
    //옷 종류에 카운트 해야함
    // N+1 * M+1 * ...
    //여기서 0 0 0 인 1개를 빼야함

    let list = clothes.reduce((obj, cur) => {
        obj[cur[1]] = (obj[cur[1]] || 0) + 1;
        return obj;
    }, {});
    let valueList = [];
    for (let [key, value] of Object.entries(list)) {
        valueList.push(value + 1);
    }
    answer = valueList.reduce((a, b) => a * b, 1) - 1;
    return answer;
}

console.log(
    solution([
        ["yellowhat", "headgear"],
        ["bluesunglasses", "eyewear"],
        ["green_turban", "headgear"],
    ])
);

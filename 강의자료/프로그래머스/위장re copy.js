function solution(clothes) {
    let answer = 1;
    //make dictionary
    const dic = clothes.reduce((acc, cur) => {
        const [value, key] = cur;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});
    //answer *= Object.value.length
    for (let val of Object.values(dic)) {
        answer *= val + 1;
    }
    //answer -= 1;
    return answer - 1;
}

console.log(
    solution([
        ["yellowhat", "headgear"],
        ["bluesunglasses", "eyewear"],
        ["green_turban", "headgear"],
    ])
);

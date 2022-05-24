function solution(clothes) {
    let answer = 1;
    const dic = {};
    //make dictionary
    clothes.forEach((clo) => {
        const [val, key] = clo;
        if (dic[key] === undefined) {
            dic[key] = [val];
        } else {
            dic[key].push(val);
        }
    });
    //answer *= Object.value.length
    for (let val of Object.values(dic)) {
        answer *= val.length + 1;
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

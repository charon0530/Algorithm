function solution(s = "") {
    return s
        .slice(2, s.length - 2)
        .split("},{")
        .map((x) => x.split(",").map((y) => Number(y)))
        .sort((a, b) => a.length - b.length)
        .reduce(
            (acc, val) => [...acc, ...val.filter((x) => !acc.includes(x))],
            []
        );
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));

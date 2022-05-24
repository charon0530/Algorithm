function solution(s = "") {
    const answer = s
        .slice(2, s.length - 2)
        .split("},{")
        .map((str) => str.split(",").map((x) => Number(x)))
        .sort((a, b) => a.length - b.length)
        .reduce((acc, val) => {
            acc.push(...val.filter((x) => !acc.includes(x)));
            console.log(acc);
            return acc;
        }, []);

    console.log(answer);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));

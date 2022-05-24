function solution(n, weak, dist) {
    let linear_weak = new Array(weak.length * 2 - 1).fill(0);
    for (let i = 0; i < weak.length * 2 - 1; i++) {
        linear_weak[i] = i < weak.length ? weak[i] : weak[i - weak.length] + n;
    }
    console.log(linear_weak);

    function N_Permutation(idx, num) {
        let ch = new Array(dist.length).fill(0);
        let temp = new Array(num).fill(0);
        let permutation_list = [];
        function Permutation(idx) {
            if (idx === num) {
                permutation_list.push([...temp]);
            } else {
                for (let i = 0; i < dist.length; i++) {
                    if (ch[i] === 1) continue;

                    ch[i] = 1;
                    temp[idx] = dist[i];
                    Permutation(idx + 1);
                    ch[i] = 0;
                }
            }
        }
        Permutation(idx);
        return permutation_list;
    }
    for (let i = 1; i <= dist.length; i++) {
        let permuation = N_Permutation(0, i);

        for (const permu of permuation) {
            for (let j = 0; j < weak.length; j++) {
                let line = linear_weak.slice(j, j + weak.length);

                for (const p of permu) {
                    const coverage = line[0] + p;
                    line = line.filter((el) => el > coverage);

                    if (line.length === 0) return i;
                }
            }
        }
    }
    return -1;
}

console.log(solution(12, [1, 5, 6, 10], [1, 2, 3, 4]));

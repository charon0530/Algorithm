function solution(s = "") {
    const answer = [s];

    for (let size = 1; size <= parseInt(s.length / 2); size++) {
        let padded_str = s + "*".repeat(size * 2);
        let cursor = size - 1;
        let cache = "";
        let count = 0;
        let temp_str = "";
        for (; cursor < padded_str.length; cursor += size) {
            const current = padded_str.slice(cursor + 1 - size, cursor + 1);

            if (current !== cache) {
                if (count === 0);
                else if (count === 1) temp_str += cache;
                else temp_str += String(count) + cache;
                cache = current;
                count = 1;
            } else {
                count++;
            }
        }

        answer.push(temp_str.replace(/\*/g, ""));
    }
    return Math.min(...answer.map((x) => x.length));
}

console.log(solution("aabbaccc"));

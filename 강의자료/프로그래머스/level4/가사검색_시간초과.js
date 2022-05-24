function GetIdx(str) {
    let answer = -1;
    if (str[0] === "?") {
        let lt = 0;
        let rt = str.length - 1;
        while (lt <= rt) {
            let mid = parseInt((lt + rt) / 2);

            if (str[mid] !== "?") {
                answer = mid;
                rt = mid - 1;
            } else {
                lt = mid + 1;
            }
        }
    } else {
        let lt = 0;
        let rt = str.length - 1;
        while (lt <= rt) {
            let mid = parseInt((lt + rt) / 2);

            if (str[mid] !== "?") {
                answer = mid;
                lt = mid + 1;
            } else {
                rt = mid - 1;
            }
        }
    }
    return answer;
}
function solution(words, queries) {
    let answer = [];
    queries.forEach((query) => {
        let match_count = 0;
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (query.length !== word.length) {
                continue;
            }
            let flag = query[0] === "?"; // true => 접두사 false=? 접미사
            let idx = GetIdx(query);
            let match = true;
            if (flag) {
                for (let j = idx; j < word.length; j++) {
                    if (word[j] !== query[j]) {
                        match = false;
                        break;
                    }
                }
                if (match) match_count++;
            } else {
                for (let j = 0; j <= idx; j++) {
                    if (word[j] !== query[j]) {
                        match = false;
                        break;
                    }
                }
                if (match) match_count++;
            }
        }
        answer.push(match_count);
    });
    return answer;
}

console.log(
    solution(
        ["frodo", "front", "frost", "frozen", "frame", "kakao"],
        ["fro??", "????o", "fr???", "fro???", "pro?"]
    )
);

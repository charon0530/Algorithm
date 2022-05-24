function solution(words, queries) {
    let answer = [];
    let dic = {};
    let rev_dic = {};
    words.forEach((word) => {
        if (dic[word.length] === undefined) {
            dic[word.length] = [word];
            rev_dic[word.length] = [word.split("").reverse().join("")];
        } else {
            dic[word.length].push(word);
            rev_dic[word.length].push(word.split("").reverse().join(""));
        }
    });
    for (let key in dic) {
        dic[key].sort();
        rev_dic[key].sort();
    }

    for (let i = 0; i < queries.length; i++) {
        let query =
            queries[i][0] !== "?"
                ? queries[i]
                : queries[i].split("").reverse().join("");
        if (dic[query.length] === undefined) {
            answer.push(0);
            continue;
        }

        let fill_a_query = query.replace(/\?/g, "a");
        let fill_z_query = query.replace(/\?/g, "z");

        let list =
            queries[i][0] !== "?"
                ? [...dic[query.length]]
                : [...rev_dic[query.length]];

        console.log(query, list);
        let low = undefined;
        let high = undefined;

        let lt = 0;
        let rt = list.length - 1;
        while (lt <= rt) {
            let mid = parseInt((lt + rt) / 2);

            if (list[mid].localeCompare(fill_a_query) < 0) {
                lt = mid + 1;
            } else {
                low = mid;
                rt = mid - 1;
            }
        }

        lt = low;
        rt = list.length - 1;
        while (lt <= rt) {
            let mid = parseInt((lt + rt) / 2);

            if (list[mid].localeCompare(fill_z_query) <= 0) {
                high = mid;
                lt = mid + 1;
            } else {
                rt = mid - 1;
            }
        }
        // console.log("low : ", low);
        // console.log("high : ", high);
        // console.log(high - low + 1);
        answer.push(high - low + 1);
    }
    return answer;
}

console.log(
    solution(
        ["frodo", "front", "frost", "frozen", "frame", "kakao"],
        ["fro??", "????o", "fr???", "fro???", "pro?"]
    )
);

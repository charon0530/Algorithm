// 핵심요소 : 정규식에서 (?=X) 또는 (?!X) 일 경우, 일치 여부는 X까지 포함하여 판단하지만, 매칭된 결과는 X를 제외한 결과이다.

function solution(word, pages) {
    var answer = [];
    const scores_dic = {};
    const name_reg = new RegExp(
        `<meta property="og:url" content="https://\\S+(?=")`,
        "g"
    );
    const link_reg = new RegExp(`<a href="https://\\S+(?=")`, "g");
    const word_reg = new RegExp(`[^a-z]${word}(?=[^a-z])`, "gi");
    for (let i = 0; i < pages.length; i++) {
        const page_name = pages[i].match(name_reg)[0].split("//")[1];
        let linked_pages = pages[i].match(link_reg);
        linked_pages =
            linked_pages !== null
                ? linked_pages.map((x) => x.split("//")[1])
                : [];

        const word_counts =
            pages[i].match(word_reg) !== null
                ? pages[i].match(word_reg).length
                : 0;
        scores_dic[page_name] = [word_counts, linked_pages, i];
    }

    for (let [key, val] of Object.entries(scores_dic)) {
        const cur_page = key;
        const [std_score, linked_list, index_num] = val;
        let final_score = std_score;

        for (let [insdie_key, inside_val] of Object.entries(scores_dic)) {
            if (insdie_key === cur_page) continue;
            const [i_std_score, i_linked_list] = inside_val;
            if (i_linked_list.length === 0) continue;
            if (i_linked_list.some((x) => x === cur_page)) {
                final_score += i_std_score / i_linked_list.length;
            }
        }
        //console.log(cur_page, std_score, final_score - std_score);
        answer.push([cur_page, final_score, index_num]);
        answer.sort((a, b) => {
            if (b[1] === a[1]) return a[2] - b[2];
            return b[1] - a[1];
        });
    }
    return answer[0][2];
}

console.log(
    solution("Muzi", [
        '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://careers.kakao.com/interview/list"/>\n</head>  \n<body>\n<a href="https://programmers.co.kr/learn/courses/4673"></a>#!Muzi0Muzi!)jayg07con&&\n\n</body>\n</html>',
        '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://www.kakaocorp.com"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href="https://hashcode.co.kr/tos"></a>\n\n\t^\n</body>\n</html>',
    ])
);

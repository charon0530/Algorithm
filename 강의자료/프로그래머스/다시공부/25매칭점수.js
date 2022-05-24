function solution(word = "", pages = []) {
    const score_dict = {};
    word = word.toLowerCase();
    // name : [std_val , [o_link], link_score, idx_num]

    for (let i = 0; i < pages.length; i++) {
        const cur_page = pages[i];
        const nameReg = new RegExp(
            `<meta property="og:url" content="https://\\S+(?=")`,
            "g"
        );
        const name = cur_page.match(nameReg)[0].split("//")[1];

        const word_split_reg = /[\d\W]/;
        const std_val = cur_page
            .split(word_split_reg)
            .filter((x) => x.toLowerCase() === word).length;

        const link_reg = new RegExp('(?<=<a href="https://)\\S+(?=">)', "g");
        let link_list = cur_page.match(link_reg);
        if (link_list === null) link_list = [];
        score_dict[name] = [std_val, link_list, 0, i];
    }

    for (let [key, val] of Object.entries(score_dict)) {
        const [cur_std_val, cur_o_link, cur_link_score, cur_idx] = val;

        for (let [i_key, i_val] of Object.entries(score_dict)) {
            if (key === i_key) continue;

            const [i_std_val, i_o_link, i_link_score, i_idx] = i_val;
            if (i_o_link.includes(key)) {
                score_dict[key][2] += i_std_val / i_o_link.length;
            }
        }
    }
    console.log(score_dict);
    let answer = [];
    for (let val of Object.values(score_dict)) {
        const [std, _, lin_score, idx] = val;
        answer.push([std + lin_score, idx]);
    }
    answer.sort((a, b) => {
        if (b[0] === a[0]) return a[1] - b[1];
        return b[0] - a[0];
    });
    return answer[0][1];
}

console.log(
    solution("blind", [
        '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://a.com"/>\n</head>  \n<body>\nBlind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. \n Link to b </a>\n</body>\n</html>',
        '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://b.com"/>\n</head>  \n<body>\nSuspendisse potenti. Vivamus venenatis tellus non turpis bibendum, \n<a href="https://a.com"> Link to a </a>\nblind sed congue urna varius. Suspendisse feugiat nisl ligula, quis malesuada felis hendrerit ut.\n<a href="https://c.com"> Link to c </a>\n</body>\n</html>',
        '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://c.com"/>\n</head>  \n<body>\nUt condimentum urna at felis sodales rutrum. Sed dapibus cursus diam, non interdum nulla tempor nec. Phasellus rutrum enim at orci consectetu blind\n<a href="https://a.com"> Link to a </a>\n</body>\n</html>',
    ])
);

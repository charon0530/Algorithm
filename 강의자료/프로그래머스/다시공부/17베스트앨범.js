function solution(genres, plays) {
    let answer = [];
    const genres_dic = {};

    for (let i = 0; i < genres.length; i++) {
        genres_dic[genres[i]] = genres_dic[genres[i]] + plays[i] || plays[i];
    }
    console.log(genres_dic);
    const sorted = Object.entries(genres_dic)
        .sort((a, b) => {
            return b[1] - a[1];
        })
        .map((x) => x[0]);
    console.log(sorted);

    const plays_dic = {};
    for (let i = 0; i < plays.length; i++) {
        if (plays_dic[genres[i]] === undefined) {
            plays_dic[genres[i]] = [[plays[i], i]];
        } else {
            plays_dic[genres[i]].push([plays[i], i]);
        }
    }
    console.log(plays_dic);
    for (let g of sorted) {
        const cur_list = plays_dic[g];
        cur_list.sort((a, b) => {
            if (b[0] === a[0]) return a[1] - b[1];
            return b[0] - a[0];
        });
        cur_list.slice(0, 2).forEach((x) => {
            answer.push(x[1]);
        });
    }
    return answer;
}

console.log(
    solution(
        ["classic", "pop", "classic", "classic", "pop"],
        [500, 600, 150, 800, 2500]
    )
);

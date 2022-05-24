function solution(record = [""]) {
    const id_to_nick = {};
    let answer = [];
    record.forEach((log) => {
        const [keyword, id, nick] = log.split(" ");

        if (keyword === "Enter") {
            id_to_nick[id] = nick;
            answer.push(`${id}님이 들어왔습니다.`);
        } else if (keyword === "Leave") {
            answer.push(`${id}님이 나갔습니다.`);
        } else {
            id_to_nick[id] = nick;
        }
    });

    answer = answer.map((log) => {
        const idx = log.indexOf("님");
        const id = log.slice(0, idx);
        return log.replace(id, id_to_nick[id]);
    });
    return answer;
}

console.log(
    solution([
        "Enter uid1234 Muzi",
        "Enter uid4567 Prodo",
        "Leave uid1234",
        "Enter uid1234 Prodo",
        "Change uid4567 Ryan",
    ])
);

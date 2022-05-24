function solution(record) {
    var answer = [];
    const dic = {};
    record.forEach((log) => {
        let [command, id, nick] = log.split(" ");

        if (command === "Enter") {
            dic[id] = nick;
            answer.push(`${id}님이 들어왔습니다.`);
        } else if (command === "Leave") {
            answer.push(`${id}님이 나갔습니다.`);
        } else {
            dic[id] = nick;
        }
    });

    let result = answer.map((line) => {
        let idx = line.indexOf("님");
        let id = [...line].slice(0, idx).join("");

        return line.replace(id, dic[id]);
    });
    return result;
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

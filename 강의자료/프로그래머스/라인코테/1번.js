function solution(logs = []) {
    let ok_count = 0;

    for (let i = 0; i < logs.length; i++) {
        let cur_log = logs[i];
        if (
            cur_log.length <= 100 &&
            cur_log.indexOf("team_name : ") === 0 &&
            cur_log.includes("team_name : ") &&
            cur_log.includes("application_name : ") &&
            cur_log.includes(" error_level : ") &&
            cur_log.includes(" message : ")
        ) {
            cur_log = cur_log.split(" application_name : ");
            const t_val = cur_log[0].split(" : ")[1];
            cur_log = cur_log[1].split(" error_level : ");
            const a_val = cur_log[0];
            cur_log = cur_log[1].split(" message : ");
            const e_val = cur_log[0];
            const m_val = cur_log[1];
            if (
                new RegExp(`[a-zA-Z]{${t_val.length}}`).test(t_val) &&
                new RegExp(`[a-zA-Z]{${a_val.length}}`).test(a_val) &&
                new RegExp(`[a-zA-Z]{${e_val.length}}`).test(e_val) &&
                new RegExp(`[a-zA-Z]{${m_val.length}}`).test(m_val)
            )
                ok_count++;
        }
    }

    return logs.length - ok_count;
}

console.log(
    solution([
        "team_name : MyTeam application_name : YourApp error_level : info messag : IndexOutOfRange",
        "no such file or directory",
        "team_name : recommend application_name : recommend error_level : info message : RecommendSucces11",
        "team_name : recommend application_name : recommend error_level : info message : Success!",
        "   team_name : db application_name : dbtest error_level : info message : test",
        "team_name     : db application_name : dbtest error_level : info message : test",
        "team_name : TeamTest application_name : TestApplication error_level : info message : ThereIsNoError",
    ])
);

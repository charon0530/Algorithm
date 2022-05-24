function solution(logs = []) {
    let ok_count = 0;

    const reg =
        /^team_name : [a-zA-Z]+ application_name : [a-zA-Z]+ error_level : [a-zA-Z]+ message : [a-zA-Z]+$/;

    logs.forEach((log) => {
        if (log.length <= 100) {
            if (reg.test(log)) ok_count++;
        }
    });
    return logs.length - ok_count;
}

console.log(
    solution([
        "team_name : db application_name : dbtest error_level : info message : test",
        "team_name : test application_name : I DONT CARE error_level : error message : x",
        "team_name : ThisIsJustForTest application_name : TestAndTestAndTestAndTest error_level : test message : IAlwaysTestingAndIWillTestForever",
        "team_name : oberervability application_name : LogViewer error_level : error",
    ])
);

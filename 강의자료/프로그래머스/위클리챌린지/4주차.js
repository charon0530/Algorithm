function solution(table, languages, preference) {
    var answer = [];

    const dict = {};

    for (let i = 0; i < table.length; i++) {
        const [job_name, l1, l2, l3, l4, l5] = table[i].split(" ");
        dict[job_name] = {};
        dict[job_name][l1] = 5;
        dict[job_name][l2] = 4;
        dict[job_name][l3] = 3;
        dict[job_name][l4] = 2;
        dict[job_name][l5] = 1;
    }
    //console.log(dict);

    for (let key of Object.keys(dict)) {
        let sum = 0;
        for (let i = 0; i < languages.length; i++) {
            const lang = languages[i];
            const pref = preference[i];
            sum += dict[key][lang] * pref || 0;
        }
        answer.push([key, sum]);
    }

    return answer
        .sort((a, b) => {
            if (b[1] === a[1]) return a[0].localeCompare(b[0]);
            return b[1] - a[1];
        })
        .shift()[0];
}

console.log(
    solution(
        [
            "SI JAVA JAVASCRIPT SQL PYTHON C#",
            "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
            "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
            "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
            "GAME C++ C# JAVASCRIPT C JAVA",
        ],
        ["JAVA", "JAVASCRIPT"],
        [7, 5]
    )
);

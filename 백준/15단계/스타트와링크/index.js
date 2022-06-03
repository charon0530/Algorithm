var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    let answer = Number.MAX_SAFE_INTEGER;
    const N = Number(input[0]);
    const graph = new Array(N);
    for (let i = 0; i < N; i++) {
        graph[i] = input[i + 1].split(" ").map(Number);
    }
    //console.table(graph);
    const startTeamList = [];
    const box = new Array(N / 2).fill(-1);

    function DFS(boxIdx, startNum) {
        if (boxIdx === box.length) {
            startTeamList.push([...box]);
            return;
        } else {
            for (let i = startNum; i < N; i++) {
                box[boxIdx] = i;
                DFS(boxIdx + 1, i + 1);
            }
        }
    }
    DFS(0, 0);
    //console.log("ss", startTeamList);
    const totalList = [];
    for (let i = 0; i < N; i++) {
        totalList.push(i);
    }
    let linkTeamList = [];
    for (let startTeam of startTeamList) {
        linkTeamList.push(totalList.filter((x) => !startTeam.includes(x)));
    }
    //console.log(linkTeamList);

    for (let i = 0; i < startTeamList.length; i++) {
        const startTeam = startTeamList[i];
        const linkTeam = linkTeamList[i];

        const box = new Array(2).fill(-1);
        const ch = new Array(startTeam.length).fill(0);
        let startSum = 0;
        let linkSum = 0;
        function p(boxIdx, what) {
            if (boxIdx === box.length) {
                if (what === "startSum") {
                    startSum += graph[box[0]][box[1]];
                } else if (what === "linkSum") {
                    linkSum += graph[box[0]][box[1]];
                }
            } else {
                for (let i = 0; i < startTeam.length; i++) {
                    if (ch[i] === 1) continue;
                    ch[i] = 1;
                    if (what === "startSum") box[boxIdx] = startTeam[i];
                    else if (what === "linkSum") box[boxIdx] = linkTeam[i];
                    p(boxIdx + 1, what);
                    ch[i] = 0;
                }
            }
        }
        p(0, "startSum");
        p(0, "linkSum");
        answer = Math.min(Math.abs(startSum - linkSum), answer);
    }
    console.log(answer);
}

solution(param);

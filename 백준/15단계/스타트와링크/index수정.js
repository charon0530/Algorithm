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

        let sSum = 0;
        let lSum = 0;
        for (let i = 0; i < N / 2; i++) {
            for (let j = 0; j < N / 2; j++) {
                sSum += graph[startTeam[i]][startTeam[j]];
                lSum += graph[linkTeam[i]][linkTeam[j]];
            }
        }
        answer = Math.min(Math.abs(sSum - lSum), answer);
    }
    console.log(answer);
}

solution(param);

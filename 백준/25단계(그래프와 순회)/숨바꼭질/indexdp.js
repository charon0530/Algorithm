var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, K] = input[0].split(" ").map(Number);
    if (N === K) {
        console.log(0);
        return;
    }
    // dp로 풀기에는 부적합함
    // 이유 : x-1 즉, 뒤 값(up)을 알아야 하기 때문에 bottom-up이 어려움.

    //DP로 해결을 하려면 테이블을 채워나가는 방향이 단방향이어야 해요.(=DAG)
    //그런데 얘는 dp[i] = min(dp[i-1], dp[i+1], dp[i*2]) + 1 으로 식을
    //세워서 해결을 하고싶어도 dp[10]은 dp[9]를 필요로 한데
    //dp[9]는 dp[10]을 필요로 하니 테이블을 채워나갈 방법이 없어요.
    //https://blog.encrypted.gg/33
}

solution(param);

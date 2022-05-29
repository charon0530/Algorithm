// => 이런 유형은 중복조합을 단순 조합으로 만들고 계산을 통해서 값을 구한다.
// 즉, 중복 조합의 모든 경우의 수를 각각 구하는 것이 아니라 각 구간의 합계를 구한다.
// ex => [x,x,x,x,x,y],[x,x,x,x,y,y],[x,x,y,y,z,z] 가 아니라 [5,1,0] [4,2,0] [2,2,2]로 구한다!
function solution(n) {
    const box = new Array(2).fill(-1);
    const result = [];
    function DFS(boxIndex, startIndex) {
        if (boxIndex === box.length) {
            result.push([...box]);
        } else {
            for (let i = startIndex; i < n + 2; i++) {
                box[boxIndex] = i;
                DFS(boxIndex + 1, i + 1);
            }
        }
    }
    DFS(0, 0);
    //console.log(result);
    const answer = [];
    for (const [c1, c2] of result) {
        answer.push([c1, c2 - c1 - 1, n + 2 - c2 - 1]);
    }
    console.log(answer);
    console.log(answer.length);
}

console.log(solution(6));

//x+y+z = n

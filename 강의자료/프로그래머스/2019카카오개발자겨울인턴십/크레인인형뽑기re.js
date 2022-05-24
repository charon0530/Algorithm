// 배열과 리스트는 다르다!
function solution(board, moves) {
    let answer = 0;
    let result_stack = [];
    const BOARD_SIZE = board.length;
    let stacks = new Array(BOARD_SIZE).fill(null).map((x) => []);

    for (let i = BOARD_SIZE - 1; i >= 0; i--) {
        let line = board[i];
        for (let j = 0; j < line.length; j++) {
            if (line[j] === 0) continue;
            stacks[j].push(line[j]);
        }
    }
    console.log(stacks);
    for (let i = 0; i < moves.length; i++) {
        let stack_num = moves[i] - 1;

        let picked_item = stacks[stack_num].pop();
        if (picked_item === undefined) continue;

        if (result_stack[result_stack.length - 1] === picked_item) {
            result_stack.pop();
            answer += 2;
        } else {
            result_stack.push(picked_item);
        }
    }
    return answer;
}

console.log(
    solution(
        [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 3],
            [0, 2, 5, 0, 1],
            [4, 2, 4, 4, 2],
            [3, 5, 1, 3, 1],
        ],
        [1, 5, 3, 5, 1, 2, 1, 4]
    )
);

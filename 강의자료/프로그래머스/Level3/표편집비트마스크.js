// bit수(n)가 적어야함!
// 이 문제는 못품 비트 쉬프트가 32비트까지 밖에 안됨!
// node는 32비트인듯

function GoUp(bitmask, cursor, num) {
    let result = 0;
    let count = 0;
    while (true) {
        if (cursor < 0) return -1;
        if (count === num) break;
        if ((bitmask & (1 << (cursor - 1))) !== 0) {
            count++;
            cursor--;
        } else cursor--;
        result++;
    }
    return result;
}
function GoDown(bitmask, cursor, num) {
    let result = 0;
    let count = 0;
    let limit = Number(bitmask).toString(2).length;
    while (true) {
        if (cursor >= limit) return -1;
        if (count === num) break;
        if ((bitmask & (1 << (cursor + 1))) !== 0) {
            count++;
            cursor++;
        } else cursor++;
        result++;
    }
    return result;
}
function solution(n, k, cmd) {
    let removed_stack = [];
    let bitmask = (1 << n) - 1;
    let cursor = k;

    cmd.forEach((command) => {
        command = command.split(" ");
        if (command[0] === "U") {
            let num = Number(command[1]);
            let move_count = GoUp(bitmask, cursor, num);
            cursor -= move_count;
        } else if (command[0] === "D") {
            let num = Number(command[1]);
            let move_count = GoDown(bitmask, cursor, num);
            cursor += move_count;
        } else if (command[0] === "C") {
            removed_stack.push(cursor);
            bitmask = bitmask & ~(1 << cursor);

            let move_count = GoDown(bitmask, cursor, 1);
            if (move_count !== -1) {
                cursor += move_count;
            } else {
                move_count = GoUp(bitmask, cursor, 1);
                cursor -= move_count;
            }
        } else if (command[0] === "Z") {
            let idx = removed_stack.pop();
            bitmask |= 1 << idx;
        }
        console.log(cursor, removed_stack);
    });
    console.log(
        Number(bitmask)
            .toString(2)
            .replace(/1/g, "O")
            .replace(/0/g, "X")
            .split("")
            .reverse("")
            .join("")
    );
    console.log(1 << 31);
    console.log(1 << 34);
    console.log(1 << 63);
    console.log(1 << 64);
}
console.log(
    solution(8, 2, [
        "D 2",
        "C",
        "U 3",
        "C",
        "D 4",
        "C",
        "U 2",
        "Z",
        "Z",
        "U 1",
        "C",
    ])
);

class Node {
    constructor(num) {
        this.idx = num;
        this.up = null;
        this.down = null;
    }
}

function solution(n, k, cmd) {
    const delStack = [];
    const nodes = [];
    for (let i = 0; i < n; i++) {
        nodes.push(new Node(i));
    }
    for (let i = 0; i < n - 1; i++) {
        nodes[i].down = nodes[i + 1];
    }
    for (let i = 1; i < n; i++) {
        nodes[i].up = nodes[i - 1];
    }

    let cursor = k;
    cmd.forEach((c) => {
        const [key, num] = c.split(" ");
        if (key === "U") {
            for (let i = 0; i < num; i++) {
                cursor = nodes[cursor].up.idx;
            }
        } else if (key === "D") {
            for (let i = 0; i < num; i++) {
                cursor = nodes[cursor].down.idx;
            }
        } else if (key === "C") {
            const target = nodes[cursor];
            if (target.up !== null) target.up.down = target.down;
            if (target.down !== null) target.down.up = target.up;
            delStack.push(target);
            if (target.down === null) cursor = target.up.idx;
            else cursor = target.down.idx;
        } else if (key === "Z") {
            const target = delStack.pop();
            if (target.up !== null) target.up.down = target;
            if (target.down !== null) target.down.up = target;
        } else {
            console.log("err");
        }
    });
    const answer = new Array(n).fill("O");
    for (let del of delStack) {
        answer[del.idx] = "X";
    }

    return answer.join("");
}
console.log(
    solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"])
);

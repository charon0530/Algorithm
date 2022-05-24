class Node {
    constructor(num) {
        this.val = num;
        this.up = null;
        this.down = null;
    }
}
function solution(n, k, cmd) {
    const nodes = [];
    const del_stack = [];
    for (let i = 0; i < n; i++) {
        nodes.push(new Node(i));
    }

    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].down = nodes[i + 1];
    }
    for (let i = nodes.length - 1; i > 0; i--) {
        nodes[i].up = nodes[i - 1];
    }

    let pointer = k;

    cmd.forEach((c) => {
        const [keyword, num] = c.split(" ");

        if (keyword === "U") {
            for (let i = 0; i < num; i++) {
                pointer = nodes[pointer].up.val;
            }
        } else if (keyword === "D") {
            for (let i = 0; i < num; i++) {
                pointer = nodes[pointer].down.val;
            }
        } else if (keyword === "C") {
            const target = nodes[pointer];
            del_stack.push(target);
            if (target.up === null) {
                target.down.up = null;

                pointer = target.down.val;
            } else if (target.down === null) {
                target.up.down = null;

                pointer = target.up.val;
            } else {
                target.up.down = target.down;
                target.down.up = target.up;

                pointer = target.down.val;
            }
        } else if (keyword === "Z") {
            const re_node = del_stack.pop();
            if (re_node.up !== null) re_node.up.down = re_node;
            if (re_node.down !== null) re_node.down.up = re_node;
        } else {
            console.log("err");
        }
        let temp = new Array(n).fill("O");
        for (let del of del_stack) {
            const idx = del.val;
            temp[idx] = "X";
        }
        console.log("cursor :", pointer);
        console.log(temp.join(""));
    });
    let result = new Array(n).fill("O");
    for (let del of del_stack) {
        const idx = del.val;
        result[idx] = "X";
    }
    return result.join("");
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
    //solution(15, 2, ["D 11", "C", "U 7", "C", "D 2", "Z", "D 4", "U 12"])
);

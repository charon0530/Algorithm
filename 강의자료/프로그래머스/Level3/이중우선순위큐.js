function solution(operations) {
    let queue = [];
    operations.forEach((op) => {
        let [ch, num] = op.split(" ");
        num = Number(num);
        if (ch === "I") {
            queue.push(num);
            queue.sort((a, b) => a - b);
        } else if (ch === "D") num === 1 ? queue.pop() : queue.shift();
    });

    if (queue.length === 0) return [0, 0];
    return [queue[queue.length - 1], queue[0]];
}

console.log(
    solution([
        "I -45",
        "I 653",
        "D 1",
        "I -642",
        "I 45",
        "I 97",
        "D 1",
        "D -1",
        "I 333",
    ])
);

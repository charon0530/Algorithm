function solution(word) {
    let word_list = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "A") word_list.push(1);
        else if (word[i] === "E") word_list.push(2);
        else if (word[i] === "I") word_list.push(3);
        else if (word[i] === "O") word_list.push(4);
        else if (word[i] === "U") word_list.push(5);
    }
    word = word_list.join("");
    let count = 0;
    let stack = [];
    while (true) {
        if (stack.length !== 5) {
            stack.push(1);
            count++;
        } else {
            if (stack[stack.length - 1] === 5) {
                let idx = -1;
                for (let i = stack.length - 1; i >= 0; i--) {
                    if (stack[i] === 5) continue;
                    idx = i;
                    break;
                }
                for (let i = 0; i < 5 - (idx + 1); i++) {
                    stack.pop();
                }
                stack[idx] = stack[idx] + 1;
            } else {
                stack[stack.length - 1] += 1;
            }
            count++;
        }
        if (word === stack.join("")) return count;
    }
}

console.log(solution("AAAEA"));

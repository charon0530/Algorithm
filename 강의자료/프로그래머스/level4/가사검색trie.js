class Node {
    constructor(value = "", count = 0) {
        this.value = value;
        this.children = {};
        this.count = count;
    }
}

class Trie {
    constructor() {
        this.root = new Node("", 0);
    }

    Insert(str) {
        this.root.count++;
        let cur_node = this.root;

        for (let char of str) {
            if (cur_node.children[char] === undefined) {
                cur_node.children[char] = new Node(char, 0);
            }
            cur_node.children[char].count++;
            cur_node = cur_node.children[char];
        }
    }

    Find(str) {
        let cur_node = this.root;

        for (let char of str) {
            if (char === "?") return cur_node.count;
            if (cur_node.children[char] === undefined) return 0;
            cur_node = cur_node.children[char];
        }
    }
}
function solution(words, queries) {
    let answer = [];
    let trie_for_length = {};

    words.forEach((word) => {
        let len = word.length;
        if (trie_for_length[len] === undefined) {
            trie_for_length[len] = [new Trie(), new Trie()];
        }
        trie_for_length[len][0].Insert(word);
        trie_for_length[len][1].Insert(word.split("").reverse().join(""));
    });
    queries.forEach((query) => {
        let len = query.length;
        if (trie_for_length[len] === undefined) answer.push(0);
        else {
            if (query[0] !== "?") {
                answer.push(trie_for_length[len][0].Find(query));
            } else {
                answer.push(
                    trie_for_length[len][1].Find(
                        query.split("").reverse().join("")
                    )
                );
            }
        }
    });
    return answer;
}

console.log(
    solution(
        ["frodo", "front", "frost", "frozen", "frame", "kakao"],
        ["fro??", "????o", "fr???", "fro???", "pro?"]
    )
);

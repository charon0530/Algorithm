class Node {
    constructor(key = "") {
        this.key = key;
        this.child_nodes = {};
        this.count = 0;
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }

    Insert(str) {
        let cur_node = this.root;

        for (let c of str) {
            if (cur_node.child_nodes[c] === undefined) {
                cur_node.child_nodes[c] = new Node(c);
            }
            cur_node = cur_node.child_nodes[c];
            cur_node.count++;
        }
    }
    Search(key) {
        let cur_node = this.root;
        let count = 1;
        for (let c of key) {
            if (cur_node.child_nodes[c] === undefined) return -99;
            if (count === key.length) return key.length;
            if (cur_node.child_nodes[c].count === 1) return count;
            else {
                cur_node = cur_node.child_nodes[c];
                count++;
            }
        }
    }
}
function solution(words) {
    let answer = 0;
    let trie = new Trie();
    words.forEach((word) => {
        trie.Insert(word);
    });
    words.forEach((word) => {
        answer += trie.Search(word);
    });
    return answer;
}

console.log(solution(["go", "gone", "guild"]));

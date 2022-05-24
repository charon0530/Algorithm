class Node {
    constructor(key = "") {
        this.key = key;
        this.data = "";
        this.child_dic = {};
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
    Insert(str) {
        let cur_node = this.root;
        //str 돌면서 생성해나간다.
        for (let char of str) {
            if (cur_node.child_dic[char] === undefined) {
                cur_node.child_dic[char] = new Node(char);
            }
            cur_node = cur_node.child_dic[char];
        }
        cur_node.data = str;
    }

    Search(str) {
        let cur_node = this.root;
        for (let char of str) {
            if (cur_node.child_dic[char] === undefined) return [str];
            cur_node = cur_node.child_dic[char];
        }
        let result = [];
        this._DFS(cur_node, result);
        return result.sort();
    }

    _DFS(node, result_arr = []) {
        for (let key in node.child_dic) {
            let child = node.child_dic[key];

            if (child.data !== "") result_arr.push(child.data);
            this._DFS(child, result_arr);
        }
    }
}

function solution(words, queries) {
    let trie = new Trie();

    words.forEach((word) => {
        trie.Insert(word);
    });

    return trie.Search(queries);
}

console.log(
    solution(["frodo", "front", "frost", "frozen", "frame", "kakao"], "fro")
);

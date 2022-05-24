function solution(n, k) {
    var answer = [];
    let list = [];
    for (let i = 1; i <= n; i++) {
        list.push(i);
    }

    function fac(num) {
        if (num === 1) return 1;
        return num * fac(num - 1);
    }
    function DFS(rest_count) {
        if (rest_count === 1) {
            answer.push(list.shift());
            return;
        } else {
            let temp = fac(rest_count - 1);
            let moc = parseInt((k - 1) / temp);
            k -= moc * temp;
            answer.push(list[moc]);
            list.splice(moc, 1);
            DFS(rest_count - 1);
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(3, 5));

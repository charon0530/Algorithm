function solution(orders, course) {
    let answer = [];
    orders = orders.map((x) => x.split("").sort().join(""));
    // console.log(orders);
    const dic = {};
    course.forEach((c) => {
        dic[c] = {};
    });
    orders.forEach((order) => {
        function DFS(idx, temp = []) {
            if (idx === order.length) {
                if (temp.length < 2) return;
                if (course.includes(temp.length) === false) return;
                if (dic[temp.length][temp.join("")] === undefined) {
                    dic[temp.length][temp.join("")] = 1;
                } else {
                    dic[temp.length][temp.join("")]++;
                }
                return;
            } else {
                temp.push(order[idx]);
                DFS(idx + 1, temp);
                temp.pop();
                DFS(idx + 1, temp);
            }
        }
        DFS(0);
    });

    course.forEach((c) => {
        let max_val = Math.max(...Object.values(dic[c]));
        let filtered = Object.entries(dic[c])
            .filter((x) => x[1] === max_val && x[1] >= 2)
            .forEach((x) => answer.push(x[0]));
        //console.log(max_val);
        //console.log(filtered);
    });
    return answer.sort();
}

console.log(
    solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);

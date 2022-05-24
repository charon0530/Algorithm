function solution(orders, course = []) {
    let answer = [];
    const dic = {};
    orders = orders.map((x) => x.split("").sort().join(""));
    // course 숫자에 맞는 dic
    course.forEach((x) => {
        dic[x] = {};
    });
    // order 부분집합 구하고 해당 집합이 course의 숫자에 해당 될 경우 포함시킨다.
    orders.forEach((order) => {
        function DFS(source_idx, temp) {
            if (source_idx === order.length) {
                if (course.includes(temp.length)) {
                    let number_dic = dic[temp.length];
                    number_dic[temp.join("")] =
                        (number_dic[temp.join("")] || 0) + 1;
                }
            } else {
                temp.push(order[source_idx]);
                DFS(source_idx + 1, [...temp]);
                temp.pop();
                DFS(source_idx + 1, [...temp]);
            }
        }
        DFS(0, []);
    });

    course.forEach((c) => {
        let max_val = Math.max(...Object.values(dic[c]));
        Object.entries(dic[c])
            .filter((x) => x[1] === max_val && x[1] >= 2)
            .forEach((x) => {
                answer.push(x[0]);
            });
    });

    return answer.sort();
}

console.log(
    solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);

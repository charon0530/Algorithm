// 해당 풀이는 틀렸다!
// WHY? => seller가 중복될 수 있으며 이를 합으로 계산해도 안되기 때문
// 따라서 판매자(seller)로부터 위로 올라가면서 계산해야 함!

function solution(enroll, referral, seller, amount) {
    const graph = {};
    const cost = {};
    const sell = {};
    enroll.forEach((name) => {
        cost[name] = 0;
        sell[name] = 0;
        graph[name] = [];
    });
    cost["-"] = 0;
    sell["-"] = 0;
    graph["-"] = [];

    for (let i = 0; i < seller.length; i++) {
        sell[seller[i]] = amount[i] * 100;
    }

    for (let i = 0; i < referral.length; i++) {
        graph[referral[i]].push(enroll[i]);
    }

    function DFS(cur_node) {
        let my_sell = sell[cur_node];
        let return_val = parseInt(my_sell / 10);

        cost[cur_node] += my_sell - return_val;

        for (let next of graph[cur_node]) {
            let child = DFS(next);
            if (child < 10 || cur_node === "-") {
                cost[cur_node] += child;
            } else {
                let ten_percent = parseInt(child / 10);
                return_val += ten_percent;
                cost[cur_node] += child - ten_percent;
            }
        }
        return return_val;
    }
    DFS("-");
    const answer = [];
    enroll.forEach((name) => {
        answer.push(cost[name]);
    });
    console.log(cost);
    return answer;
}

console.log(
    solution(
        ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
        ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
        ["young", "john", "tod", "emily", "mary"],
        [12, 4, 2, 5, 10]
    )
);

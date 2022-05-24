// 일자형 DFS
// === 트리나 그래프가 아니다.
// 아래에서 위로!

function solution(enroll, referral, seller, amount) {
    const graph = {};
    const money_dic = {};
    for (let i = 0; i < enroll.length; i++) {
        graph[enroll[i]] = referral[i];
        money_dic[enroll[i]] = 0;
    }

    function DFS(person, money) {
        if (person === "-") return;

        let ten_percent = parseInt(money / 10);
        if (ten_percent < 1) {
            money_dic[person] += money;
        } else {
            money_dic[person] += money - ten_percent;
            DFS(graph[person], ten_percent);
        }
    }

    for (let i = 0; i < seller.length; i++) {
        DFS(seller[i], amount[i] * 100);
    }
    return Object.values(money_dic);
}
console.log(
    solution(
        ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
        ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
        ["young", "john", "tod", "emily", "mary"],
        [12, 4, 2, 5, 10]
    )
);

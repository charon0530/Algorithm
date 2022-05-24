function solution(enroll, referral, seller, amount) {
    let adj_list = {};
    let money_obj = {};

    for (let i = 0; i < enroll.length; i++) {
        adj_list[enroll[i]] = referral[i];
        money_obj[enroll[i]] = 0;
    }

    function DFS(people, money) {
        if (people === "-") {
        } else {
            let ten_percent = parseInt(money / 10);
            if (ten_percent >= 1) {
                money_obj[people] += money - ten_percent;
                DFS(adj_list[people], ten_percent);
            } else {
                money_obj[people] += money;
            }
        }
    }
    for (let i = 0; i < seller.length; i++) {
        DFS(seller[i], amount[i] * 100);
    }
    return Object.values(money_obj);
}

console.log(
    solution(
        ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
        ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
        ["young", "john", "tod", "emily", "mary"],
        [12, 4, 2, 5, 10]
    )
);

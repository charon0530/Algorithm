function solution(req_id, req_info) {
    var answer = [];

    const account = {};
    for (let i = 0; i < req_id.length; i++) {
        account[req_id[i]] = [0, 0];
    }
    const sell_pending = []; //[등록순서,아이디,구매수량,구매가격]
    const buy_pending = [];
    //TYPe 0 구매 1 판매
    for (let i = 0; i < req_id.length; i++) {
        const id = req_id[i];
        const [type, amount, price] = req_info[i];

        if (type === 1) {
            //판매요청중
            while (true) {
                const filtered = buy_pending
                    .filter((x) => x[3] >= price)
                    .sort((a, b) => {
                        if (a[3] === b[3]) return a[0] - b[0];
                        return b[3] - a[3];
                    });
                if (filtered.length === 0) {
                    sell_pending.push([i, id, amount, price]);
                    continue;
                }
                if (filtered.length > 1) {
                    const [buy_orderID, buy_id, buy_amount, buy_price] =
                        filtered[0];
                    const trade_amount = Math.min(buy_amount, amount);
                    account[id][0] -= trade_amount;
                    account[id][1] += trade_amount * price;
                    account[buy_id][0] += trade_amount;
                    account[buy_id][1] -= trade_amount * price;

                    filtered[0][3] -= Math.min(buy_amount, amount);
                    amount -= Math.min(buy_amount, amount);
                    if (filtered[0][3] === 0) {
                        buy_pending = buy_pending.filter(
                            (x) => x[0] !== buy_orderID
                        );
                    }
                }
                if (amount === 0) break;
            }
        } else {
            while (true) {
                const filtered = sell_pending
                    .filter((x) => x[3] <= price)
                    .sort((a, b) => {
                        if (a[3] === b[3]) return a[0] - b[0];
                        return a[3] - b[3];
                    });
                if (filtered.length === 0) {
                    buy_pending.push([i, id, amount, price]);
                    continue;
                }
                if (filtered.length > 1) {
                    const [sell_orderID, sell_id, sell_amount, sell_price] =
                        filtered[0];
                    const trade_amount = Math.min(sell_id, amount);
                    account[id][0] += trade_amount;
                    account[id][1] -= trade_amount * sell_price;
                    account[sell_id][0] -= trade_amount;
                    account[sell_id][1] += trade_amount * sell_price;

                    filtered[0][3] -= Math.min(sell_amount, amount);
                    amount -= Math.min(sell_amount, amount);
                    if (filtered[0][3] === 0) {
                        sell_pending = sell_pending.filter(
                            (x) => x[0] !== sell_orderID
                        );
                    }
                }
                if (amount === 0) break;
            }
        }
    }
    return answer;
}

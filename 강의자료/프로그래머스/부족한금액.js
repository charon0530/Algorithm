function solution(price, money, count) {
    var answer = -1;
    let sum = 0;
    let cur_count = 0;
    for (let i = 0; i<count; i++){
        cur_count++;
        sum += price*cur_count;
    }
    if (money >= sum) return 0;
    return sum - money;
}